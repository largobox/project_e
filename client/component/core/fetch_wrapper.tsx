import * as React from 'react'
import { DocumentNode } from 'graphql'
import { useQuery } from '@apollo/client';
import { getComponentTypeLabel } from 'helper'
import Preloader from 'core/preloader'
import ErrorReport from 'core/error_report'
import { SortingElement } from 'shared/type'

type Props = {
    query: DocumentNode
    children: JSX.Element
    queryParams?: {}
}

export type QueryVariables = {
    limit?: number, offset?: number, sort?: [SortingElement]
}

const FetchWrapper = (props: Props): JSX.Element => {
    const {
        query,
        children,
        queryParams,
    } = props
    const { loading, error, data, fetchMore } = useQuery(query, {variables: queryParams});

    const repeatQuery = (queryVariables: QueryVariables) => {
        fetchMore({
            variables: {
                queryVariables
            }
        })
    }

    if (error) {
        return (
            <ErrorReport
                error={error}
                componentName={getComponentTypeLabel(children.type.name)}
                message='Ошибка при получении данных с сервера'
            />
        )
    }
    if (loading) return <Preloader />
    if (data && data.result) {
        return React.cloneElement(children, { fetchData: data.result, repeatQuery })
    }

    return null
}

export default FetchWrapper