# -*- coding: utf-8 -*-
# Generated by Django 1.10.3 on 2017-04-03 04:38
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0003_post_desc'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='desc',
            field=models.TextField(default=''),
        ),
    ]
