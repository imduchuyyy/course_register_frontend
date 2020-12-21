import React, {
  useContext,
  createContext,
  useEffect,
  useCallback,
  useState
} from 'react'
import { TOKEN_NAME, LIST_API, API_LINK } from '@environments'
import axios from 'axios'

const AuthContext = createContext()

function AuthValue() {
  // const { onPost: loginUser }
  const [isAuth, setIsAuth] = useState(!!localStorage.getItem(TOKEN_NAME))
  const [currentUser, setCurrentUser] = useState()

  const login = useCallback(async (username, password) => {
    try {
      const res = await axios.post(LIST_API.LOGIN, {
        username,
        password
      })

      if (res.data) {
        localStorage.setItem(TOKEN_NAME, res.data.token)
        setIsAuth(true)
        return {
          success: true,
          message: 'welcome'
        }
      } else {
        return {
          success: false,
          message: 'username or password is incorrect'
        }
      }
      // console.log(res)
    } catch (error) {
      return {
        success: false,
        message: 'username or password is incorrect'
      }
    }
  })

  const getToken = useCallback(() => {
    const token = localStorage.getItem(TOKEN_NAME)
    const result = `Barer ${token}`
    return result
  })

  const logout = useCallback(() => {
    localStorage.removeItem(TOKEN_NAME)
    setIsAuth(false)
  })

  const fetchCurrentUser = useCallback(async () => {
    if (isAuth) {
      const res = await axios.post(
        LIST_API.CURRENT_USER,
        {},
        {
          headers: {
            Authorization: getToken()
          }
        }
      )
      if (res.data.current_user) {
        setCurrentUser(res.data.current_user)
      }
    }
  })

  useEffect(() => {
    fetchCurrentUser()
  }, [isAuth])

  return {
    isAuth,
    login,
    logout,
    getToken,
    currentUser
  }
}

export const useAuth = () => useContext(AuthContext)

export function AuthProvider({ children }) {
  return (
    <AuthContext.Provider value={AuthValue()}>{children}</AuthContext.Provider>
  )
}
