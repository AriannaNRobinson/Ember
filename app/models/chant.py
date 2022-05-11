from sqlalchemy import ForeignKey
from app.models.db import db
from datetime import datetime

class Chant(db.Model):
    __tablename__='chants'

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(255), nullable=False)
    image = db.Column(db.String(255))
    created_at = db.Column(db.DateTime, default=datetime.now, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    user = db.relationship('User', back_populates='chant')
    remark = db.relationship('Remark', back_populates='chant', cascade='all, delete-orphan')
    flame = db.relationship('Flame', back_populates='chant', cascade='all, delete-orphan')

    def chant_to_dict(self):
        return {
            'id': self.id,
            'content': self.content,
            'created_at': self.created_at,
            'user_id': self.user_id
        }
