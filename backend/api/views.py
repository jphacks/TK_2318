# Create your views here.
import random
import string
from datetime import datetime, timedelta

import openai
from django.shortcuts import redirect, render
from graphviz import Digraph
from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Project
from .serializers import ProjectSerializer

# OpenAI APIキーを設定
# openai.api_key = 'YOUR_OPENAI_API_KEY'


class CreateProjectView(APIView):
    # どのユーザーでもアクセス許可されている
    permission_classes = (AllowAny,)

    def post(self, request, format=None):
        project_name = request.data.get("project_name")

        if not project_name:
            return Response({"error": "Project name is required"}, status=status.HTTP_400_BAD_REQUEST)

        # OpenAI APIを使用してタスク情報を生成
        response = openai.Completion.create(
            engine="text-davinci-002", prompt=f"Generate task for project: {project_name}", max_tokens=50
        )

        # OpenAIの応答からタスク情報を抽出
        task_info = response.choices[0].text

        # タスク情報をモデルに保存
        task = Project(project_name=project_name, task_name=task_info, branch_name="default", deadline=None)
        task.save()

        serializer = ProjectSerializer(task)

        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def generate_task(self, project_name):
        # タスクをOpenAI APIを使用して生成
        task_prompt = f"Create a task for project {project_name}"
        response = openai.Completion.create(engine="text-davinci-002", prompt=task_prompt, max_tokens=50)
        task_name = response.choices[0].text.strip()
        return task_name

    def generate_branch_diagram(self, branch_name, project_name):
        # グラフを生成
        dot = Digraph(comment="Project Visualization")
        dot.node(branch_name, label=project_name)

        # 画像を保存
        dot.render(f"project_visualization_{branch_name}", format="png")


class ProjectDetail(APIView):
    def get(self, request, random_url):
        try:
            project = Project.objects.get(random_url=random_url)
            serializer = ProjectSerializer(project)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Project.DoesNotExist:
            return Response({"error": "Project not found"}, status=status.HTTP_404_NOT_FOUND)
