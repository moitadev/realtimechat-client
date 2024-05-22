import { useAuth } from '@/hooks'
import styles from './authpage.module.scss'
import { Button, Input } from '@/components'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'

type AuthFormProps = {
  login: boolean
}

export const AuthForm = ({ login }: AuthFormProps): JSX.Element => {
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const passRef = useRef<HTMLInputElement>(null)
  const { signIn, signUp, error } = useAuth()
  const history = useNavigate()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, type: string) => {
    e.preventDefault()

    //const userName = nameRef?.current?.value
    const email = emailRef.current!.value
    const password = passRef.current!.value

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
        <Input name="userName" placeholder="Usuário" className="pd-lg" ref={nameRef} />
      )}
      <Input name="email" placeholder="Email" className="pd-lg" ref={emailRef} />
      <Input
        name="password"
        placeholder="Senha"
        type="password"
        className="pd-lg"
        ref={passRef}
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
