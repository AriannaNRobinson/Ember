from flask.cli import AppGroup
from .users import seed_users, undo_users
from .chants import seed_chants, undo_chants
from .remarks import seed_remarks, undo_remarks

# For Render
from app.models.db import db, environment, SCHEMA

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    # For Render
    # if environment == 'production':
    #     # Before seeding, truncate all tables prefixed with schema name
    #     db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    #     # Add a truncate command here for every table that will be seeded.
    #     db.session.commit()
    # seed_users()
    # # For Render
    # if environment == 'production':
    #     # Before seeding, truncate all tables prefixed with schema name
    #     db.session.execute(f"TRUNCATE table {SCHEMA}.chants RESTART IDENTITY CASCADE;")
    #     # Add a truncate command here for every table that will be seeded.
    #     db.session.commit()
    # seed_chants()
    # # For Render
    # if environment == 'production':
    #     # Before seeding, truncate all tables prefixed with schema name
    #     db.session.execute(f"TRUNCATE table {SCHEMA}.remarks RESTART IDENTITY CASCADE;")
    #     # Add a truncate command here for every table that will be seeded.
    #     db.session.commit()
    # seed_remarks()

    # For Render
    if environment == 'production':
        undo_users()
        undo_chants()
        undo_remarks()
    seed_users()
    seed_chants()
    seed_remarks()

    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_chants()
    undo_remarks()
    # Add other undo functions here

    # For Render

