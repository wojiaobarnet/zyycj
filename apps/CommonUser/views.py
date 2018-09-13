from django.shortcuts import render


def index(request):					# 首页和index匹配
	return render(request, 'CommonUser/index.html')

# Create your views here.
