#from django.shortcuts import get_object_or_404, reverse, redirect, render
from django.http import Http404, HttpResponse, HttpResponseRedirect
#from django.contrib.auth import login as auth_login
#from django.contrib.auth import logout as auth_logout
from django.contrib.auth.models import User
#from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
#from django.contrib.auth.decorators import login_required
from rest_framework import viewsets
from rest_framework import permissions
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated


from django.views.decorators.csrf import csrf_exempt
from .serializers import UserSerializer
from .serializers import ChatViewSerializer
from django.utils import timezone
import ast

#from .forms import MessageForm
from .models import ChatView


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    #authentication_classes = [TokenAuthentication,]
    #permission_classes = [permissions.IsAuthenticated]

class ChatViewViewSet(viewsets.ModelViewSet):
    queryset = ChatView.objects.all()
    serializer_class = ChatViewSerializer
    #authentication_classes = [TokenAuthentication,]
    #permission_classes = [permissions.IsAuthenticated]

@csrf_exempt
def create_new_chat(request):
    if request.method == "POST":
        querydictstr = request.body.decode('UTF-8')
        querydict = ast.literal_eval(querydictstr)
        ChatView.create_chat(querydict['textcontent'], querydict['sender'], querydict['receiver'])
    return HttpResponse("Bonjour Idiot")
