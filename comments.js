// Create web server

// 1. Import express
const express = require('express');
const bodyParser = require('body-parser');

// 2. Create an app
const app = express();

// 3. Create a port
const port = 3000;

// 4. Create a router
const commentsRouter = require('./routes/comments.route');

// 5. Use body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 6. Use router
app.use('/comments', commentsRouter);

// 7. Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});