# Cat Book Alpha 1.0

## Description

A fun little project of social network Site.
It is mostly compressed of: Node JS, ExpressJS Mongoose, Multer as middleware to Cloudinary,
Passport with a Connection to Mongodb for auth, and Cloudinary with connection to MongoDB for image storage.

## Installation

Install the dependencies from the directory the project is in

```sh
npm install
```

## Serve

To serve to the terminal, you can also use your favorite IDE that has node language support.
Note: You will need to have a .env file with the proper environment variables.
So remember
to head over to Cloudinary and MongoDB Atlas to get your keys, you will also need keys for cloudinary as well.
Once the .env file is set up with the proper keys, you can run the project as the follows below.

```sh
npm start
```

You can also vist the site at:  <https://cat-book-alpha-1-0.onrender.com/>
Thanks to Render for hosting the site for free and it was easy to set up.

## Security and Vulnerbility Analysis

From the recent security audit conducted on December 21st, 2024 has concluded that this current version of CatBook Alpha is safe and secure. With the current addition of Snyk: Developer Security Platform. This has mitigated potiental risks, and reduced the attack surface. But there is still a possible risk of CSRF (Cross Site Forgery) CWE-352, mentioned by Snyk. With render's firewall provider Cloudflare and it's security compliance rules this is midigated and is low to medium risk. And in conclusion, CatBook Alpha 1.0.7 on prod is safe and has a low to medium attack surface. As long as it keeps receiving further security patches this web app shall be safe and secure. There is still 1 high and 9 medium vulnerbilities that still need to be patched. Which from the dev team will be patched in the beta version.

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
