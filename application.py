from fastapi import FastAPI, WebSocket, Request
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
import numpy as np
from pymongo import MongoClient
import socket, uvicorn
from machineProcess import *

# App initialization
app = FastAPI()

# Setting up connection with MongoDB
client = MongoClient("mongodb://localhost:27017/")
database = client["pizzaVsburger"]
collection = database["votes"] # database's table which stores the user votes.

# Templates directory, in which our html & javascript files are stored.
templates = Jinja2Templates(directory="templates")
app.mount("/templates", StaticFiles(directory="templates", html=True), name="templates")

@app.get("/")
async def get(request: Request):
    """
    GET method to return html page, when user hit's the endpoint '/'.
    This method first gets all the votes from the votes table from Mongo Database
    & counts the votes for Pizza & Burger & return html file the votes in a single list.
    output format: votes = [(pizza votes),(burger votes)]
    """
    # votes = [[x['pizza'], x['burger']] for i, x in enumerate(get_votes())]
    # user_votes = np.array(votes)
    # response = np.sum(user_votes, 0)
    # votes = list(response)

    # get_y_data() --> votes
    # get_X_data()

    machine = Machine()
    df = machine.get_df()
    xData = machine.get_x()
    xData = xData.tolist()
    xData = [1, 3]
    yData = machine.get_y()
    votes = [15, 3, 7]
    votes2 = [1, 2, 3, 6]
    # data =
    return templates.TemplateResponse("main_home.html", {'request': request, 'votes': votes, 'votes2': votes2, 'xData': xData, 'yData': yData})

# @app.websocket("/sendVote")
# async def user_vote(websocket: WebSocket):
#     """
#     This is a websocket method, which responds to the call /sendVote.
#     Client will use this websocket api as a medium to send their votes.
#     """
#     await websocket.accept()
#     try:
#         print('inin')
#         while True:
#             data = await websocket.receive()
#             if data['type'] != 'websocket.disconnect':
#                 vote = {
#                     'pizza': 1,
#                     'burger': 0
#                 } if data['text'] == 'pizza' else {
#                     'pizza': 0,
#                     'burger': 1
#                 }
#                 add_vote(vote)
#             else:
#                 data = get_votes()
#             await websocket.send_json(data)
#     except Exception as ex:
#         return ex
#
#
# def add_vote(vote):
#     """
#     This method stores the user votes in 'votes' table of pizzaVsburger database in MongoDB
#     """
#     collection.insert_one(vote)
#
#
# def get_votes():
#     """
#     Method returns all the votes from 'votes' table of pizzaVsburger database in MongoDB
#     """
#     x = [vote for vote in collection.find()]
#     return x

if __name__ == "__main__":
    ip = socket.gethostbyname(socket.gethostname())
    # ip= '192.168.3.29'    # WIFI
    # ip = '169.254.136.185'  # 내부망,  현재는 내부망으로 연결
    # ip = '10.0.0.224'
    uvicorn.run(app, host=ip, port=8000)
