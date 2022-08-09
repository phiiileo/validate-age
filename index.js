import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes/index.js';

//create instance of an express server
const app = express();

// User Body parser to parse json body payload into a json data
app.use(bodyParser.json());

// allows client from anywhere to use the service
app.use(cors({
  origin: "*"
}));

// set the response content type to a json data format
app.use((req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next();
});

// Register the available routes
app.use(routes);

// get the available port the server is running or set a default port of 5000 (usually for localhost)
const PORT = process.env.PORT || 5006;

// set server to listen on the available port
app.listen(PORT, () => {
  return console.log(`Express is listening at http://localhost:${PORT}`);
});