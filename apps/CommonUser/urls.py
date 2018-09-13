# -*- coding: utf-8 -*-
"""
-------------------------------------------------
   Project Name:   zyycj
   File Name：     urls.py
   Description :
   Author :        nanly
   date：          2018-09-09 16:28
-------------------------------------------------
   Change Activity:
                   2018-09-09:
   IDE:
                   PyCharm:
-------------------------------------------------
"""
from django.urls import path
from . import views
app_name = 'CommonUser'

urlpatterns = [
	path('', views.index, name='index')
]


