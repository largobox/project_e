import * as React from 'react'
import { useTheme, makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination'

type Props = {
    value: number
    pageCount: number   
    setValue: (value: number) => void
}

const PaginationComponent: React.FC<Props> = (props) => {
    const {
        pageCount,
        value,
        setValue,
    } = props
    const theme = useTheme();
    const classes = makeStyles({
        root: {
            display: 'inline-block',
            backgroundColor: theme.palette.grey[400],
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(1),
            paddingLeft: theme.spacing(0.5),
            paddingRight: theme.spacing(0.5),
            borderRadius: theme.shape.borderRadius,
        },
    })();

    const handleChangePage = (_: any, value: number) => {
        setValue(value)
    }

    if (pageCount < 2) return null

    return (
        <Pagination
            page={value}
            classes={{ root: classes.root }}
            count={pageCount}
            color='primary'
            onChange={handleChangePage}
        />
    )
}

export default PaginationComponent