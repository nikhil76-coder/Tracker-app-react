// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');

// require('dotenv').config();

// const app = express();
// const port = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());

// const uri = process.env.ATLAS_URI;
// mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
// );
// const connection = mongoose.connection;
// connection.once('open', () => {
//   console.log("MongoDB database connection established successfully");
// })

// // const exercisesRouter = require('./routes/exercises');
// // const usersRouter = require('./routes/users');

// // app.use('/exercises', exercisesRouter);
// // app.use('/users', usersRouter);

// app.listen(port, () => {
//     console.log(`Server is running on port: ${port}`);
// })


const express = require('express'),
     http = require('http');

     require('dotenv').config();
const cors = require('cors');

const hostname = 'localhost';
const port = 5000;

const app = express();

const mongoose = require('mongoose');
const bodyParser = require('body-parser');



// app.use((req, res, next) => {
//   console.log(req.headers);
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<html><body><h1>This is an nikhilExpress Server</h1></body></html>');

// });

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database nikhil connection established successfully");
})

app.use(cors());
app.use(bodyParser.json());

app.all('/', (req,res,next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
});



const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
const dishRouter = require('./routes/dishRouter');


app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);



app.use('/dishes', dishRouter);

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});