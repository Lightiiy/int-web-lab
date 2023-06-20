
from pymongo import MongoClient
import pprint
import os

client = MongoClient(host="mongodb", port=27017,
    username="mongoadmin", password=os.environ["MONGO_INITDB_ROOT_PASSWORD"])

def insert_new_user(user_data):
    app_db = client.python_app_db

    users_collection = app_db.users

    new_user_id = users_collection.insert_one(user_data).inserted_id

    pprint.pprint(f"New user id: {new_user_id}")

    user_data_from_db = users_collection.find_one({"_id": new_user_id})

    pprint.pprint(user_data_from_db)
    user_data_from_db['_id'] = str(user_data_from_db['_id'])

    return user_data_from_db


def get_data():
    # Connect to MongoDB
    app_db = client.python_app_db

    users_collection = app_db.users


    # Retrieve data from MongoDB
    data = list(users_collection.find())

    # Return the data as JSON response
    return data