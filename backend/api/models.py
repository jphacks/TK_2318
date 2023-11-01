from django.db import models


class Project(models.Model):
    name = models.CharField(max_length=30)
    random_url = models.CharField(max_length=10, unique=True)
    task_name = models.CharField(max_length=30)
    branch_name = models.CharField(max_length=100)
    is_completed = models.BooleanField(default=False)
    deadline = models.DateTimeField()

    def __str__(self):
        return self.name
