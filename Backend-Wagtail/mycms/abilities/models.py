from django.db import models

# Custom imports
from wagtail.core.models import Page
from wagtail.core.fields import RichTextField
from wagtail.admin.edit_handlers import FieldPanel
from wagtail.api import APIField


# Create your models here.
class Abilities(Page):
    abilityIcon = models.CharField(max_length=50, blank=False, null=True)
    abilityDescription = RichTextField(blank=False)

    content_panels = Page.content_panels + [
        FieldPanel('abilityIcon'),
        FieldPanel('abilityDescription')
    ]

    api_fields = [
        APIField('abilityIcon'),
        APIField('abilityDescription')
    ]
