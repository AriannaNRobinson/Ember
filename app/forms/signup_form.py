from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, Regexp, EqualTo, Length, ValidationError
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Username is already in use.')


class SignUpForm(FlaskForm):
    username = StringField('username', validators=[DataRequired('Username cannot be empty.'), username_exists, Length(min=3, max=12, message='Username must be between 3 and 12 characters.')])
    email = StringField('email', validators=[DataRequired('Email cannot be empty.'), user_exists, Email('Email must be a valid email'), Length(min=5, max=200, message='Email must be between 5 and 200 characters.')])
    password = StringField('password', validators=[DataRequired('Password cannot be empty'), EqualTo('confirm_password', message='Passwords must match.'), Regexp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$", message='Password must contain at least 6 characters, including at least one uppercase letter, one lowercase letter, one number, and one special character.')])
    confirm_password = StringField('password', validators=[DataRequired('Confirm password field cannot be empty')])
