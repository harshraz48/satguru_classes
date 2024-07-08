# Create your views here.
from django.shortcuts import render, redirect
from django.core.mail import send_mail
from .forms import UserForm


def contact_form(request):
    if request.method == "POST":
        form = UserForm(request.POST)
        if form.is_valid():
            user = form.save()
            # Send email
            send_mail(
                "New Contact Form Submission",
                f"Name: {user.name}\nPhone: {user.phone}\nEmail: {user.email}",
                "from@example.com",
                ["to@example.com"],
                fail_silently=False,
            )
            return redirect("success")
    else:
        form = UserForm()
    return render(request, "user/contact_form.html", {"form": form})


def success(request):
    return render(request, "user/success.html")