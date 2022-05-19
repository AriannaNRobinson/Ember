from flask import Blueprint
from flask_login import login_required, current_user
from app.models import db, Flame, Chant

flame_routes = Blueprint('flames', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

@flame_routes.route('/chant/<int:id>')
@login_required
def get_all_flames(id):
    """
    Displays all flames
    """
    flames = Flame.query.filter(Flame.chant_id == id).count()
    return {'flames_count': flames}


@flame_routes.route('/chant/<int:id>/add')
@login_required
def add_a_flame(id):
    user_id = current_user.to_dict()['id']
    """
    Creates a flame
    """
    flame = Flame (
        user_id=user_id,
        chant_id=id
    )

    db.session.add(flame)
    db.session.commit()
    flames = Flame.query.filter(Flame.chant_id == id).count()
    return {'flames_count': flames}


@flame_routes.route('/chant/<int:id>/delete')
@login_required
def delete_a_flame(id):
    """
    Deletes a flame
    """
    user_id = current_user.to_dict()['id']
    flames = Flame.query.filter(Flame.chant_id == id, user_id == Flame.user_id).all()
    for flame in flames:
        db.session.delete(flame)
        db.session.commit()

    flames = Flame.query.filter(Flame.chant_id == id).count()
    return {'flames_count': flames}
