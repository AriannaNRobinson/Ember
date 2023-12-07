from app.models import db, User
# For Render
from app.models.db import db, environment, SCHEMA

# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', password='password')
    marnie = User(
        username='marnie', email='marnie@aa.io', password='password')
    hannah = User(
        username='hannah', email='hannah@aa.io', password='password')
    joshua = User(
        username='joshua', email='joshua@aa.io', password='password')
    rebecca = User(
        username='rebecca', email='rebecca@aa.io', password='password')
    andy = User(
        username='andy', email='andy@aa.io', password='password')
    sally = User(
        username='sally', email='sally@aa.io', password='password')
    connor = User(
        username='connor', email='connor@aa.io', password='password')
    bobbie = User(
        username='bobbie', email='bobbie@aa.io', password='password')
    samuel = User(
        username='samuel', email='samuel@aa.io', password='password')
    abigail = User(
        username='abigail', email='abigail@aa.io', password='password')
    tyler = User(
        username='tyler', email='tyler@aa.io', password='password')
    caroline = User(
        username='caroline', email='caroline@aa.io', password='password')
    alfie = User(
        username='alfie', email='alfie@aa.io', password='password')
    oliver = User(
        username='oliver', email='oliver@aa.io', password='password')
    kyle = User(
        username='kyle', email='kyle@aa.io', password='password')
    claire = User(
        username='claire', email='claire@aa.io', password='password')
    peter = User(
        username='peter', email='peter@aa.io', password='password')
    ralph = User(
        username='ralph', email='ralph@aa.io', password='password')
    ellen = User(
        username='ellen', email='ellen@aa.io', password='password')

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(hannah)
    db.session.add(joshua)
    db.session.add(rebecca)
    db.session.add(andy)
    db.session.add(sally)
    db.session.add(connor)
    db.session.add(bobbie)
    db.session.add(samuel)
    db.session.add(abigail)
    db.session.add(tyler)
    db.session.add(caroline)
    db.session.add(alfie)
    db.session.add(oliver)
    db.session.add(kyle)
    db.session.add(claire)
    db.session.add(peter)
    db.session.add(ralph)
    db.session.add(ellen)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    # db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    # db.session.commit()

    # For Render
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM users")

    db.session.commit()
