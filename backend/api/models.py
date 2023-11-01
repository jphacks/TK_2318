import uuid

from django.db import models


class Project(models.Model):
    name = models.CharField(max_length=30)
    random_url = models.UUIDField(default=uuid.uuid4, unique=True)

    def __str__(self):
        return self.name


class Task(models.Model):
    name = models.CharField(max_length=30)
    branch_name = models.CharField(max_length=100)
    deadline = models.DateTimeField()
    is_completed = models.BooleanField(default=False)
    project = models.ForeignKey(Project, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
