from sqlalchemy import ForeignKey
# from app.models.db import db
from datetime import datetime

# For Render
from .db import db, environment, SCHEMA, add_prefix_for_prod

class Remark(db.Model):
    __tablename__='remarks'
    # For Render
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}   

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    chant_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('chants.id')), nullable=False)

    user = db.relationship('User', back_populates='remarks')
    chant = db.relationship('Chant', back_populates='remarks')

    def remark_to_dict(self):
        return {
            'id': self.id,
            'content': self.content,
            'created_at': self.created_at,
            'user_id': self.user_id,
            'chant_id': self.chant_id,
            'username': self.user.username
        }
