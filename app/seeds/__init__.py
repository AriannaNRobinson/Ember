from flask.cli import AppGroup
from .users import seed_users, undo_users
from .chants import seed_chants, undo_chants
from .remarks import seed_remarks, undo_remarks

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
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
