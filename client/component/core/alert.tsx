import * as React from 'react';
import Button from 'core/button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

type Props = {
    title: string
    text?: string
    open: boolean
    onClose: () => void
    onAgree: () => void
}

const AlertComponent: React.FC<Props> = (props) => {
    const {
        title,
        text,
        open,
        onClose,
        onAgree
    } = props

    return (
        <Dialog
            open={open}
            onClose={onClose}
        >
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText>{text}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onAgree}>Да</Button>
                <Button onClick={onClose} autoFocus={true}>Нет</Button>
            </DialogActions>
        </Dialog>
    );
}

export default AlertComponent