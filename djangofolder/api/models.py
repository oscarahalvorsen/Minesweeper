from django.db import models

# Create your models here.
class Tile(models.Model):
    x = models.PositiveIntegerField()
    y = models.PositiveIntegerField()
    type = models.PositiveIntegerField(null=False, default=0)
    covered = models.BooleanField(null=False, default=True)
    flag = models.BooleanField(null=False, default=False)
    tempUncovered = models.BooleanField(null=False, default=False)
