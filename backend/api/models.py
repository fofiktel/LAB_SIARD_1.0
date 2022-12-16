from django.db import models


class Posts(models.Model):
    title = models.CharField(max_length=40)
    text = models.CharField(max_length=100)
    theme = models.CharField(max_length=40)
    published_year = models.IntegerField(default=1970)


def __str__(self):
    return self.title
# Create your models here.
