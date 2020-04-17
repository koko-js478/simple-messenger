from django.db import models
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from django.utils import timezone

class ChatView(models.Model):
    sender = models.ForeignKey(User, on_delete=models.CASCADE, default=None, related_name='sender')
    receiver = models.ForeignKey(User, on_delete=models.CASCADE, default=None, related_name='receiver')
    sent_date = models.DateTimeField('date published')
    textcontent = models.TextField(default = 'Hi Hamba !')

    def __str__(self):
        return str(self.id)

    def create_chat(message, senderid, receiverid):
        senderid = int(senderid)
        receiverid = int(receiverid)
        chatnew = ChatView(sender = get_object_or_404(User, id=senderid), receiver = get_object_or_404(User, id=receiverid), sent_date = timezone.now(), textcontent = message)
        chatnew.save()
