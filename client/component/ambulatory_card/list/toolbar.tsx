import * as React from 'react'
import IconButton from 'core/icon_button';
import AddIcon from '@material-ui/icons/Add';
import { useHistory } from 'react-router';

type Props = {}

const TollbarComponent = (props: Props): JSX.Element => {
    const {

    } = props
    const history = useHistory()

    const handleAddBtnClick = () => history.push('/ambulatory-card/create')

    return (
        <IconButton onClick={handleAddBtnClick}>
            <AddIcon />
        </IconButton>
    )
}

export default TollbarComponent