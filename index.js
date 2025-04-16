const express = require('express');
const port = 3000;
const app = express();
const routes = require('./routes/routes') ;
app.use(express.json());

app.use('/api' , routes) ;

app.listen(port, () => {  
    console.log(`Server is running at http://localhost:${port}`);
})