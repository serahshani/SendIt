# /backend/tests/test_auth.py
import pytest
from app import create_app, db
from app.models import User

@pytest.fixture
def app():
    app = create_app("testing")
    yield app

@pytest.fixture
def client(app):
    return app.test_client()

@pytest.fixture
def init_db():
    # Create the database tables
    db.create_all()

    # Add a sample user
    user = User(username='testuser', email='testuser@example.com', password='testpassword')
    db.session.add(user)
    db.session.commit()

    yield db  # This ensures that the database is used in the test

    # After the test, drop the tables
    db.drop_all()

def test_signup(client, init_db):
    """Test user signup"""
    response = client.post('/auth/signup', json={
        'username': 'newuser',
        'email': 'newuser@example.com',
        'password': 'newpassword'
    })
    assert response.status_code == 201  # 201 Created
    assert 'user' in response.json

def test_login(client, init_db):
    """Test user login"""
    response = client.post('/auth/login', json={
        'email': 'testuser@example.com',
        'password': 'testpassword'
    })
    assert response.status_code == 200  # 200 OK
    assert 'access_token' in response.json

def test_login_invalid_credentials(client, init_db):
    """Test login with invalid credentials"""
    response = client.post('/auth/login', json={
        'email': 'wronguser@example.com',
        'password': 'wrongpassword'
    })
    assert response.status_code == 401  # Unauthorized
    assert 'msg' in response.json
