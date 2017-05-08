import App from './views/App'
import users from './views/users/routes'

export default [
  {
    path: '/', component: App,
  },
  users,
]
