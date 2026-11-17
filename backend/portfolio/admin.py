from django.contrib import admin

from .models import ContactMessage, Education, Experience, Profile, Project, SkillGroup

admin.site.site_header = "Portfolio admin"


@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = ("name", "role", "email")


@admin.register(SkillGroup)
class SkillGroupAdmin(admin.ModelAdmin):
    list_display = ("name", "order")


@admin.register(Experience)
class ExperienceAdmin(admin.ModelAdmin):
    list_display = ("role", "company", "order")


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ("title", "order")


@admin.register(Education)
class EducationAdmin(admin.ModelAdmin):
    list_display = ("title", "kind", "order")
    list_filter = ("kind",)


@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ("name", "email", "created_at")
    readonly_fields = ("name", "email", "message", "created_at")
