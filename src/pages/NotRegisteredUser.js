import React from 'react'

import { RegisterMutation } from '../container/RegisterMutation'
import { UserForm } from '../components/UserForm'

import Context from '../Context'

export const NotRegisteredUser = () => (
  <Context.Consumer>
    {
      ({ activateAuth }) => {
        return (
          <>
            <RegisterMutation>
              {
                (register, { data, loading, error }) => {
                  const onSubmit = ({ email, password }) => {
                    const variables = {
                      input: { email, password }
                    }
                    register({ variables }).then(activateAuth)
                  }

                  const errorMsg = error && 'El usuario ya existe o hay algún problema.'

                  return <UserForm disabled={loading} error={errorMsg} title='Registrarse' onSubmit={onSubmit} />
                }
              }
            </RegisterMutation>

            <UserForm title='Iniciar sesión' onSubmit={activateAuth} />
          </>)
      }
    }
  </Context.Consumer>
)
