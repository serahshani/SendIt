# /backend/tests/test_routes.py
import pytest
from app import create_app, db
from app.models import User, Parcel
from flask_jwt_extended import create_access_token

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

    # Add a sample user and parcel
    user = User(username='testuser', email='testuser@example.com', password='testpassword')
    db.session.add(user)
    db.session.commit()

    # Create a sample parcel associated with the user
    parcel = Parcel(user_id=user.id, destination="New York", weight=2.5)
    db.session.add(parcel)
    db.session.commit()

    yield db  # Ensure the database is used in the test

    # After the test, drop the tables
    db.drop_all()

@pytest.fixture
def access_token(init_db):
    # Create a JWT token for the user
    user = User.query.filter_by(email="testuser@example.com").first()
    return create_access_token(identity=user.id)

def test_create_parcel(client, init_db, access_token):
    """Test creating a parcel"""
    response = client.post('/parcels', json={
        'destination': 'Los Angeles',
        'weight': 3.0
    }, headers={'Authorization': f'Bearer {access_token}'})
    assert response.status_code == 201  # 201 Created
    assert 'parcel' in response.json

def test_get_parcel(client, init_db, access_token):
    """Test getting parcel details"""
    response = client.get('/parcels/1', headers={'Authorization': f'Bearer {access_token}'})
    assert response.status_code == 200  # 200 OK
    assert 'parcel' in response.json
    assert response.json['parcel']['destination'] == "New York"

def test_update_parcel_status(client, init_db, access_token):
    """Test updating parcel status"""
    response = client.put('/parcels/1/status', json={'status': 'Shipped'}, 
                          headers={'Authorization': f'Bearer {access_token}'})
    assert response.status_code == 200  # 200 OK
    assert response.json['status'] == 'Shipped'

def test_invalid_parcel_access(client, init_db, access_token):
    """Test accessing a non-existent parcel"""
    response = client.get('/parcels/999', headers={'Authorization': f'Bearer {access_token}'})
    assert response.status_code == 404  # Not Found
    assert 'msg' in response.json
