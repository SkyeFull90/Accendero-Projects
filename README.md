# Accendero-Projects

Projects for evaluation for Accendero Software

Project 1: Mongodb With Fast API a Sterlete python REST API Framework like Expressjs or Springboot for Java
# Running MongoDB with FastAPI
To run this porject first grab your connection string from mongodb atlas, and add it to a dotenv file at the projects root.
Then run pyhton3 -m venv venv to seed your virtual enviroment for use, then from that run source ./venv/bin/acitvate to activate
the pyhton virtual enviroment. Now from here here run pip install -r requirements.txt after that and you have setup your .env with
you MongoDB Atlas connection String you can now run uvicorn app:app --reload. This porject also is dockerized to but with no kuber
-neties cluster so you will have to pass the .env file to it, and run like a normal container first build it then follow what docker 
tells you to do next. But of course we can just skip all that and use the compose file with: docker compose up --build. If you need 
help with more of this project check the projects readme file or even on the devloper tab of MongoDB Atlas where this lovely project 
is from. To showcase how to use FastAPI Python with MongoDB noSql document based Database. This a fun one to fix some of the dependencies
and testing. And of course dockerize it. Hope you enjoy I will have more to come like Bun js with Hono. But Spoilers you will have to wait 
for that juicy bit.
