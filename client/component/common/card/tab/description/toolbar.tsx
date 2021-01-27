import * as React from 'react'
import { DocumentNode } from 'graphql'
import IconButton from 'core/icon_button';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { useHistory } from 'react-router';
import { useMutation } from '@apollo/client'
import Alert from 'core/alert';
import { useParams } from "react-router-dom";

type Props = {
    baseUrl: string
    deleteQuery: DocumentNode
    alertTitle: string
    alertText?: string
}

const TollbarComponent: React.FC<Props> = (props) => {
    const {
        baseUrl,
        deleteQuery,
        alertTitle,
        alertText,    
    } = props
    const { id } = useParams<{ id: string }>()
    const history = useHistory()
    const [open, setOpen] = React.useState(false);

    const [sendDeleteRequest, { loading, error }] = useMutation(
        deleteQuery,
        { onCompleted: () => history.push(`/${baseUrl}`) }
    );
    const handleEditBtnClick = () => history.push(`/${baseUrl}/${id}/update`)
    const handleClose = () => setOpen(false)

    return (
        <>
            <IconButton mr={1} onClick={handleEditBtnClick}>
                <EditIcon />
            </IconButton>
            <IconButton onClick={() => setOpen(true)}>
                <DeleteIcon />
            </IconButton>
            <Alert
                open={open}
                onClose={handleClose}
                onAgree={() => sendDeleteRequest({ variables: { id } })}
                title={alertTitle}
                text={alertText}
            />
        </>
    )
}

export default TollbarComponent