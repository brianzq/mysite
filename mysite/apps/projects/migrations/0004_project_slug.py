# -*- coding: utf-8 -*-
# Generated by Django 1.10.3 on 2017-04-17 08:13
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0003_project_desc'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='slug',
            field=models.SlugField(default='toto', max_length=100),
            preserve_default=False,
        ),
    ]