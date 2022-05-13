from flask import Blueprint, request, redirect
from flask_login import login_required, current_user
from app.models import db, Chant, Remark
from app.forms.remark_form import RemarkForm
from app.forms.edit_remark_form import EditRemarkForm


remark_routes = Blueprint('remarks', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@remark_routes.route('/')
@login_required
def get_all_remarks():
    """
    Displays all remarks
    """
    remarks = Remark.query.all()
    result = {'remarks': [remark.remark_to_dict() for remark in remarks]}
    # print(sorted([chant.chant_to_dict() for chant in chants], reverse=True))
    return result


@remark_routes.route('/new', methods=['POST'])
@login_required
def create_new_remark():
    """
    Creates a new remark
    """
    user_id = current_user.to_dict()['id']
    form = RemarkForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        chant_id = Chant.query.get_or_404(id)
        new_remark = Remark (
            content=form.content.data,
            user_id=user_id,
            chant_id=chant_id
        ) 
        db.session.add(new_remark)
        db.session.commit()
        return new_remark.remark_to_dict()
    else:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 400


@remark_routes.route('/<int:id>', methods=['PUT'])
@login_required
def update_existing_remark(id):
    """
    Updates an existing remark
    """
    user_id = current_user.to_dict()['id']
    form = EditRemarkForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        edit_remark = Remark.query.get_or_404(id)
        if edit_remark:
            edit_remark.content = form.content.data
            db.session.add(edit_remark)
            db.session.commit()
            return edit_remark.remark_to_dict()
        else:
            return {'error': 'Remark not found'}
    else:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 400



@remark_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_remark(id):
    """
    Deletes a remark
    """
    remark_to_delete = Remark.query.get_or_404(id)
    db.session.delete(remark_to_delete)
    db.session.commit()
    return f'Your remark has been removed'
