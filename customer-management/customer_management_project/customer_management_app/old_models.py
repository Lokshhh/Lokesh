# models.py in customer_management_app

from django.db import models

class UserData(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    # Add other fields as needed
