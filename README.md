# The-Angular-Django-Messenger

This is a light-weight chatting application built on a **Django REST API** Framework Backend, **Angular** Frontend and a **SOCKET.IO** WebSocket server.


## Working

This creates an **Angular** front-end server in ***localhost:4200***(the one which the users access). The **Django** backend gets hosted on ***localhost:8000***(the one which serves the **requests**  of ***localhost:4200***) and finally the **WebSocket** server is hosted on ***localhost:3000*** and provides users access to real-time communication and secure chat-rooms !

## Usage

* Clone this repo and **cd** into the master branch directory.

* **cd** into the **/RealTime Socket Server** and execute ```node index.js``` and the WebSocket Server will start in ***localhost:3000***

* **cd** into the **/Django REST Framework Backend** and execute ```python manage.py``` and the backend server will start in ***localhost:8000***

* **cd** into the **/Angular Frontend Server/messenger-frontend** and execute ```ng serve -o``` and the frontend server will start in ***localhost:4200***

* Open ***localhost:4200/index*** in multiple tabs for interacting with the chat app :)

## Author

Created by ***sudoRicheek***. April 2020
