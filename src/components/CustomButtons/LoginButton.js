import { Component } from 'react'
// apollo mutation component
import { Mutation } from 'react-apollo'
import { login } from '../../constants/mutationOperations'
// state
import { userStateStore } from '../../utils/unstated'
// router
import Router from 'next/router'
// error handling
import handleError from '../../utils/handleError'
//cookies
import Cookies from 'js-cookie'
// type react properties
import PropTypes from 'prop-types'
// constants
import { USER_SESSION, EXPIRES } from '../../constants/cookies'
// core components
import Button from '../../components/CustomButtons/Button.jsx'
import ValidationMessage from '../CustomText/ValidationMessage.jsx'

class LoginButton extends Component {
  state = { message: '' }

  onLogin = async (loginData, login) => {
    const { emailOrUsername, password } = loginData
    await login({
      variables: {
        data: {
          emailOrUsername,
          password,
        },
      },
    })
      .then(({ data }) => {
        const {
          login: { user, userToken },
        } = data
        userStateStore.setState({
          login: true,
          ...user,
          userId: user.id,
          userToken: userToken,
        })
        Cookies.set(USER_SESSION, userToken, {
          expires: EXPIRES,
        })
        Router.push('/')
      })
      .catch((err) => {
        const error = handleError(err)
        this.setState({
          message: error.message,
        })
      })
  }

  render() {
    const {
      props: { classes, loginButtonReferencing },
      state: { message },
      onLogin,
    } = this
    return (
      <Mutation mutation={login}>
        {(login, { loading }) => {
          return (
            <div className={classes.textCenter}>
              <Button
                ref={(LoginButton) => {
                  loginButtonReferencing(LoginButton)
                }}
                simple
                color='primary'
                size='lg'
                disabled={loading}
                onClick={(e) => {
                  e.preventDefault()
                  onLogin(userStateStore.data, login)
                }}
              >
                Login
              </Button>
              {<ValidationMessage classes={classes} message={message} />}
            </div>
          )
        }}
      </Mutation>
    )
  }
}

LoginButton.propTypes = {
  classes: PropTypes.object,
  loginButtonReferencing: PropTypes.func,
}
export default LoginButton
