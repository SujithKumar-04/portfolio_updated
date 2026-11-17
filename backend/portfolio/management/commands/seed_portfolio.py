"""Fill the database with the portfolio content. Safe to run more than once."""
from django.core.management.base import BaseCommand

from portfolio.models import Education, Experience, Profile, Project, SkillGroup


class Command(BaseCommand):
    help = "Load Sujith Kumar Chepuri's portfolio content into the database."

    def handle(self, *args, **options):
        for model in (Profile, SkillGroup, Experience, Project, Education):
            model.objects.all().delete()

        Profile.objects.create(
            name="Sujith Kumar Chepuri",
            role="Full Stack Developer",
            location="Hyderabad, India",
            email="ch.sujithkumar2001@gmail.com",
            phone="+91-9398804166",
            linkedin="https://www.linkedin.com/in/chepuri-sujithkumar",
            github="https://github.com/SujithKumar-04",
            summary=(
                "Full Stack Developer with professional experience at Wipro, building and maintaining scalable "
                "web applications using Python, Django, JavaScript, HTML5, CSS3 and SQL. Skilled in RESTful API "
                "design and integration, relational database management and responsive front-end development."
            ),
            about="I deliver software through Agile/Scrum and SDLC practices, with growing expertise in cloud-native development and system design.",
        )

        skills = [
            ("Languages", "Python, JavaScript, SQL, HTML5, CSS3"),
            ("Frameworks & Libraries", "Django, Django REST Framework, Bootstrap 5"),
            ("Databases", "MySQL, PostgreSQL, SQLite, SQL Query Optimization, Django ORM"),
            ("Tools & Platforms", "Git, GitHub, VS Code, Linux"),
            ("Concepts", "SDLC, Data Structures & Algorithms, OOP, RESTful API Design, Responsive Design"),
        ]
        for i, (name, items) in enumerate(skills):
            SkillGroup.objects.create(name=name, items=items, order=i)

        Experience.objects.create(
            role="Associate",
            company="Wipro Limited",
            project="Internal Interface Maintenance – Python Full Stack Project",
            tech="Python, Django, JavaScript, HTML5, CSS3, Bootstrap 5, MySQL",
            points="\n".join([
                "Maintained and enhanced an internal web interface used by cross-functional teams to manage operational data and workflows, ensuring high availability and performance.",
                "Developed and optimized Django views, URL routing and templates to improve page load times and UI responsiveness.",
                "Implemented new feature modules and resolved front-end defects (HTML5, CSS3, Bootstrap 5, JavaScript) as business requirements evolved.",
                "Integrated backend REST APIs using Django REST Framework for seamless data exchange between the interface and underlying services.",
                "Wrote and optimized SQL queries and Django ORM operations for efficient retrieval and reporting from MySQL.",
                "Collaborated in Agile sprints: daily stand-ups, sprint planning and retrospectives to meet delivery milestones.",
            ]),
        )

        Project.objects.create(
            title="Spirit Adventures",
            subtitle="Full stack travel booking platform",
            tech="Python, Django, MySQL, JavaScript, Bootstrap 5",
            points="\n".join([
                "Built with the Django MVT framework on a normalized MySQL schema.",
                "RESTful backend APIs for authentication (login, signup, sessions), booking creation and real-time availability.",
                "Responsive, mobile-first UI with Bootstrap 5, HTML5 and vanilla JavaScript.",
                "Secure form validation, CSRF protection and efficient ORM-based CRUD operations.",
                "End-to-end integration with real-time booking confirmation and data persistence.",
            ]),
            order=0,
        )
        Project.objects.create(
            title="Sustainability Performance Framework for Universities",
            subtitle="Data tracking and reporting",
            tech="Python, SQL, MySQL, Data Analysis",
            points="\n".join([
                "Designed a MySQL schema to track energy usage, carbon emissions and resource consumption.",
                "Python scripts for data ingestion, processing and reports aligned with environmental KPIs.",
                "Data analysis that surfaces insights for university stakeholders.",
                "Extensible multi-metric model, ready for future dashboards.",
            ]),
            order=1,
        )

        Education.objects.create(kind="degree", title="B.Tech, Minor in Data Science", place="Malla Reddy University, Hyderabad", year="2024", order=0)
        Education.objects.create(kind="certification", title="Python Full Stack Development", place="JSpiders", text="Python, Django, Flask, HTML, CSS, JavaScript and database management with hands-on projects.", order=1)
        Education.objects.create(kind="certification", title="Build Your Own Static Website", place="NEXT Wave", order=2)
        Education.objects.create(kind="certification", title="Build Your Own Responsive Website", place="NEXT Wave", order=3)
        for i, (lang, level) in enumerate([("English", "Professional proficiency"), ("Telugu", "Native"), ("Hindi", "Conversational")]):
            Education.objects.create(kind="language", title=lang, text=level, order=10 + i)

        self.stdout.write(self.style.SUCCESS("Portfolio data loaded."))
