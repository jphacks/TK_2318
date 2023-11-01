from rest_framework import status
from rest_framework.test import APITestCase

from ..models import Project


class ProjectAPITestCase(APITestCase):
    """プロジェクトを作成するAPIエンドポイントのテスト"""

    def test_create_project(self):
        # テスト用のデータをセットアップ
        data = {"name": "ToDoアプリを作成したい。"}

        # APIエンドポイントにPOSTリクエストを送信
        response = self.client.post("http://127.0.0.1:8000/api/create-project/", data, format="json")

        # レスポンスを検証
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

        # プロジェクトがデータベースに正しく作成されたか確認
        self.assertEqual(Project.objects.count(), 1)
        project = Project.objects.get()
        self.assertEqual(project.name, "ToDoアプリを作成したい。")
