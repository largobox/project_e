import * as React from 'react'
import { useTheme, makeStyles } from '@material-ui/core/styles';
import Button from 'core/button';
import { useForm } from "react-hook-form";
import { TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import { AnyObjectSchema } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { DocumentNode } from 'graphql'
import { useMutation } from '@apollo/client'
import { getComponentTypeLabel } from 'helper'
import Preloader from 'core/preloader'
import ErrorReport from 'core/error_report'
import SaveIcon from '@material-ui/icons/Save';

type Props = {
    children: JSX.Element | JSX.Element[]
    validationSchema: AnyObjectSchema
    submitMutation: DocumentNode
    onSuccess: () => void
    initialData?: {id: string}
}

const FormComponent = (props: Props): JSX.Element => {
    const {
        initialData,
        validationSchema,
        children,
        submitMutation,
        onSuccess,
    } = props
    const [mutateFunc, { loading, error }] = useMutation(submitMutation, { onCompleted: () => onSuccess() });
    const {
        register,
        handleSubmit,
        errors,
    } = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: initialData,
    });
    const theme = useTheme();
    const classes = makeStyles({
        field: {
            marginBottom: theme.spacing(1)
        },
    })();
    const onSubmit = handleSubmit<{ [key: string]: any }>((data) => {
        Object.keys(data).forEach(key => {
            if (data[key] === '') data[key] = null
        })

        const variables: {input: object, id?: string} = { input: data }

        if (initialData && initialData.id) variables.id = initialData.id

        mutateFunc({ variables })
    });

    if (error) {
        return (
            <ErrorReport
                error={error}
                componentName={getComponentTypeLabel('FormComponent')}
                message='Ошибка при отправке данных на сервер'
            />
        )
    }
    if (loading) return <Preloader />

    return (
        <form onSubmit={onSubmit}>
            {
                React.Children.map(children, containerChild => {
                    if (containerChild.type.name !== 'FormRowComponent') {
                        throw new Error('Error in FormComponent. Child must be "FormRowComponent"')
                    }

                    return (
                        <Grid container>
                            {
                                React.Children.map(containerChild.props.children, itemChild => {
                                    if (itemChild.type.name !== 'FormCellComponent') {
                                        throw new Error('Error in FormComponent. Child must be "FormCellComponent"')
                                    }

                                    return (
                                        <Grid item xs={4}>
                                            {
                                                React.Children.map(itemChild.props.children, inputChild => {
                                                    if (inputChild.type.name !== 'InputComponent') {
                                                        throw new Error('Error in FormComponent. Child must be "InputComponent"')
                                                    }

                                                    const validationErrorText = (type: string) => {
                                                        switch (type) {
                                                            case 'required':
                                                                return 'Не может быть пустым'
                                                            default:
                                                                return ' '
                                                        }
                                                    }

                                                    return (
                                                        < TextField
                                                            fullWidth
                                                            classes={{ root: classes.field }}
                                                            label={inputChild.props.label}
                                                            name={inputChild.props.name}
                                                            variant='outlined'
                                                            inputRef={register}
                                                            autoComplete='off'
                                                            error={errors[inputChild.props.name] === undefined ? false : true}
                                                            helperText={validationErrorText(errors[inputChild.props.name]?.type)}
                                                        />
                                                    )
                                                })
                                            }
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    )
                })
            }
            <Button
                type="submit"
                startIcon={<SaveIcon />}
            >
                Сохранить
            </Button>
        </form >
    )
}

export default FormComponent