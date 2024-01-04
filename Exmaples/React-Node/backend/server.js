const express = require('express');
const userRoutes = require('./routes/userRoutes')
const app = express();
const cors = require('cors');
//app.use(express.static('dist'));
app.use('/api/users', userRoutes);

const corsOptions = (
    process.env.NODE_ENV === 'development' ?
        { origin: 'http://localhost:5173' } :
        { origin: 'https://my-app.com' }
);  
app.use(cors(corsOptions));

app.use(cors());

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}`);
});