const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');


const app = express();




app.use('/graphql',graphqlHTTP({
    
}))





app.listen(4000, () => {
    console.log("Server Running on Port 4000")

})