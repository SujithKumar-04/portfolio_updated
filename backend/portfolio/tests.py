from django.core.management import call_command
from django.test import TestCase


class ApiTests(TestCase):
    def test_portfolio_404_when_empty(self):
        self.assertEqual(self.client.get("/api/portfolio/").status_code, 404)

    def test_portfolio_after_seed(self):
        call_command("seed_portfolio", verbosity=0)
        res = self.client.get("/api/portfolio/")
        self.assertEqual(res.status_code, 200)
        data = res.json()
        self.assertEqual(data["profile"]["name"], "Sujith Kumar Chepuri")
        self.assertEqual(len(data["skills"]), 5)
        self.assertEqual(len(data["projects"]), 2)
        self.assertEqual(data["education"]["degree"]["year"], "2024")

    def test_contact_valid_and_invalid(self):
        ok = self.client.post("/api/contact/", {"name": "Ana", "email": "ana@example.com", "message": "Hello, I like your work."}, content_type="application/json")
        self.assertEqual(ok.status_code, 201)
        bad = self.client.post("/api/contact/", {"name": "Ana", "email": "nope", "message": "short"}, content_type="application/json")
        self.assertEqual(bad.status_code, 400)
