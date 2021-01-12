import * as React from 'react'
import Pagination from '@material-ui/lab/Pagination'
import Header, { HeaderItemType } from './header'

type ItemProps = {
    id: string,
}

type Props = {
    data?: ItemProps[]
    Item: React.FC<{ data?: ItemProps }>
    headers: Array<HeaderItemType>
}

const GridComponent = (props: Props): JSX.Element => {
    const {
        data,
        Item,
        headers,
    } = props

    return (
        <React.Fragment>
            <Header items={headers} />
            {
                data.map(item =>
                    <Item key={item.id} data={item} />
                )
            }
        </React.Fragment>
    )
}

export default GridComponent