from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired

class ChantForm(FlaskForm):
    content = StringField('Chant', validators=[DataRequired()])
