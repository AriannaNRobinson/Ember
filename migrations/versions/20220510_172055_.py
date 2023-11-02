"""empty message

Revision ID: 98aab6603f68
Revises: ffdc0a98111c
Create Date: 2022-05-10 17:20:55.863064

"""
from alembic import op
import sqlalchemy as sa

# For Render
import os
environment = os.getenv("FLASK_ENV")
SCHEMA = os.environ.get("SCHEMA")


# revision identifiers, used by Alembic.
revision = '98aab6603f68'
down_revision = 'ffdc0a98111c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('chants',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('content', sa.String(length=255), nullable=False),
    sa.Column('image', sa.String(length=255), nullable=True),
    sa.Column('created_at', sa.DateTime(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('shadows',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('shadow_user_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['shadow_user_id'], ['users.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('flames',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('chant_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['chant_id'], ['chants.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('remarks',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('content', sa.String(length=255), nullable=False),
    sa.Column('created_at', sa.DateTime(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('chant_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['chant_id'], ['chants.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###

    # For Render
    if environment == "production":
        op.execute(f"ALTER TABLE chants SET SCHEMA {SCHEMA};")
        op.execute(f"ALTER TABLE shadows SET SCHEMA {SCHEMA};")
        op.execute(f"ALTER TABLE flames SET SCHEMA {SCHEMA};")
        op.execute(f"ALTER TABLE remarks SET SCHEMA {SCHEMA};")



def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('remarks')
    op.drop_table('flames')
    op.drop_table('shadows')
    op.drop_table('chants')
    # ### end Alembic commands ###
