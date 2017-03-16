from django.shortcuts import render
from rest_framework import generics

from .models import Contact 
from .serializers import ContactSerializer


# Create your views here.
class Contact(generics.ListCreateAPIView):
    serializer_class = ContactSerializer
    queryset = Contact.objects.all()
