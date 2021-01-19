import ambulatoryCardController from 'controller/ambulatory_card'
// import serviceController from 'controller/service'
import { gql } from 'apollo-server-express'

export const typeDefs = gql(`
    type AmbulatoryCard {
        id: ID!
        name: String!
        surname: String!
    }

    input AmbulatoryCardInput {
        name: String!
        surname: String!
    }

    input PaginationInput {
        offset: Int
        limit: Int
    }

    type AmbulatoryCardPaginationable {
        count: Int!
        items: [AmbulatoryCard]!
    }

    type Query {
        ambulatoryCardsConnection(pagination: PaginationInput): AmbulatoryCardPaginationable
    }
`)

export const resolvers = {
    Query: {
        ambulatoryCardsConnection: (_: any, params = {}) => {
            return ambulatoryCardController.items(params)
        },
    },
};

// import {
//     GraphQLObjectType,
//     GraphQLSchema,
//     GraphQLString,
//     GraphQLInt,
//     GraphQLID,
//     GraphQLList,
//     GraphQLInputObjectType,
// } from 'graphql'

// const AmbulatoryCardInput = new GraphQLInputObjectType({
//     name: 'AmbulatoryCardInput',
//     fields: () => ({
//         name: { type: GraphQLString },
//         surname: { type: GraphQLString },
//         patronomic: { type: GraphQLString },
//     })
// })

// const AmbulatoryCardOutput = new GraphQLObjectType({
//     name: 'AmbulatoryCard',
//     fields: () => ({
//         id: { type: GraphQLID },
//         name: { type: GraphQLString },
//         surname: { type: GraphQLString },
//         patronomic: { type: GraphQLString },
//     })
// })

// const ServiceType = new GraphQLObjectType({
//     name: 'Service',
//     fields: () => ({
//         id: { type: GraphQLID },
//         name: { type: GraphQLString },
//         price: { type: GraphQLInt },
//     })
// })

// const Query = new GraphQLObjectType({
//     name: 'Query',
//     fields: {
//         ambulatoryCard: {
//             type: AmbulatoryCardOutput,
//             args: { id: { type: GraphQLID } },
//             resolve(parent, args) { }
//         },
//         ambulatoryCards: {
//             type: new GraphQLList(AmbulatoryCardOutput),
//             args: {
//                 offset: { type: GraphQLInt },
//                 limit: { type: GraphQLInt },
//             },
//             resolve(parent, args) {
//                 return ambulatoryCardController.items(args)
//             }
//         },
//         services: {
//             type: new GraphQLList(ServiceType),
//             resolve(parent, args) {
//                 return serviceController.items()
//             }
//         },
//     }
// })

// const Mutation = new GraphQLObjectType({
//     name: 'Mutation',
//     fields: {
//         createAmbulatoryCard: {
//             type: AmbulatoryCardOutput,
//             args: {
//                 input: { type: AmbulatoryCardInput }
//             },
//             resolve(parent, args) {
//                 return ambulatoryCardController.create(args.input)
//             }
//         },
//     }
// })

// const schema = new GraphQLSchema({
//     query: Query,
//     mutation: Mutation,
// })