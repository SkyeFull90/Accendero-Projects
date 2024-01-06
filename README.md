# Accendero-Projects

Projects for evaluation for Accendero Software

## Project 1:
MongoDB FastAPI

# usage

For CRUD operations on a MongoDB database using FastAPI and Motor

## Installation

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

For Sorting sales data or even in,
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
To serve to the terminal 

```sh
$ python3 main.py
```

## Documentation used

- [Python](https://www.python.org/)
- [Lambda](https://docs.python.org/3/library/itertools.html#itertools.groupby)
- [CSV](https://docs.python.org/3/library/csv.html)
