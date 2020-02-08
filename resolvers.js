const Event = require('./models/event');

module.exports = {
    events: async () => {
        try {
            const events = await Event.find();
            return events.map(event => {
                return {
                    ...event._doc,
                    _id: event.id,
                }
            });
        }
        catch(err) {
            throw err;
        }
    },
    createEvent: async (args) => {
        try {
            const existingEvent = await Event.findOne({ name: args.eventInput.name });
            let newEvent;
            if (existingEvent){
                throw new Error('Event already exists!');
            }
            newEvent = await new Event({
                name: args.eventInput.name,
                createdAt: args.eventInput.createdAt,
                creator: args.eventInput.creator
            });
            const result  = await newEvent.save();
            return {
                ...result._doc,
            };
        } catch(err){
            throw err;
        }
    },
}