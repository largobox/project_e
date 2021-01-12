export const getComponentTypeLabel = (name: string) => {
    switch (name) {
        case 'GridComponent':
            return 'Таблица'
        default:
            return 'Тип не определён'
    }
}