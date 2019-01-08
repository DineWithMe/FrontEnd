import { Container } from 'unstated'
// cookies
import Cookies from 'js-cookie'
import { USER_SESSION } from '../constants/cookies'

const initialState = {
  login: false,
  userId: '',
  name: '',
  username: '',
  userToken: '',
}

class UserStateContainer extends Container {
  state = initialState
  setUserState = (state) => {
    this.setState(state)
  }
  // these two methods doesn't need setState as they run before rendering
  initUserState = (state) => {
    this.state = state
  }
  resetUserState = (setState) => {
    if (setState) {
      this.setState(initialState)
      process.browser && Cookies.remove(USER_SESSION)
    } else {
      this.initUserState(initialState)
    }
  }
}
const userStateStore = new UserStateContainer()
export { UserStateContainer, userStateStore }
