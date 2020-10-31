from django.urls import path

from users.views import UserDetail, UserList

urlpatterns = [
    path('', UserList.as_view()),
    path('<int:pk>/', UserDetail.as_view()),
]
