import * as React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import Paper from '@material-ui/core/Paper'
import { useTheme, makeStyles } from '@material-ui/core/styles';

const PreloaderComponent = (): JSX.Element => {
    const theme = useTheme();
    const classes = makeStyles({
        preloaderCont: {
            textAlign: 'center',
            padding: theme.spacing(2),
            backgroundColor: theme.palette.grey[300],
        },
    })();

    return (
        <Paper className={classes.preloaderCont}>
            <CircularProgress />
        </Paper>
    )
}

export default PreloaderComponent