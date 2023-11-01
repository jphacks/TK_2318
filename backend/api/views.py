import json
from pathlib import Path

import environ
import graphviz
import openai
from django.urls import reverse
from rest_framework import generics, permissions, status
from rest_framework.generics import ListAPIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Project, Task
from .serializers import ProjectSerializer, TaskSerializer

BASE_DIR = Path(__file__).resolve().parent.parent
env = environ.Env()
environ.Env.read_env(str(BASE_DIR / ".env"))

openai.api_key = env("OPENAI_APIKEY")


class CreateProjectView(APIView):
    # 認証しなくてもAPIにアクセスできるようになる
    permission_classes = (permissions.AllowAny,)

    def post(self, request, *args, **kwargs):
        # リクエストからプロジェクト名を取得
        project_name = request.data.get("name")

        # プロジェクトをデータベースに作成
        project = Project.objects.create(name=project_name)

        # GPT-3.5 Turboを使用してタスクを自動生成
        gpt_response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {
                    "role": "system",
                    "content": """
                                あなたはプロンプトエンジニアです。
                                以下のプロンプロをより正確に動くように訂正して。
                                [プロンプト]
                                [役割]
                                あなたは、私が提示するタスクの内容を取り込んで、そのタスク細分化し、それぞれ“タスク名“、”ブランチ名“,”期限“を考えてください。
                                [ゴール]
                                私が提示するタスクを細分化し、以下の[出力]の形式で出力するのがゴールです。
                                [ルール]
                                branchNameは全て半角小文字にすること。
                                あなたは、出力をする際にfrontend、backend内のタスクを最低3つずつ作成すること。
                                dateは終了日だけを書いてください。
                                [フロー]
                                (1)私は下記の[フォーマット]に従って、タスクを提示します。
                                (2)あなたは、その内容を受け、そのタスクを細分化してください。
                                (3)それぞれのタスクには、“タスク名“、”ブランチ名“,”期限“の属性を追加してください。(期限は開発開始日と終了日を参考に決定してください。)
                                (4)上記のタスクを、フロントエンド、バックエンドに分類してください。
                                [出力]
                                json
                                {
                                “frontend”: [
                                    {
                                    “taskName“: “○○“,
                                    “branchName“: “feature/frontend/○○““,
                                    “date“:”○○○○-○○-○○”
                                    }
                                ],
                                “backend”: [
                                    {
                                    “taskName“: “○○“,
                                    “branchName“: “feature/backend/○○“,
                                    “date“:”○○○○-○○-○○”
                                    }
                                ]
                                }
                                [フォーマット]
                                <タスク名>
                                <開始日>
                                <終了日>
                                """,
                },
                {
                    "role": "user",
                    "content": f"""
                                <タスク名>{project_name}のタスクを作成する
                                <開始日>2023-01-01
                                <終了日>2023-01-31
                                """,
                },
            ],
            temperature=0.7,
            max_tokens=3000,
        )

        # GPTから生成された情報を取得
        generated_info = gpt_response["choices"][0]["message"]["content"]

        # JSONデータをPythonの辞書に変換
        data = json.loads(generated_info)

        # フロントエンドのタスクを保存
        for task in data["frontend"]:
            task_name = task["taskName"]
            branch_name = f"feature/{task_name.replace(' ', '_').lower()}"
            Task.objects.create(
                name=task_name,
                branch_name=branch_name,
                deadline=task["date"],
                project=project,
            )

        # バックエンドのタスクを保存
        for task in data["backend"]:
            task_name = task["taskName"]
            branch_name = f"feature/{task_name.replace(' ', '_').lower()}"
            Task.objects.create(
                name=task_name,
                branch_name=branch_name,
                deadline=task["date"],
                project=project,
            )

        # ここでプロジェクトの詳細ページへのURLを生成
        project_detail_url = reverse("project_detail", args=[str(project.random_url)])

        # プロジェクトの詳細ページへリダイレクト
        return Response(status=status.HTTP_302_FOUND, headers={"Location": project_detail_url})


class ProjectDetailAPIView(generics.RetrieveAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    lookup_field = "random_url"

    # def get_object(self):
    #     # プロジェクトオブジェクトを取得
    #     project = super().get_object()
    #     # プロジェクトに関連するタスクも取得
    #     tasks = Task.objects.filter(project=project)

    #     # シリアライズされたタスク情報を整形
    #     frontend_tasks = TaskSerializer(tasks.filter(branch_name__startswith="feature/frontend"), many=True).data
    #     backend_tasks = TaskSerializer(tasks.filter(branch_name__startswith="feature/backend"), many=True).data

    #     return {"frontend": frontend_tasks, "backend": backend_tasks}

    def get_object(self):
        # プロジェクトオブジェクトを取得
        project = super().get_object()
        # プロジェクトに関連するタスクも取得
        project.tasks = Task.objects.filter(project=project)
        return project
