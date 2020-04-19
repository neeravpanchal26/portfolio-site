# Generated by Django 3.0.4 on 2020-04-04 15:30

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('wagtailimages', '0001_squashed_0021'),
        ('wagtailcore', '0045_assign_unlock_grouppagepermission'),
    ]

    operations = [
        migrations.CreateModel(
            name='personalinfo',
            fields=[
                ('page_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='wagtailcore.Page')),
                ('firstName', models.CharField(max_length=50)),
                ('lastName', models.CharField(max_length=50)),
                ('email', models.CharField(blank=True, max_length=250, null=True)),
                ('gitProfileLink', models.CharField(blank=True, max_length=500, null=True)),
                ('gitApiLink', models.CharField(blank=True, max_length=500, null=True)),
                ('linkedInLink', models.CharField(blank=True, max_length=500, null=True)),
                ('personalImage', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='personalImage', to='wagtailimages.Image')),
                ('websiteLogo', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='websiteLogo', to='wagtailimages.Image')),
            ],
            options={
                'abstract': False,
            },
            bases=('wagtailcore.page',),
        ),
    ]
