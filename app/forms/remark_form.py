from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired

class RemarkForm(FlaskForm):
    content = StringField('Remark', validators=[DataRequired()])
    user_id = IntegerField('user_id', validators=[DataRequired()])
    chant_id = IntegerField('chant_id', validators=[DataRequired()])
