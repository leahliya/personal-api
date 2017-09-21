var user = require('../user.js');

module.exports = {
    getName: (req, res, next) => {
    res.status(200).json({ name: user.name });
},
    getLocation: (req, res, next) => {
    res.status(200).json({ location: user.location });
},

    getOccupations: (req, res, next) => {
    if (req.query.order === 'desc'){
        res.json(user.occupations.sort())
        }
        else{
        res.json(user.occupations.sort().reverse())
        }
        return;
},

    getLatestOccupation : (req, res, next) => {
    if (req.query.occupations) {
        res.json(user.occupations[user.occupations.length-1]);
        return;
    }
    res.status(200).json(user.occupations[user.occupations.length-1]);
},

    getHobbies: (req, res, next) => {
    res.status(200).json({ hobbies: user.hobbies });
},

    getHobbiesType: (req, res, next) => {
    res.json(user.hobbies.filter(x=>x.type==req.params.type));
},

    getFamily: (req, res, next) => {
    res.status(200).json({ family: user.family });
},

    getFamilyGender: (req, res, next) => {
        // res.json(user.family.filter(x=>x.gender==req.params.gender));
        if (req.query.gender) {
            res.json(user.filter(family => family.gender === req.query.gender));
        } else {
            res.json(family);
        }
    },

    getRestaurants: (req, res, next) => {
    res.status(200).json({ restaurants: user.restaurants });
},


    getRestaurantsName: (req, res, next) => {
    if (req.params.name) {
        return res.json(user.restaurants.filter( restaurant => restaurant.name === req.params.name));
    }
    else {res.json("Error");
    }
},

putName(req, res, next){
    user.name = req.body.name
    res.json(user)
  },
  
putLocation(req, res, next){
    user.location = req.body.location
    res.json(user)
  },

putHobby(req, res, next){
    user.hobbies.push(req.body)
    res.json(user.hobbies)
  },

putOccupation(req, res, next){
    user.occupations.push(req.body.occupation)
    res.json(user.occupations)
  },
putFamily(req, res, next){
    user.family.push(req.body)
    res.json(user.family)
  },
putRestaurant(req, res, next){
    user.restaurants.push(req.body)
    res.json(user.restaurants)
  }

}