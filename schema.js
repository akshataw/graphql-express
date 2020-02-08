const { buildSchema } = require('graphql');

module.exports = buildSchema(`
type Event {
    _id: ID!
    name: String
    createdAt: String
    creator: String
}

input EventInput {
    name: String
    createdAt: String
    creator: String
}

type RootQuery {
    events: [Event]!
}

type RootMutation {
    createEvent(eventInput: EventInput): Event!
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`);