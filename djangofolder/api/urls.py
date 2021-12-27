from django.urls import path
from .views import TileView

urlpatterns = [ 
    path('', TileView.as_view())
]