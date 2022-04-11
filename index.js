const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const connection = require("./connection");
const argv = yargs(hideBin(process.argv)).argv;

const { Event, Flower } = require("./assoc"); 

const main = async (argv) => {
    await connection.sync({alter: true});
    if (argv.add) {
        const event = await Event.create({name: argv.eventName});
        const flower = await Flower.create({name: argv.flowerName});

        event.addFlowers([flower]);
        flower.addEvents([event]);

        console.log("flowers from event: ", await event.getFlowers());
        console.log("events from flower: ", await flower.getEvents());
    }
};

main(argv);