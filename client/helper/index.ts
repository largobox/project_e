export const getComponentTypeLabel = (name: string) => {
    switch (name) {
        case 'GridComponent':
            return 'Таблица'
        case 'FormComponent':
            return 'Форма'
        default:
            return 'Тип компонента не определён'
    }
}

export const prettyDateFrom = (value: number) => {
    if (value === null) return '\u2014'
    const date = new Date(value * 1000)

    return date.toLocaleDateString('ru', {
        year: "numeric",
        month: "long",
        day: "numeric"
    })
}