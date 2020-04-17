from django.urls import include, path
from rest_framework import routers
from . import views
from rest_framework.authtoken.views import ObtainAuthToken

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'chats', views.ChatViewViewSet)

urlpatterns = [
    path('createchat/', views.create_new_chat, name='create_chat'),
    path('', include(router.urls)),
    path('api-auth/', ObtainAuthToken.as_view()),
]
