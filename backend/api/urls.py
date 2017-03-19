from django.conf.urls import url
from rest_framework.routers import DefaultRouter

from .views import Contact

router = DefaultRouter()
router.register(r'contact', Contact)

urlpatterns = router.urls

# urlpatterns = [
#     url(r'contact/', Contact.as_view()),
#     url(r'contact/(?P<pk>[0-9]+)/$', ContactDetail.as_view())
# ]