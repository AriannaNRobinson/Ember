from sqlalchemy import ForeignKey
from app.models.db import db
from datetime import datetime

class Remark(db.Model):
    __tablename__='remarks'

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    chant_id = db.Column(db.Integer, db.ForeignKey('chants.id'), nullable=False)

    user = db.relationship('User', back_populates='remarks')
    chant = db.relationship('Chant', back_populates='remarks')

    def remark_to_dict(self):
        return {
            'id': self.id,
            'content': self.content,
            'created_at': self.created_at,
            'user_id': self.user_id,
            'chant_id': self.chant_id
        }
