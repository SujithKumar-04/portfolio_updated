from rest_framework import serializers

from .models import ContactMessage, Experience, Profile, Project, SkillGroup


def split_csv(text):
    return [p.strip() for p in text.split(",") if p.strip()]


def split_lines(text):
    return [p.strip() for p in text.splitlines() if p.strip()]


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        exclude = ["id"]


class SkillGroupSerializer(serializers.ModelSerializer):
    group = serializers.CharField(source="name")
    items = serializers.SerializerMethodField()

    class Meta:
        model = SkillGroup
        fields = ["group", "items"]

    def get_items(self, obj):
        return split_csv(obj.items)


class ExperienceSerializer(serializers.ModelSerializer):
    tech = serializers.SerializerMethodField()
    points = serializers.SerializerMethodField()

    class Meta:
        model = Experience
        fields = ["role", "company", "project", "tech", "points"]

    def get_tech(self, obj):
        return split_csv(obj.tech)

    def get_points(self, obj):
        return split_lines(obj.points)


class ProjectSerializer(serializers.ModelSerializer):
    tech = serializers.SerializerMethodField()
    points = serializers.SerializerMethodField()

    class Meta:
        model = Project
        fields = ["title", "subtitle", "tech", "points", "github_url", "live_url"]

    def get_tech(self, obj):
        return split_csv(obj.tech)

    def get_points(self, obj):
        return split_lines(obj.points)


class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = ["name", "email", "message"]

    def validate_message(self, value):
        if len(value.strip()) < 10:
            raise serializers.ValidationError("Please write at least 10 characters.")
        return value.strip()
