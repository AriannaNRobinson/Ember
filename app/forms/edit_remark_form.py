from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, ValidationError

def valid_edit_remark(form, field):
    content = field.data
    if len(content) < 5:
        raise ValidationError('Remark must contain at least 5 characters.')
    if len(content) > 255:
        raise ValidationError('Remark is too long.')

class EditRemarkForm(FlaskForm):
    content = StringField('Remark', validators=[DataRequired('Remark cannot be empty'), valid_edit_remark])
