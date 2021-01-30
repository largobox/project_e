import * as React from 'react'
import { DocumentNode } from "graphql"

type Props = {
    Icon?: React.FC
    label: string
    name: string
    query?: DocumentNode
    queryParams?: object
    Content: React.FC
}

const TabContentComponent: React.FC<Props> = (props) => {
    return null
}

export default TabContentComponent;