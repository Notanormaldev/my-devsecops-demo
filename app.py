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


JWT='1edfc59e71df1e18fddaa341d2b2ae69fa1bf5f6d286780ffc09f2309b6bf72833c8ff21c77d3b738ca6c796a9e75b272606fc0e'
