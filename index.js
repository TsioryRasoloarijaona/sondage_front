const express = require('express');
const port = 3000;
const app = express();
const routes = require('./routes/routes') ;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api' , routes) ;

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));    

app.listen(port, () => {  
    console.log(`Server is running at http://localhost:${port}`);
})