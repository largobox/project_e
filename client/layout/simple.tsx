import * as React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'

type Props = {
    title: string
    children: JSX.Element
}

const SimpleLayout = (props: Props): JSX.Element => {
    const {
        children,
        title,
    } = props

    const theme = useTheme()
    const classes = makeStyles({
        titleCont: {
            backgroundColor: theme.palette.grey[300],
            borderRadius: theme.shape.borderRadius,
            paddingLeft: theme.spacing(2),
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(1),
            paddingRight: theme.spacing(2),
            marginBottom: theme.spacing(2),
        }
    })()

    return (
        <Box>
            <Paper className={classes.titleCont}>
                <Typography variant='h4'>{title}</Typography>
            </Paper>
            {children}
        </Box>
    )
}

export default SimpleLayout