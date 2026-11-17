from rest_framework import status
from rest_framework.generics import CreateAPIView
from rest_framework.response import Response
from rest_framework.throttling import ScopedRateThrottle
from rest_framework.views import APIView

from .models import ContactMessage, Education, Experience, Profile, Project, SkillGroup
from .serializers import (
    ContactMessageSerializer,
    ExperienceSerializer,
    ProfileSerializer,
    ProjectSerializer,
    SkillGroupSerializer,
)


class PortfolioView(APIView):
    """GET /api/portfolio/ returns everything the React site needs in one call."""

    def get(self, request):
        profile = Profile.objects.first()
        if profile is None:
            return Response(
                {"detail": "No data yet. Run: python manage.py seed_portfolio"},
                status=status.HTTP_404_NOT_FOUND,
            )
        education = list(Education.objects.all())
        degree = next((e for e in education if e.kind == Education.DEGREE), None)
        return Response(
            {
                "profile": ProfileSerializer(profile).data,
                "skills": SkillGroupSerializer(SkillGroup.objects.all(), many=True).data,
                "experience": ExperienceSerializer(Experience.objects.all(), many=True).data,
                "projects": ProjectSerializer(Project.objects.all(), many=True).data,
                "education": {
                    "degree": {"title": degree.title, "place": degree.place, "year": degree.year} if degree else None,
                    "certs": [
                        {"title": e.title, "place": e.place, "text": e.text}
                        for e in education
                        if e.kind == Education.CERT
                    ],
                    "languages": [[e.title, e.text] for e in education if e.kind == Education.LANGUAGE],
                },
            }
        )


class ContactView(CreateAPIView):
    """POST /api/contact/ stores a message from the contact form."""

    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer
    throttle_classes = [ScopedRateThrottle]
    throttle_scope = "contact"
