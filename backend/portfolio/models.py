from django.db import models


class Profile(models.Model):
    name = models.CharField(max_length=120)
    role = models.CharField(max_length=120)
    location = models.CharField(max_length=120)
    email = models.EmailField()
    phone = models.CharField(max_length=30)
    linkedin = models.URLField()
    github = models.URLField()
    summary = models.TextField()
    about = models.TextField(blank=True)

    def __str__(self):
        return self.name


class SkillGroup(models.Model):
    name = models.CharField(max_length=80)
    items = models.TextField(help_text="Comma-separated list")
    order = models.PositiveSmallIntegerField(default=0)

    class Meta:
        ordering = ["order", "id"]

    def __str__(self):
        return self.name


class Experience(models.Model):
    role = models.CharField(max_length=120)
    company = models.CharField(max_length=120)
    project = models.CharField(max_length=200, blank=True)
    tech = models.TextField(blank=True, help_text="Comma-separated list")
    points = models.TextField(help_text="One bullet per line")
    order = models.PositiveSmallIntegerField(default=0)

    class Meta:
        ordering = ["order", "id"]

    def __str__(self):
        return f"{self.role} at {self.company}"


class Project(models.Model):
    title = models.CharField(max_length=200)
    subtitle = models.CharField(max_length=200, blank=True)
    tech = models.TextField(help_text="Comma-separated list")
    points = models.TextField(help_text="One bullet per line")
    github_url = models.URLField(blank=True)
    live_url = models.URLField(blank=True)
    order = models.PositiveSmallIntegerField(default=0)

    class Meta:
        ordering = ["order", "id"]

    def __str__(self):
        return self.title


class Education(models.Model):
    DEGREE, CERT, LANGUAGE = "degree", "certification", "language"
    KINDS = [(DEGREE, "Degree"), (CERT, "Certification"), (LANGUAGE, "Language")]

    kind = models.CharField(max_length=20, choices=KINDS)
    title = models.CharField(max_length=200)
    place = models.CharField(max_length=200, blank=True)
    year = models.CharField(max_length=10, blank=True)
    text = models.TextField(blank=True)
    order = models.PositiveSmallIntegerField(default=0)

    class Meta:
        ordering = ["order", "id"]

    def __str__(self):
        return f"{self.get_kind_display()}: {self.title}"


class ContactMessage(models.Model):
    name = models.CharField(max_length=120)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.name} <{self.email}>"
