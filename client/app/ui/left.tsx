import * as React from 'react'
import { useHistory } from 'react-router-dom'
import MenuList from '@material-ui/core/MenuList'
import MenuItem from '@material-ui/core/MenuItem'
import Drawer from '@material-ui/core/Drawer'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { navMenuIsOpenRV } from 'store'
import { useReactiveVar } from '@apollo/client';

type MenuItemType = {
    url: string
    label: string
}

const items: Array<MenuItemType> = [
    { url: '/ambulatory-card', label: 'Регистратура' },
    { url: '/services', label: 'Услуги' }
]

const Left = (): JSX.Element => {
    const navMenuIsOpen = useReactiveVar(navMenuIsOpenRV);
    const history = useHistory()
    const theme = useTheme()
    const classes = makeStyles({
        paper: {
            padding: theme.spacing(2),
            width: 250,
            backgroundColor: theme.palette.grey[300],
            zIndex: theme.zIndex.appBar - 1,
        },
        list: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '100%',
            outline: 'none',
        },
        item: {
            background: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            borderRadius: theme.shape.borderRadius,

            '&:not(last-child)': {
                marginBottom: theme.spacing(1)
            },

            '&:hover': {
                background: theme.palette.primary.dark,
                color: theme.palette.primary.contrastText,
            }
        }
    })()

    const handleClose = () => navMenuIsOpenRV(false)
    const handleMenuItemClick = (p: MenuItemType) => {
        if (history.location.pathname === p.url) return

        history.push(p.url)
    }

    return (
        <Drawer
            classes={{paper: classes.paper}}
            open={navMenuIsOpen}
            onClose={handleClose}
            variant='persistent'
            transitionDuration={{
                enter: theme.transitions.duration.standard,
                exit: theme.transitions.duration.standard
            }}
        >
            <MenuList
                classes={{ root: classes.list }}
            >
                {
                    items.map(item =>
                        <MenuItem
                            key={item.url}
                            classes={{ root: classes.item }}
                            onClick={handleMenuItemClick.bind(null, item)}
                        >
                            {item.label}
                        </MenuItem>
                    )
                }
            </MenuList>
        </Drawer>
    )
}

export default Left