from rest_framework.response import Response

from .serializer import MyTokenObtainPairSerializer, RegisterSerializer,PostSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny
from .models import Posts
from django_filters.rest_framework import DjangoFilterBackend
from .service import PostFilter
from rest_framework.decorators import api_view
# Create your views here.

class PostsList(generics.ListAPIView):
    serializer_class = PostSerializer
    queryset = Posts.objects.all()
    filter_backends = (DjangoFilterBackend,)
    filterset_class = PostFilter


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer



@api_view(['GET'])
def get_level(request):
    return Response('1;208;32 4;309;50')




