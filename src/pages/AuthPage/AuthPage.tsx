import { useState } from 'react'
import { AuthForm } from './AuthForm'
import styles from './authpage.module.scss'

export const AuthPage = (): JSX.Element => {
  const [login, setLogin] = useState(true)
  return (
    <section className={styles.section}>
      <div className="container full-h">
        <div className="row justify-center align-center full-h">
          <div className="col col-4">
            <div className={styles.wrapper}>
              <h2>{login ? 'Bem-vindo!' : 'Registre-se!'}</h2>
              <ul>
                <li>
                  <p
                    className={login ? `${styles.active}` : ''}
                    onClick={() => setLogin(true)}
                  >
                    Entrar
                  </p>
                </li>
                <li>
                  <p
                    className={login ? '' : `${styles.active}`}
                    onClick={() => setLogin(false)}
                  >
                    Cadastrar
                  </p>
                </li>
              </ul>
              <AuthForm login={login} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
