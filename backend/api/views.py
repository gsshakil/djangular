from django.shortcuts import render
# from rest_framework import generics
from rest_framework.viewsets import ModelViewSet

from .models import Contact 
from .serializers import ContactSerializer


# Create your views here.
class Contact(ModelViewSet):
    serializer_class = ContactSerializer
    queryset = Contact.objects.all()

# class ContactDetail(generics.RetrieveUpdateDestroyAPIView):
#     serializer_class = ContactSerializer
#     queryset = Contact.objects.all()
