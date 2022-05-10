from sqlalchemy import ForeignKey
from app.models.db import db

class Shadow(db.Model):
    __tablename__='shadows'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    shadow_user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

    def shadow_to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'shadow_user_id': self.shadow_user_id
        }
