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
with we refactor of the code, you could sort any data in a csv or from an Excel workbook or any other spreadsheet software.
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
It is mostly compressed of: Node.js, Express.js Mongoose, Multer as middleware to Cloudinary, 
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
You can also visit the site at:  https://cat-book-alpha-1-0.onrender.com/ 
Thanks to Render for hosting the site for free, and it was easy to set up.

## Security and Vulnerability Analysis

From the recent security audit conducted on December 21st, 2024 has concluded that this current version of CatBook Alpha is safe and secure. With the current addition of Snyk: Developer Security Platform. This has mitigated potential risks, and reduced the attack surface. But there is still a possible risk of CSRF (Cross Site Forgery) CWE-352, mentioned by Snyk. With render's firewall provider Cloudflare, and it's security compliance rules this is mitigated and is low to medium risk. And in conclusion, CatBook Alpha 1.0.7 on prod is safe and has a low to medium attack surface. As long as it keeps receiving further security patches this web app shall be safe and secure. There is still 1 high and 9 medium vulnerabilities that still need to be patched. Which from the dev team will be patched in the beta version.

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

## Xata Astro Blog

Our mission is to radically simplify the way developers work with data. Your database can do more than store rows and columns in a table. We want to remove the glue out of your stack and provide a connected data platform that works with the tools you love.

Xata is a serverless data platform. Built on top of PostgresSQL, Xata provides a full-text and vector search engine, record-level file attachments, table-level aggregations and exposes a single consistent REST API with SDKs. Xata provides support for schema branches and an optional ask endpoint to engage with OpenAI's ChatGPT API.
 
This web app demonstrates SSG (Static Site Generation) and SSR (Server Side Rendering) this one use TypeScript which our framework of choice Astro uses by default. We have search enabled so you can search for the article you are looking for. 
to read more about this app and to build your you can do so here: [Get started with Astro and Xata](https://xata.io/docs/getting-started/astro) and to learn more about Astro and what you can do with it at [Astro.build](https://astro.build) .

## Documentation

- [Astro](https://astro.build)
- [Xata](https://xata.io/docs/getting-started/astro) Which I helped write as an open Source project