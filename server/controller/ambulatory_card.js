import AmbulatoryCard from 'model/ambulatory_card'

const ambulatoryCardController = {
    items: async (...args) => {
        const items = await AmbulatoryCard.find();

        return items || []
    },

    create: async (data) => {
        const createdCard = await AmbulatoryCard.create(data);

        return createdCard
    },
};

export default ambulatoryCardController