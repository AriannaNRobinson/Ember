from sqlalchemy import ForeignKey
from app.models.db import db

class Flame(db.Model):
    __tablename__='flames'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    chant_id = db.Column(db.Integer, db.ForeignKey('chants.id'), nullable=False)

    user = db.relationship('User', back_populates='flame')
    chant = db.relationship('Chant', back_populates='flame')

    def flame_to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'chant_id': self.chant_id
        }
