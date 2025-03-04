import * as React from 'react'
import { useHistory } from 'react-router'
import Form from 'core/form'
import Input from 'core/input'
import Row from 'core/form/row'
import Cell from 'core/form/cell'
import * as yup from 'yup';
import { AmbulatoryCardI } from 'shared/type'
import { DocumentNode } from 'graphql'

type Props = {
    initialData?: AmbulatoryCardI,
    mutation: DocumentNode,
}

const schema = yup.object().shape({
    name: yup.string().required(),
    surname: yup.string().required(),
    patronymic: yup.string(),
});

const AmbulatoryCardForm: React.FC<Props> = (props) => {
    const { initialData, mutation } = props
    const history = useHistory()
    const handleSuccessSubmit = () => history.push('/ambulatory-card')

    return (
        <Form
            validationSchema={schema}
            submitMutation={mutation}
            onSuccess={handleSuccessSubmit}
            initialData={initialData}
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