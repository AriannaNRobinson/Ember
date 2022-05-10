from app.models import db, Remark

def seed_remarks():
    remark1 = Remark(
        content='Well said!', user_id='2', chant_id='1'
    )
    remark2 = Remark(
        content='I bid 21.', user_id='2', chant_id='3'
    )
    remark3 = Remark(
        content='Happy you are here!', user_id='2', chant_id='22'
    )
    remark4 = Remark(
        content='Cool! I envy you!', user_id='3', chant_id='25'
    )
    remark5 = Remark(
        content='Yellow; it is the color of happiness!', user_id='3', chant_id='7'
    )
    remark6 = Remark(
        content='Share!', user_id='3', chant_id='23'
    )
    remark7 = Remark(
        content='25 gold pieces!', user_id='4', chant_id='3'
    )
    remark8 = Remark(
        content='I always try to be the best I can be and you should, too!', user_id='4', chant_id='1'
    )
    remark9 = Remark(
        content='I agree. Form good habits!', user_id='5', chant_id='2'
    )
    remark10 = Remark(
        content='Yay!', user_id='5', chant_id='8'
    )
    remark11 = Remark(
        content='Why are you celebrating?', user_id='5', chant_id='10'
    )
    remark12 = Remark(
        content='25 and an emerald', user_id='6', chant_id='3'
    )
    remark13 = Remark(
        content='So true! Appreciate what you can!', user_id='6', chant_id='11'
    )
    remark14 = Remark(
        content="Why couldn't the pony sing a lullaby? She was a lil horse.", user_id='7', chant_id='4'
    )
    remark15 = Remark(
        content='Same here...', user_id='7', chant_id='24'
    )
    remark16 = Remark(
        content='The past, present, and future walked into a bar. It was tense.', user_id='8', chant_id='4'
    )
    remark17 = Remark(
        content='No reason, I am just happy!', user_id='9', chant_id='10'
    )
    remark18 = Remark(
        content='Why do bees have sticky hair? They use honeycombs.', user_id='9', chant_id='4'
    )
    remark19 = Remark(
        content='Welcome!', user_id='9', chant_id='8'
    )
    remark20 = Remark(
        content='Agreed!', user_id='10', chant_id='9'
    )
    remark21 = Remark(
        content='Yup!', user_id='11', chant_id='9'
    )
    remark22 = Remark(
        content='That is completely right!', user_id='12', chant_id='27'
    )
    remark23 = Remark(
        content='Red!', user_id='12', chant_id='7'
    )
    remark24 = Remark(
        content='Blue - it is the best color!!!', user_id='13', chant_id='7'
    )
    remark25 = Remark(
        content='Yes!', user_id='14', chant_id='23'
    )
    remark26 = Remark(
        content='Same.', user_id='15', chant_id='23'
    )
    remark27 = Remark(
        content='Amen to that...', user_id='16', chant_id='23'
    )
    remark28 = Remark(
        content='Best quote I have seen in a long time', user_id='16', chant_id='15'
    )
    remark29 = Remark(
        content='Nice to meet you.', user_id='17', chant_id='8'
    )
    remark30 = Remark(
        content='Completely agree!', user_id='18', chant_id='15'
    )
    remark31 = Remark(
        content="Don't be a weed!", user_id='19', chant_id='15'
    )
    remark32 = Remark(
        content='I love this!!', user_id='19', chant_id='31'
    )
    remark33 = Remark(
        content='True...', user_id='20', chant_id='13'
    )
    remark34 = Remark(
        content='Good for the crops!', user_id='17', chant_id='15'
    )
    remark35 = Remark(
        content='Yuck!', user_id='15', chant_id='20'
    )
    remark36 = Remark(
        content='I hate rain!', user_id='14', chant_id='17'
    )
    remark37 = Remark(
        content='I think I will take my chances on having a good day...', user_id='13', chant_id='20'
    )
    remark38 = Remark(
        content='This is very accurate. We need to think more like kids!', user_id='2', chant_id='12'
    )
    remark39 = Remark(
        content='Eekkkkk. No thanks!', user_id='6', chant_id='20'
    )
    remark40 = Remark(
        content='Kids are smarter than we give them credit for, for sure!', user_id='7', chant_id='12'
    )
    remark41 = Remark(
        content='Yes! Focus on yourself first!', user_id='9', chant_id='29'
    )
    remark42 = Remark(
        content='I disagree. I like lazy days sometimes, too!', user_id='10', chant_id='28'
    )
    remark43 = Remark(
        content='Exactly. You control your own actions!', user_id='3', chant_id='14'
    )
    remark44 = Remark(
        content='Enjoy the sunshine today, then!', user_id='8', chant_id='17'
    )
    remark45 = Remark(
        content='I rule all kingdoms', user_id='7', chant_id='29'
    )
    remark46 = Remark(
        content='Yes!! You are!!', user_id='17', chant_id='34'
    )
    remark47 = Remark(
        content='This is my favorite!!!!', user_id='16', chant_id='35'
    )
    remark48 = Remark(
        content='Love this so much.', user_id='13', chant_id='36'
    )
    remark49 = Remark(
        content='Best spell ever!', user_id='19', chant_id='36'
    )
    remark50 = Remark(
        content='Nice to meet you! I am glad you are here.', user_id='7', chant_id='19'
    )

    db.session.add(remark1)
    db.session.add(remark2)
    db.session.add(remark3)
    db.session.add(remark4)
    db.session.add(remark5)
    db.session.add(remark6)
    db.session.add(remark7)
    db.session.add(remark8)
    db.session.add(remark9)
    db.session.add(remark10)
    db.session.add(remark11)
    db.session.add(remark12)
    db.session.add(remark13)
    db.session.add(remark14)
    db.session.add(remark15)
    db.session.add(remark16)
    db.session.add(remark17)
    db.session.add(remark18)
    db.session.add(remark19)
    db.session.add(remark20)
    db.session.add(remark21)
    db.session.add(remark22)
    db.session.add(remark23)
    db.session.add(remark24)
    db.session.add(remark25)
    db.session.add(remark26)
    db.session.add(remark27)
    db.session.add(remark28)
    db.session.add(remark29)
    db.session.add(remark30)
    db.session.add(remark31)
    db.session.add(remark32)
    db.session.add(remark33)
    db.session.add(remark34)
    db.session.add(remark35)
    db.session.add(remark36)
    db.session.add(remark37)
    db.session.add(remark38)
    db.session.add(remark39)
    db.session.add(remark40)
    db.session.add(remark41)
    db.session.add(remark42)
    db.session.add(remark43)
    db.session.add(remark44)
    db.session.add(remark45)
    db.session.add(remark46)
    db.session.add(remark47)
    db.session.add(remark48)
    db.session.add(remark49)
    db.session.add(remark50)

    db.session.commit()

def undo_remarks():
    db.session.execute('TRUNCATE remarks RESTART IDENTITY CASCADE;')
    db.session.commit()
