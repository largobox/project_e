import * as React from 'react'
import { useState, useEffect } from 'react'
import Pagination from './pagination'
import Header, { HeaderItemType } from './header'
import { Box } from '@material-ui/core'
import { QueryVariables } from 'core/fetch_wrapper';
import { SortingElement } from 'shared/type'
import { useTheme, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

type ItemPropsT = {
    id: string,
}

type PaginationableDataT = {
    items: ItemPropsT[],
    totalCount: number
}

type Props = {
    fetchData?: PaginationableDataT
    repeatQuery?: (args: QueryVariables) => void
    headers: Array<HeaderItemType>
    Item: React.FC<{ data?: ItemPropsT }>
    Toolbar: React.FC
    baseSort: [SortingElement]
}

const GridComponent: React.FC<Props> = (props) => {
    const {
        fetchData,
        repeatQuery,
        headers,
        Item,
        Toolbar,
        baseSort,
    } = props
    const [page, setPage] = useState(1)
    const theme = useTheme();
    const pageLimit = 10
    const pageCount = Math.ceil(fetchData.totalCount / pageLimit)
    const classes = makeStyles({
        toolsCont: {
            display: 'flex',
            marginBottom: theme.spacing(1),
            justifyContent: pageCount < 2 ? 'flex-end' : 'space-between',
        },
        emptyText: {
            textAlign: 'center',
            marginTop: theme.spacing(1),
            padding: theme.spacing(1),
            backgroundColor: theme.palette.grey[300],
        }
    })();

    useEffect(() => {
        repeatQuery({ offset: (page - 1) * pageLimit, limit: pageLimit, sort: baseSort })
    }, [page])
    console.log('fetchData: ', fetchData)

    return (
        <React.Fragment>
            <Box className={classes.toolsCont}>
                <Pagination
                    value={page}
                    setValue={setPage}
                    pageCount={pageCount}
                />
                <Box>
                    <Toolbar />
                </Box>
            </Box>
            <Header items={headers} />
            {
                fetchData.items.length === 0 ?
                <Typography classes={{root: classes.emptyText}}>Список пуст</Typography>
                :
                fetchData.items.map(item => <Item key={item.id} data={item} />)
            }
            <Box mt={1}>
                <Pagination
                    value={page}
                    setValue={setPage}
                    pageCount={pageCount}
                />
            </Box>
        </React.Fragment>
    )
}

export default GridComponent