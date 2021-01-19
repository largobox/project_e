import AmbulatoryCard from 'model/ambulatory_card'

const ambulatoryCardController = {
    items: async (params) => {
        const options = {
            skip: 0,
            limit: 10
        }

        options.skip = params && params.pagination && params.pagination.offset || 0
        options.limit = params && params.pagination && params.pagination.limit || 10

        const [items, itemsCount] = await Promise.all([
            AmbulatoryCard.find(null, null, options),
            AmbulatoryCard.countDocuments()
        ])

        return {
            items,
            count: Math.ceil(itemsCount / options.limit),
        }
    },

    create: async (data) => {
        const createdCard = await AmbulatoryCard.create(data);

        return createdCard
    },
};

export default ambulatoryCardController