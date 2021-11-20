const express = require('express'); 
const app = express();
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 8000;

// log http with morgan
app.use(morgan('dev'));

// parse body with body-parser
app.use(bodyParser.json());

// setup
app.listen(PORT, () => {
    console.log(`server started, listening on PORT ${PORT}`)
});