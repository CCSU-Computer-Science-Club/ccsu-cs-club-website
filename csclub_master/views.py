from django.shortcuts import render


def master_home(request):
    return render(request, 'master.html')
