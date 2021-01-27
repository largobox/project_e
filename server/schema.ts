import ambulatoryCardController from 'controller/ambulatory_card'
// import serviceController from 'controller/service'
import { gql } from 'apollo-server-express'
import { GetItemsParamsT, AmbulatoryCardInputI } from 'shared/type'

export const typeDefs = gql(`
    type AmbulatoryCard {
        id: ID!
        name: String!
        surname: String!
        patronymic: String
        createdAt: Int
        updatedAt: Int
        fullName: String
        profession: String
    }

    input AmbulatoryCardInput {
        name: String!
        surname: String!
        patronymic: String
    }

    input SortElementInput {
        field: String!
        direction: Int!
    }

    input QueryVariablesInput {
        offset: Int
        limit: Int
        sort: [SortElementInput!]
    }

    type AmbulatoryCardPaginatedResult {
        totalCount: Int!
        items: [AmbulatoryCard]!
    }

    type Query {
        ambulatoryCards(queryVariables: QueryVariablesInput): AmbulatoryCardPaginatedResult
        ambulatoryCard(id: String!): AmbulatoryCard
    }

    type Mutation {
        ambulatoryCardCreate(input: AmbulatoryCardInput): AmbulatoryCard
        ambulatoryCardDelete(id: String!): Boolean!
    }
`)

export const resolvers = {
    Query: {
        ambulatoryCards: (_: any, params: GetItemsParamsT) => {
            return ambulatoryCardController.items(params)
        },
        ambulatoryCard: (_: any, params: any) => {
            return ambulatoryCardController.item(params)
        },
    },
    Mutation: {
        ambulatoryCardCreate: (_: any, params: {input: AmbulatoryCardInputI}) => {            
            return ambulatoryCardController.create(params.input)
        },
        ambulatoryCardDelete: (_: any, params: {id: string}) => {
            return ambulatoryCardController.delete(params)
        },
    },
};