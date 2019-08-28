require('dotenv').config();
import express from 'express';
import { Bot } from './bot';

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
  Bot.respond(req, res)
});

// start the Express server
app.listen( port, () => {
  console.log(`server started at http://localhost:${ port }`);
});
