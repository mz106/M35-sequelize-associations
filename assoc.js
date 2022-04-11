const Flower = require("./flower");
const Event = require("./event");

Flower.hasMany(Event, {
    constraints: false
});
Event.hasMany(Flower, {
    constraints: false
});

module.exports = { Flower, Event };

