import * as React from 'react'
import { useTheme, makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { IconButtonProps } from '@material-ui/core';

type Props = {
    mr?: 1|2|3|4|5|6|7|8
}

const IconButtonComponent = (props: IconButtonProps & Props): JSX.Element => {
    const {
        children,
        onClick,
        mr = 0,
    } = props
    const theme = useTheme();
    const classes = makeStyles({
        root: {
            color: theme.palette.secondary.contrastText,
            backgroundColor: theme.palette.secondary.main,
            marginRight: theme.spacing(mr),

            '&:hover': {
                backgroundColor: theme.palette.secondary.dark,
            }
        },
    })();

    return (
        <IconButton classes={{ root: classes.root }} onClick={onClick}>
            {children}
        </IconButton>
    )
}

export default IconButtonComponent