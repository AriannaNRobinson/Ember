from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired

class EditRemarkForm(FlaskForm):
    content = StringField('Remark', validators=[DataRequired()])
