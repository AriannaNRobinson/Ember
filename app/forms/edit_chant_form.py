from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, ValidationError

def valid_edit_chant(form, field):
    content = field.data
    if len(content) < 5:
        raise ValidationError('Shout must contain at least 5 characters.')
    if len(content) > 255:
        raise ValidationError('Shout is too long.')

class EditChantForm(FlaskForm):
    content = StringField('Chant', validators=[DataRequired('Shout cannot be empty.'), valid_edit_chant])
