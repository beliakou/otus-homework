from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView


class StatusPage(APIView):
    def get(self, request):
        return Response(data={"status": "ok"}, status=status.HTTP_200_OK)
