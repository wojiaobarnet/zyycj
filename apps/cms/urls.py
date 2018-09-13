# -*- coding: utf-8 -*-
"""
-------------------------------------------------
   Project Name:   zyycj
   File Name：     urls.py
   Description :
   Author :        nanly
   date：          2018-09-13 21:05
-------------------------------------------------
   Change Activity:
                   2018-09-13:
   IDE:
                   PyCharm:
-------------------------------------------------
"""

from django.urls import path
from . import views

app_name = 'cms'

urlpatterns = [
    path('login/', views.login_view, name='login')

]
