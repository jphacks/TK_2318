from rest_framework import serializers

from .models import Project, Task


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        # fields = ("taskName", "branchName", "date")
        fields = "__all__"

    # シリアライザーの出力フォーマットを指定
    # def to_representation(self, instance):
    #     data = super().to_representation(instance)
    #     return {
    #         "taskName": instance.name,
    #         "branchName": instance.branch_name,
    #         "date": instance.deadline.strftime("%Y-%m-%d"),
    #     }


class ProjectSerializer(serializers.ModelSerializer):
    tasks = TaskSerializer(many=True, read_only=True)

    class Meta:
        model = Project
        # fields = ("name", "random_url", "tasks")
        fields = "__all__"
