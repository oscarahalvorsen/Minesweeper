from django.shortcuts import render
from rest_framework import generics
from .serializers import TileSerializer, CreateTileSerializer
from .models import Tile
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.
class TileView(generics.ListAPIView):
    queryset = Tile.objects.all()  
    serializer_class = TileSerializer
    
class CreateTileView(APIView):
    serializer_class = CreateTileSerializer
    
    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()
            
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            covered = serializer.data.covered
            flag = serializer.data.flag
            tempUncovered = serializer.data.tempUncovered