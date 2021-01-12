const serviceController = {
    items: (...args) => {
        const data = [
            {id: 1, name: 'Service 1', price: 1111},
            {id: 2, name: 'Service 2', price: 2222},
        ]

        return data || []
    },
};

export default serviceController