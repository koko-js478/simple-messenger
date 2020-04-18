from django.urls import include, path
from rest_framework import routers
from . import views
from .views import CustomAuthToken
from rest_framework.authtoken import views as viewsrest

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'chats', views.ChatViewViewSet)

urlpatterns = [
    path('getcurrentuser/', views.get_current_user_id, name='get_crnt_user'),
    path('signup/', views.signup, name='new_signup'),
    path('createchat/', views.create_new_chat, name='create_chat'),
    path('', include(router.urls)),
    path('api-auth/', CustomAuthToken.as_view()),
]
