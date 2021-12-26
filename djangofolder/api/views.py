from django.shortcuts import render
from rest_framework import generics
from .serializers import TileSerializer
from .models import Tile

# Create your views here.
class TileView(generics.ListAPIView):
    queryset = Tile.objects.all()  
    serializer_class = TileSerializer