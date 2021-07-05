# Image Analyzer

A project created to learn about React, Node.js, APIs, and tabular databases.  The image analysis utilizes a [Clarifai] API on the backend.


---
### Technologies

- **HTML, CSS, Javascript**
- **React**
- **Node.js** (backend on Heroku)
- **PostgreSQL** (backend on Heroku)

---
### Features

- Copy and paste any publicly-available image address and receive five predicted themes with correlating confidence levels.
- Sample images from [Unsplash] for quick experimentation
- Use as guest or register/sign in with account information
- Recalls previous image 

---
### Motivation

 ![zero-to-mastery](https://avatars.githubusercontent.com/u/35373879?s=40&v=4 "ZTM")
 Based off of a project included in the Udemy [*Zero to Mastery*] course by [Andrei Neagoie], with some added features and customizations.
 
 ---
###  Backend API Call

Included is an /analysis route path file with Clarifai API call.  Using it requires an API key and model ID (General - Visual Classifier), as well as installing/importing express and clarifai-nodejs-grpc.


[Clarifai]: <https://www.clarifai.com/>
[Unsplash]: <https://unsplash.com/>
[*Zero to Mastery*]: <https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery/>
[Andrei Neagoie]: <https://zerotomastery.io/>

