# Simple Python backend — Bandit will scan this file
import os

def get_greeting(name):
    """Return a greeting message."""
    if not name:
        return "Hello, World!"
    return f"Hello, {name}!"

def read_config():
    """Read config from environment variable (safe practice)."""
    secret = os.environ.get("APP_SECRET", "default-secret")
    return secret

if __name__ == "__main__":
    print(get_greeting("SecureFlow"))



