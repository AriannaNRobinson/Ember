from sqlalchemy import ForeignKey
# from app.models.db import db

# For Render
from .db import db, environment, SCHEMA, add_prefix_for_prod

class Shadow(db.Model):
    __tablename__='shadows'
    # For Render
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}   

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')))
    shadow_user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')))

    def shadow_to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'shadow_user_id': self.shadow_user_id
        }
