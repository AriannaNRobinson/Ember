from sqlalchemy import ForeignKey
# from app.models.db import db
from datetime import datetime

# For Render
from .db import db, environment, SCHEMA, add_prefix_for_prod

class Chant(db.Model):
    __tablename__='chants'
    # For Render
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}   

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(255), nullable=False)
    image = db.Column(db.String(255))
    created_at = db.Column(db.DateTime, default=datetime.now, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)

    user = db.relationship('User', back_populates='chants')
    remarks = db.relationship('Remark', back_populates='chant', cascade='all, delete')
    flames = db.relationship('Flame', back_populates='chant', cascade='all, delete')

    def chant_to_dict(self):
        return {
            'id': self.id,
            'content': self.content,
            'created_at': self.created_at,
            'user_id': self.user_id,
            'remarks': [remark.remark_to_dict() for remark in self.remarks],
            'username': self.user.username
        }
