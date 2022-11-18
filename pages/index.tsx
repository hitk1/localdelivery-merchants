import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { loginSchema } from '../schemas/login.schema'

import styles from '../styles/commom.module.scss'

export default function Home() {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(loginSchema)
  })

  const onSubmit = ({ email, password }: { email: string, password: string }) => {
    //Implement login from context
   }

  return (
    <div className={styles.container}>

      <div className={styles.main}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Olá! Seja bem vindo</h1>

          <div className={styles.inputFields}>

          </div>
        </form>
      </div>
    </div>
  )
}
