from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    ROLE_CHOICES = [
        ('consumer', 'Consumer'),
        ('owner', 'Restaurant Owner'),
    ]
    role = models.CharField(max_length=10, choices=ROLE_CHOICES)

class Restaurant(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name="restaurants")
    name = models.CharField(max_length=255)
    city = models.CharField(max_length=100)
    area = models.CharField(max_length=100)
    cuisine = models.CharField(max_length=100)
    rating = models.FloatField(default=0)
    cost_for_two = models.IntegerField()
    is_veg = models.BooleanField(default=True)
    open_time = models.TimeField()
    close_time = models.TimeField()
    image = models.ImageField(upload_to="restaurant_images/")

class Table(models.Model):
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE, related_name="tables")
    capacity = models.IntegerField()
    quantity = models.IntegerField()

class Slot(models.Model):
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE, related_name="slots")
    start_time = models.TimeField()
    end_time = models.TimeField()
    date = models.DateField()

class Booking(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="bookings")
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE, related_name="bookings")
    table_capacity = models.IntegerField()
    slot = models.ForeignKey(Slot, on_delete=models.CASCADE, related_name="bookings")
    table_id = models.IntegerField()
    date = models.DateField()


