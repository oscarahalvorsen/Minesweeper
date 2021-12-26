from rest_framework import serializers
from .models import Tile

class TileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tile
        fields = ("x", "y", "type", "covered", "flag", "tempUncovered")



