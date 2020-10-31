from django.db import models

# Create your models here.

class User(models.Model):
    firstname = models.CharField(db_index=True, max_length=255, unique=True)
    lastname = models.CharField(max_length=255, unique=True)
    email = models.EmailField(null=True, blank=True)

    class Meta:
        db_table = "app_users"