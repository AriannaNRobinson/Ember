from sqlalchemy import ForeignKey
# from app.models.db import db

# For Render
from .db import db, environment, SCHEMA, add_prefix_for_prod

class Flame(db.Model):
    __tablename__='flames'
    # For Render
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}   

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    chant_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('chants.id')), nullable=False)

    user = db.relationship('User', back_populates='flames')
    chant = db.relationship('Chant', back_populates='flames')

    def flame_to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'chant_id': self.chant_id
        }
