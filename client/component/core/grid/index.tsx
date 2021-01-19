import * as React from 'react'
import { useState } from 'react'
import Pagination from './pagination'
import Header, { HeaderItemType } from './header'
import { Box } from '@material-ui/core'
import { repeatQueryVariablesT } from 'core/fetch_wrapper';

type ItemPropsT = {
    id: string,
}

type PaginationableDataT = {
    items: ItemPropsT[],
    count: number
}

type Props = {
    data?: PaginationableDataT
    repeatQuery?: (args: repeatQueryVariablesT) => void
    headers: Array<HeaderItemType>
    Item: React.FC<{ data?: ItemPropsT }>
}

const GridComponent = (props: Props): JSX.Element => {
    const {
        data,
        repeatQuery,
        headers,
        Item,
    } = props
    const [page, setPage] = useState(1)

    return (
        <React.Fragment>
            <Box mb={1}>
                <Pagination
                    value={page}
                    setValue={setPage}
                    count={data.count}
                    onChange={repeatQuery}
                />
            </Box>
            <Header items={headers} />
            {
                data.items.map(item =>
                    <Item key={item.id} data={item} />
                )
            }
            <Box mt={1}>
                <Pagination
                    value={page}
                    setValue={setPage}
                    count={data.count}
                    onChange={repeatQuery}
                />
            </Box>
        </React.Fragment>
    )
}

export default GridComponent