from django.db import models

# Custom imports
from wagtail.core.models import Page
from wagtail.core.fields import RichTextField
from wagtail.admin.edit_handlers import FieldPanel
from wagtail.images.edit_handlers import ImageChooserPanel
from wagtail.images.api.fields import ImageRenditionField
from wagtail.api import APIField


# Create your models here.
class personalinfo(Page):
    firstName = models.CharField(max_length=50, blank=False, null=False)
    lastName = models.CharField(max_length=50, blank=False, null=False)
    description = models.CharField(max_length=500, blank=False, null=True)
    email = models.CharField(max_length=250, blank=True, null=True)
    gitProfileLink = models.CharField(max_length=500, blank=True, null=True)
    gitApiLink = models.CharField(max_length=500, blank=True, null=True)
    linkedInLink = models.CharField(max_length=500, blank=True, null=True)
    websiteLogo = models.ForeignKey('wagtailimages.Image', on_delete=models.SET_NULL, null=True,
                                    related_name='websiteLogo')
    personalImage = models.ForeignKey('wagtailimages.Image', on_delete=models.SET_NULL, null=True,
                                      related_name='personalImage')

    content_panels = Page.content_panels + [
        FieldPanel('firstName'),
        FieldPanel('lastName'),
        FieldPanel('description'),
        FieldPanel('email'),
        FieldPanel('gitProfileLink'),
        FieldPanel('gitApiLink'),
        FieldPanel('linkedInLink'),
        ImageChooserPanel('websiteLogo'),
        ImageChooserPanel('personalImage'),
    ]

    api_fields = [
        APIField('firstName'),
        APIField('lastName'),
        APIField('description'),
        APIField('email'),
        APIField('gitProfileLink'),
        APIField('gitApiLink'),
        APIField('linkedInLink'),
        APIField('websiteLogoField', serializer=ImageRenditionField('fill-64x64', source='websiteLogo')),
        APIField('personalImageField', serializer=ImageRenditionField('fill-1739x2319', source='personalImage')),
    ]

    max_count = 1
