from django.urls import path

from .views import CreateProjectView, ProjectDetailAPIView

urlpatterns = [
    path("create-project/", CreateProjectView.as_view(), name="create_project"),
    path("project/<uuid:random_url>/", ProjectDetailAPIView.as_view(), name="project_detail"),
]
