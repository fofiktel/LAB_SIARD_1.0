from django_filters import rest_framework as filters
from .models import Posts

class CharFilterInFilter(filters.BaseInFilter, filters.CharFilter):
    pass

class NumberInFilter(filters.BaseInFilter,filters.NumberFilter):
    pass


class PostFilter(filters.FilterSet):
    theme = CharFilterInFilter(field_name='theme')
    published_year = NumberInFilter(field_name='published_year')
    class Meta:
        model = Posts
        fields = ['theme','published_year']
