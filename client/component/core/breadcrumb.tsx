import * as React from 'react'
import { useHistory } from 'react-router'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { makeStyles, useTheme } from '@material-ui/core/styles';

export type TBreadcrumb = {
    label: string
    url?: string
}

type Props = {
    items: TBreadcrumb[]
}

const BreadcrumbComponent: React.FC<Props> = (props) => {
    const { items } = props
    const history = useHistory()    
    const theme = useTheme()
    const classes = makeStyles({
        root: {
            marginBottom: theme.spacing(4)
        },
        linkedLabel: {
            color: theme.palette.primary.main,
            textDecoration: 'underline',

            '&:hover': {
                cursor: 'pointer',
                textDecoration: 'none',
            },

            '&:first-letter': {
                textTransform: 'uppercase',
            }
        },
        currentLabel: {
            '&:first-letter': {
                textTransform: 'uppercase',
            }
        }
    })()

    const handleClick = (value: string) => history.push(value)

    return (
        <Breadcrumbs
            classes={{ root: classes.root }}
            separator={<NavigateNextIcon fontSize="small" />}
        >
            {
                items.map((item, index) => {
                    if (item.url) {
                        return (
                            <Typography
                                classes={{ root: classes.linkedLabel }}
                                key={index}
                                onClick={() => handleClick(item.url)}
                            >
                                {item.label}
                            </Typography>
                        )
                    }
                    return (
                        <Typography
                            classes={{ root: classes.currentLabel }}
                            key={index}
                        >
                            {item.label}
                        </Typography>
                    )
                })
            }
        </Breadcrumbs>
    )
}

export default BreadcrumbComponent

