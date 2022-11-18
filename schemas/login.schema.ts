import * as Yup from 'yup'

export const loginSchema = Yup.object().shape({
    email: Yup.string().email('Email invalido').required('Obrigatório'),
    password: Yup.string().required('Obrigatório')
})