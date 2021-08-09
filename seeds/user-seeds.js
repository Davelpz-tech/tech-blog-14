const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = [
  {
    username: 'bumbo',
    email: 'bumbino31@mail.com',
    password: 'bumboisbest'
  },
  {
    username: 'mongo',
    email: 'mongowombo13@mail.com',
    password: 'miggywiggywom'
  },
  {
    username: 'scooby',
    email: 'dooberdoo5@mail.com',
    password: 'scoobysnack'
  },
  {
    username: 'jiggywiggy',
    email: 'jellowiggle@mail.com',
    password: 'refrigeratefor1hour'
  }
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;