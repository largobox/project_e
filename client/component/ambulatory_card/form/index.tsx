import * as React from 'react'
import { useHistory } from 'react-router'
import Form from 'core/form'
import Input from 'core/input'
import Row from 'core/form/row'
import Cell from 'core/form/cell'
import * as yup from 'yup';
import CreateAmbulatoryCard from 'api/CreateAmbulatoryCard'

const schema = yup.object().shape({
    name: yup.string().required(),
    surname: yup.string().required(),
    patronymic: yup.string(),
});

const AmbulatoryCardForm = (): JSX.Element => {
    const history = useHistory()
    const handleSuccessSubmit = () => history.push('/ambulatory-card')

    return (
        <Form
            validationSchema={schema}
            submitMutation={CreateAmbulatoryCard}
            onSuccess={handleSuccessSubmit}
        >
            <Row>
                <Cell>
                    <Input name='name' label='имя' />
                </Cell>
            </Row>
            <Row>
                <Cell>
                    <Input name='surname' label='фамилия' />
                </Cell>
            </Row>
            <Row>
                <Cell>
                    <Input name='patronymic' label='отчество' />
                </Cell>
            </Row>
        </Form>
    )
}

export default AmbulatoryCardForm