# EatUp!
EatUp! is an all in one dashboard to assist the user in creating, understanding and inspiring them in their health journey.

This application allows the user to create meals while understanding the nutrition facts, research what recipes they are able to create based off what ingredients they have on hand, and get inspired by some of the dynamically generated recipes available on the recipes page. 

I created EatUp! as my capstone project for BrainStation's Software Engineering bootcamp. In less than 2 weeks, I was required to develop a full stack application using the technologies we were introduced to over the bootcamp. The client side of EatUp! is developed with React, and the server side runs an express server on Node. Future implementations which begin with the phase-2 rollout will include strengthening the user authentication, and implementing the Daily Journal page which will include features such as data visualization through charts, and goal tracking that compares logged entries for each meal of the day. 

The client side is a fully responsive design from mobile to desktop viewports, my personal favourite is the mobile version! The back end runs Express through Node.js which supports the database using Knex and MySQL. 

Creating this project was a great outlet to summarize the learnings from BrainStation's Software Engieering bootcamp in a 2 week period, and I'm excited to rollout the next batch of features in the near future, so stay tuned!

Thanks for stopping by! Reach out if you have any questions or wish to connect.

-James Zuliani

# Installation
Please ensure you have Node.js and npm installed to run this application. Follow these steps to run a local instance of EatUp!:
  1. Download or clone these repositories and save them in the new parent folder
    There are two repos to download: [EatUp! Client](https://github.com/JamesZuliani/EatUp-Client) and [EatUp! Server](https://github.com/JamesZuliani/EatUp-Server)
    
## Server-side folder & setup
  2. Install the required dependencies in the server folder <br>
  `npm install`
  
  3. Set up environment variables:
    The included .env.sample file can be renamed to .env, then remove the < > characters and provide your local database information.
    
  4. Initialize the database tables: <br>
    `knex migrate:latest`
    
  5. Run the server <br>
    `npm run nodemon`
    
## Client-side folder & setup
  5. install the required dependencies in the client folder <br>
  `npm install`
  
  6. Start the React application <br>
  `npm start`

