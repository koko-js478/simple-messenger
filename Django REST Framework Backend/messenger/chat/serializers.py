from django.contrib.auth.models import User
from .models import ChatView
from rest_framework import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password']
        extra_kwargs = {'password' : {'write_only' : True, 'required' : True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user

class ChatViewSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChatView
        fields = ['id', 'sender', 'receiver', 'sent_date', 'textcontent']
