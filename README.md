# Accendero-Projects

Projects for evaluation for Accendero Software

## Project 1:
MongoDB FastAPI

# usage

To show the usage of REST-full CRUD operations on a MongoDB No SQL database using: Python FastAPI and Motor.

## Installation

First set up the virtual environment for python to install deps to

```sh
$ python3 -m venv .venv
```
This pulls in a new virtual environment. Now let's activate it, so we can use it.

```sh
$ source ./.venv/bin/activate
```
Now we can continue on with our rest of our installation and running the project below.

Install the dependencies from the directory that the project sits

```sh
$ pip install -r requirements.txt
```

## Serve
To serve in the browser

```sh
$ uvicorn app:app --reload
```
Or using Docker if you have it installed locally, or a GitHub CodeSpace will work to. 
Make sure you have passed the proper environment variables to the image before running it.

```sh
$ docker compose up --build
````
## Endpoints

- GET /—Welcome to the Student Course API

- GET /students - Get all students
- GET /students/{id} - Get a single student
- POST /students - Add a new student
- PUT /students/{id} - Update a student
- DELETE /students/{id} - Delete a student

## Documentation used

- [FastAPI](https://fastapi.tiangolo.com/)
- [MongoDB](https://www.mongodb.com/developer/languages/python/python-quickstart-starlette/)
- [Motor](https://motor.readthedocs.io/en/stable/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [MongoDB Atlas Python Docs](https://docs.atlas.mongodb.com/driver-connection/)
- [Docker](https://www.docker.com/)


## project 2:

Python Data Sorter

# usage

For Sorting sales data,
with we refactor the code to sort any data in a csv from Excel or any other spreadsheet software.
For the purpose of this project, we will be using the sales data from a previous Java project.
# Disclaimer
The data in the csv files is not real sales data or has any attachment to Telsa or Elon Musk and is only used 
for the purpose of this project.
Just In case anyone is wondering, for security and legal purposes. 

## Installation

Install the dependencies from the directory the project is in

```sh
$ pip install -r requirements.txt
```

## Serve
To serve to the terminal, you can also use your favorite IDE that has python language support.

```sh
$ python3 main.py
```

## Documentation used

- [Python](https://www.python.org/)
- [Lambda](https://docs.python.org/3/library/itertools.html#itertools.groupby)
- [CSV](https://docs.python.org/3/library/csv.html)

# Project 3

Cat Book Alpha 1.0

## Description

A fun little project of social network Site.
It is mostly compressed of: Node JS, ExpressJS Mongoose, Multer as middleware to Cloudinary, 
Passport with a Connection to Mongodb for auth, and Cloudinary with connection to MongoDB for image storage.

# Installation 

Install the dependencies from the directory the project is in

```sh
$ npm install
```

## Serve
To serve to the terminal, you can also use your favorite IDE that has node language support.
Note: You will need to have a .env file with the proper environment variables.
So remember
to head over to Cloudinary and MongoDB Atlas to get your keys, you will also need keys for cloudinary as well. 
Once the .env file is set up with the proper keys, you can run the project as the follows below. 

```sh   
$ npm start
```
You can also vist the site at:  https://cat-book-alpha-1-0.onrender.com/ 
Thanks to Render for hosting the site for free and it was easy to set up.

## Documentation used

- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [Multer](https://www.npmjs.com/package/multer)
- [Passport](http://www.passportjs.org/)
- [Cloudinary](https://cloudinary.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [EJS](https://ejs.co/)
- [Bootstrap](https://getbootstrap.com/)
- [Render](https://render.com/)

# Project 4

Astro With supabase auth and react

## Description

A fun bonus project of our pyhton data soter report data, for more info check out the projects readme.md file.
