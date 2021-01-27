export type SortingElement = {
    field: string
    direction: 1 | -1
}

export type QueryVariablesInputT = {
    offset: number
    limit: number
    sort: [SortingElement]
}

export type GetItemsParamsT = {
    queryVariables: QueryVariablesInputT
}

export interface AmbulatoryCardInputI {
    name: string
    surname: string
    patronymic?: string
    profession?: string,
}

export interface AmbulatoryCardI extends AmbulatoryCardInputI {
    id: string
    fullName?: string,
    createdAt: number
    updatedAt: number
}
