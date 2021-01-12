import * as React from 'react'
import Box from '@material-ui/core/Box'
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import ListIcon from '@material-ui/icons/List'
import PersonPinIcon from '@material-ui/icons/PersonPin'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { navMenuIsOpenRV } from 'store'

const Top = (): JSX.Element => {
    const theme = useTheme()
    const classes = makeStyles({
        root: {
            background: theme.palette.primary.main,
            display: 'flex',
            justifyContent: 'space-between',
        },
        icon: {
            color: theme.palette.primary.contrastText
        },
    })();

    const handleMenuBtnClick = (ev: React.MouseEvent) => navMenuIsOpenRV(!navMenuIsOpenRV())

    return (
        <AppBar position='absolute'>
            <Box className={classes.root}>
                <IconButton
                    classes={{ root: classes.icon }}
                    onClick={handleMenuBtnClick}
                >
                    <ListIcon fontSize="large" />
                </IconButton>
                <IconButton
                    classes={{ root: classes.icon }}
                    onClick={handleMenuBtnClick}
                >
                    <PersonPinIcon fontSize="large" />
                </IconButton>
            </Box>
        </AppBar>
    )
}

export default Top