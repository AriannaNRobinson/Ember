from flask import Blueprint, request, redirect
from flask_login import login_required, current_user
from app.models import db, Chant
from app.forms.chant_form import ChantForm
from app.forms.edit_chant_form import EditChantForm


chant_routes = Blueprint('chants', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@chant_routes.route('/')
@login_required
def get_all_chants():
    """
    Displays all public chants and their associated remarks
    """
    chants = Chant.query.all()
    result = {'chants': [chant.chant_to_dict() for chant in chants]}
    # print(sorted([chant.chant_to_dict() for chant in chants], reverse=True))
    return result

@chant_routes.route('/<int:id>')
@login_required
def get_one_chant(id):
    """
    Displays a chant and its remarks
    """
    # chant = Chant.query.filter(Chant.id == id).one()
    chant = Chant.query.get_or_404(id)
    return chant.chant_to_dict()

@chant_routes.route('/new', methods=['POST'])
@login_required
def create_new_chant():
    """
    Creates a new chant
    """
    user_id = current_user.to_dict()['id']
    form = ChantForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        new_chant = Chant (
            content=form.content.data,
            user_id=user_id
        ) 
        db.session.add(new_chant)
        db.session.commit()
        return new_chant.chant_to_dict()
    else:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 400


@chant_routes.route('/<int:id>', methods=['POST'])
@login_required
def update_existing_chant(id):
    """
    Updates an existing chant
    """
    user_id = current_user.to_dict()['id']
    form = EditChantForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        edit_chant = Chant.query.get_or_404(id)
        if edit_chant:
            edit_chant.content = form.content.data
            db.session.add(edit_chant)
            db.session.commit()
            return edit_chant.chant_to_dict()
        else: 
            return {'error': 'Chant not found'}

    else:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 400



@chant_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_chant(id):
    """
    Deletes a chant and remarks/flames associated with that chant
    """
    chant_to_delete = Chant.query.get_or_404(id)
    db.session.delete(chant_to_delete)
    db.session.commit()
    return f'Your chant has been removed'
