import * as React from 'react'
import { DocumentNode } from 'graphql'
import { useQuery } from '@apollo/client';
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { getComponentTypeLabel } from 'helper'

type Props = {
    query: DocumentNode
    children: JSX.Element
}

export type repeatQueryVariablesT = {
    limit?: number, page?: number
}

const FetchWrapper = (props: Props): JSX.Element => {
    const {
        query,
        children,
    } = props
    const theme = useTheme();
    const classes = makeStyles({
        preloaderCont: {
            textAlign: 'center',
            padding: theme.spacing(2),
            backgroundColor: theme.palette.grey[300],
        },
        errorCont: {
            backgroundColor: theme.palette.error.main,
            color: theme.palette.error.contrastText,
            padding: theme.spacing(2),
        }
    })();
    const { loading, error, data, fetchMore } = useQuery(query);

    const repeatQuery = (variables: repeatQueryVariablesT) => {
        fetchMore({
            variables: {
                pagination: {
                    offset: (variables.page - 1) * variables.limit,
                    limit: variables.limit,
                }
            }
        })
    }

    if (error) {
        const text = `Компонент "${getComponentTypeLabel(children.type.name)}". Ошибка при получении данных`

        console.error('error: ', error)

        return (
            <Paper className={classes.errorCont}>
                <Typography>{text}</Typography>
            </Paper>
        )
    }

    if (loading) {
        return (
            <Paper className={classes.preloaderCont}>
                <CircularProgress />
            </Paper>
        )
    }

    return React.cloneElement(children, { data: data.connection, repeatQuery })
}

export default FetchWrapper