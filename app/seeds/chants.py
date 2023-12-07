from app.models import db, Chant
# For Render
from app.models.db import db, environment, SCHEMA

def seed_chants():
    chant1 = Chant(
        content='Be the person you want others to be', user_id='4')
    chant2 = Chant(
        content='We are what we repeatedly do. Excellence, then, is not an act, but a habit.', user_id='2')
    chant3 = Chant(
        content='Horse for sale. Start the bidding in the comments! Opening bid: 20 gold pieces.', user_id='3')
    chant4 = Chant(
        content='Tell me a joke.', user_id='4')
    chant5 = Chant(
        content='Words are, in my opinion, our most inexhaustible source of magic, capable of both inflicting injury and remedying it.', user_id='5')
    chant6 = Chant(
        content='If what you are doing is not moving you towards your goals, then it is moving you away from your goals.', user_id='3')
    chant7 = Chant(
        content='What is your favorite color?', user_id='6')
    chant8 = Chant(
        content='New here! Hello, everyone!', user_id='7')
    chant9 = Chant(
        content='A good listener is one who helps us overhear ourselves', user_id='8')
    chant10 = Chant(
        content='HUZZAH!!!', user_id='9')
    chant11 = Chant(
        content='If all you did was just looked for things to appreciate, you would live a joyously spectacular life', user_id='10')
    chant12 = Chant(
        content='As kids, we move a lot without thinking. As adults, we think too much without moving.', user_id='6')
    chant13 = Chant(
        content='A blazing fire makes flames and brightness out of everything that is thrown into it', user_id='11')
    chant14 = Chant(
        content='The only aspect of your life that fortune does not have control over is your behavior', user_id='12')
    chant15 = Chant(
        content='A man of words and not of deeds is like a garden full of weeds...', user_id='13')
    chant16 = Chant(
        content='A man who has a vision is not able to use the power of it until after he has preformed the vision on earth for the people to see', user_id='14')
    chant17 = Chant(
        content='It is going to rain tomorrow... ugh', user_id='15')
    chant18 = Chant(
        content='Good journey... not goodbye!', user_id='11')
    chant19 = Chant(
        content='Weak people revenge. Strong people forgive. Intelligent people ignore.', user_id='16')
    chant20 = Chant(
        content='Eat a live frog first thing in the morning, and nothing worse will happen to you the rest of the day.', user_id='17')
    chant21 = Chant(
        content='He who least needs tomorrow will most gladly greet tomorrow', user_id='18')
    chant22 = Chant(
        content='Happy to be here and meet all of you!', user_id='19')
    chant23 = Chant(
        content='Time for some mead!', user_id='20')
    chant24 = Chant(
        content='I am too tired to do anything productive today', user_id='4')
    chant25 = Chant(
        content='Got a new blade today!', user_id='9')
    chant26 = Chant(
        content='You can turn over a new leaf every hour if you choose', user_id='12')
    chant27 = Chant(
        content='Ability is what you are capable of, motivation determines what you do, but attitude determines how well you do it.', user_id='2')
    chant28 = Chant(
        content='How we spend our days is how we spend our lives.', user_id='8')
    chant29 = Chant(
        content='If you are to have a great kingdom you must first learn to rule over yourself!', user_id='10')
    chant30 = Chant(
        content='I forsee that it will be a good year for crops!', user_id='20')
    chant31 = Chant(
        content='The meaning of life is to find your gift, while the purpose of life is to give it away', user_id='18')
    chant32 = Chant(
        content='How much time are you spending, deciding what to spend time on?', user_id='15')
    chant33 = Chant(
        content='Do not look for the next opportunity. The one you have in hand IS the opportunity.', user_id='12')
    chant34 = Chant(
        content='You are the architect of your own life.', user_id='6')
    chant35 = Chant(
        content='Double, double toil and trouble. Fire burn and caldron bubble!', user_id='3')
    chant36 = Chant(
        content='Expecto Patronum!!!!', user_id='19')

    db.session.add(chant1)
    db.session.add(chant2)
    db.session.add(chant3)
    db.session.add(chant4)
    db.session.add(chant5)
    db.session.add(chant6)
    db.session.add(chant7)
    db.session.add(chant8)
    db.session.add(chant9)
    db.session.add(chant10)
    db.session.add(chant11)
    db.session.add(chant12)
    db.session.add(chant13)
    db.session.add(chant14)
    db.session.add(chant15)
    db.session.add(chant16)
    db.session.add(chant17)
    db.session.add(chant18)
    db.session.add(chant19)
    db.session.add(chant20)
    db.session.add(chant21)
    db.session.add(chant22)
    db.session.add(chant23)
    db.session.add(chant24)
    db.session.add(chant25)
    db.session.add(chant26)
    db.session.add(chant27)
    db.session.add(chant28)
    db.session.add(chant29)
    db.session.add(chant30)
    db.session.add(chant31)
    db.session.add(chant32)
    db.session.add(chant33)
    db.session.add(chant34)
    db.session.add(chant35)
    db.session.add(chant36)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_chants():
    # db.session.execute('TRUNCATE chants RESTART IDENTITY CASCADE;')
    # db.session.commit()

    # For Render
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.chants RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM chants")

    db.session.commit()