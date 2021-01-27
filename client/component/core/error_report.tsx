import * as React from 'react'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import { useTheme, makeStyles } from '@material-ui/core/styles';

type Props = {
    componentName: String
    error: Error
    message: String
}

const ErrorReportComponent = (props: Props): JSX.Element => {
    const {
        componentName,
        message,
        error,
    } = props
    const theme = useTheme();
    const classes = makeStyles({
        errorCont: {
            backgroundColor: theme.palette.error.main,
            color: theme.palette.error.contrastText,
            padding: theme.spacing(2),
        }
    })();

    console.error('error: ', error)

    return (
        <Paper className={classes.errorCont}>
            <Typography>{`Компонент "${componentName}". ${message}`}</Typography>
        </Paper>
    )
}

export default ErrorReportComponent