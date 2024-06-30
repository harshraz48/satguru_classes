from django.urls import path

from pages import views

urlpatterns = [
    path("", views.home, name="home"),
    path("about_us", views.about_us, name="about_us"),
    path("courses", views.courses, name="courses"),
    path("results", views.results, name="results"),
]
