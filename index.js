const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3004;

app.use(bodyParser.json());
app.use(cors());

var main_ctrl = require('./controllers/main_ctrl.js');

app.get('/name', main_ctrl.getName);
app.get('/location', main_ctrl.getLocation);
app.get('/occupations', main_ctrl.getOccupations);
app.get('/occupations/latest', main_ctrl.getLatestOccupation)
app.get('/hobbies', main_ctrl.getHobbies);
app.get('/hobbies/:type', main_ctrl.getHobbiesType);
app.get('/family', main_ctrl.getFamily);
app.get('/family/:gender', main_ctrl.getFamilyGender);
app.get('/restaurants', main_ctrl.getRestaurants);
app.get('/restaurants/:name', main_ctrl.getRestaurantsName);

app.post('/name', main_ctrl.putName);
app.post('/location', main_ctrl.putLocation);

// post('/hobbies', main_ctrl.putHobby);
// post('/occupations', main_ctrl.putOccupation);
app.post('/family', main_ctrl.putFamily);
app.post('/restaurants', main_ctrl.putRestaurant);


app.listen(port, () => {
    console.log(`Listening on Port: ${port}`);
});
