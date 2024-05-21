import { useAuth } from '@/hooks'
import styles from './authpage.module.scss'
import { Button, Input } from '@/components'
import { useNavigate } from 'react-router-dom'

type AuthFormProps = {
  login: boolean
}

export const AuthForm = ({ login }: AuthFormProps): JSX.Element => {
  const { signIn, signUp, error } = useAuth()
  const history = useNavigate()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, type: string) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const userName = formData.get('userName') as string
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    if (type === 'signup') {
      signUp(email, password)
      history('/')
    } else {
      signIn(email, password)
      history('/')
    }
  }
  return (
    <form
      onSubmit={(e) => handleSubmit(e, login ? 'signin' : 'signup')}
      className={styles.form}
    >
      {!login && (
        <Input name="userName" placeholder="Usuário" className="pd-lg" />
      )}
      <Input name="email" placeholder="Email" className="pd-lg" />
      <Input
        name="password"
        placeholder="Senha"
        type="password"
        className="pd-lg"
      />
      <Button className="pd-lg">{login ? 'Entrar' : 'Cadastrar'}</Button>
      {error && (
        <small>
          {login
            ? 'E-mail/senha incorretos. Certifique-se de ser cadastrado.'
            : 'Ocorreu um erro ao tentar se registrar'}
        </small>
      )}
    </form>
  )
}
