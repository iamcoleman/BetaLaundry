require('dotenv').config();
import express from 'express';
import * as firebase from "firebase/app";
import "firebase/database";
import { Bot } from './bot';


/*
 * Setup Firebase
 */
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "beta-laundry.firebaseapp.com",
  databaseURL: "https://beta-laundry.firebaseio.com",
  projectId: "beta-laundry",
  storageBucket: "beta-laundry.appspot.com",
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);

const databaseRef = firebase.database().ref();


/*
 * Setup express
 */
const port = Number(process.env.PORT || 5000);
const app = express();

// Get the request data from the GroupMe callback
app.use((req, res, next) => {
  // @ts-ignore
  req.chunks = [];
  req.on('data', chunk => {
    // @ts-ignore
    req.chunks.push(chunk.toString());
  });
  req.on('end', () => next());
});

// Define Routes
app.get( "/", (req, res) => {
  res.writeHead(200);
  res.end("BetaLaundry GroupMe Bot");
});
app.post('/', (req, res) => {
  // Send the GroupMe callback data to the Bot respond function
  Bot.respond(req, res, databaseRef)
});

// start the Express server
app.listen( port, () => {
  console.log(`server started at http://localhost:${ port }`);
});
