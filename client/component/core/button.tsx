import * as React from 'react'
// import { useTheme, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { ButtonProps } from '@material-ui/core';

const ButtonComponent: React.FC<ButtonProps> = (props) => {
    const {
        children,
        onClick,
        type,
        startIcon,
        autoFocus,
    } = props
    // const theme = useTheme();
    // const classes = makeStyles({
    //     root: {},
    // })();

    return (
        <Button
            type={type}
            variant='contained'
            color='primary'
            onClick={onClick}
            startIcon={startIcon}
            autoFocus={autoFocus}
        >
            {children}
        </Button>
    )
}

export default ButtonComponent