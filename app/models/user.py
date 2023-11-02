# from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

# For Render
from .db import db, environment, SCHEMA, add_prefix_for_prod


class User(db.Model, UserMixin):
    __tablename__ = 'users'
    # For Render
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}   

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    # profile_image = db.Column(db.String(255))
    # bio = db.Column(db.String(255))
    # theme = db.Column(db.String())

    chants = db.relationship('Chant', back_populates='user')
    remarks = db.relationship('Remark', back_populates='user')
    flames = db.relationship('Flame', back_populates='user')

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'chants': [chant.chant_to_dict() for chant in self.chants],
            'remarks': [remark.remark_to_dict() for remark in self.remarks],
            'flames': [flame.flame_to_dict() for flame in self.flames]
        }
