from django.urls import path
from .views import CustomerListCreateView, CustomerRetrieveUpdateDestroyView

urlpatterns = [
    path('customers/', CustomerListCreateView.as_view(), name='customer-list-create'),
    path('customers/<int:pk>/', CustomerRetrieveUpdateDestroyView.as_view(), name='customer-retrieve-update-destroy'),
]




# urls.py in customer_management_app

from django.urls import path
from .views import UploadUserDataView, FetchAllUserDataView

urlpatterns = [
    path('upload/', UploadUserDataView.as_view(), name='upload-user-data'),
    path('fetch-all/', FetchAllUserDataView.as_view(), name='fetch-all-user-data'),
]



# urls.py in your project

from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('customer_management_app.urls')),  # Adjust the URL prefix as needed
]
