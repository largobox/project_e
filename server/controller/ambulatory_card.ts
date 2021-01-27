import AmbulatoryCard from 'model/ambulatory_card'
import { GetItemsParamsT, AmbulatoryCardInputI } from 'shared/type'
const ambulatoryCardController = {
    items: async (params: GetItemsParamsT) => {
        const offset = params.queryVariables?.offset
        const limit = params.queryVariables?.limit
        const sort = params.queryVariables?.sort

        const options = { // ToDo. Move query variables logic to helper
            skip: offset || 0,
            limit: limit || 10,
            sort: sort ? sort.reduce((accum: { [key: string]: 1 | -1 }, item) => {
                accum[item.field] = item.direction
                return accum
            }, {}) : {}
        }

        const [items, itemsCount] = await Promise.all([
            AmbulatoryCard.find(null, null, options),
            AmbulatoryCard.countDocuments()
        ])

        return {
            items,
            totalCount: itemsCount,
        }
    },

    item: async (params: {id: string}) => {
        const { id } = params
        const item = await AmbulatoryCard.findOne({ _id: id })

        return item
    },

    create: async (data: AmbulatoryCardInputI) => {
        const createdCard = await AmbulatoryCard.create(data);

        return createdCard
    },

    delete: async (data: {id: string}) => {
        const { id } = data
        const deletedCard = await AmbulatoryCard.deleteOne({_id: id});

        return !!deletedCard.ok
    },
};

export default ambulatoryCardController