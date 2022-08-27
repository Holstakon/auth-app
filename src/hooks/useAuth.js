import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useSelector, useDispatch } from 'react-redux'
import { setAuth, setLoading, setUser } from '../redux/slices/authSlice'
import { useEffect } from 'react'

export const useAuth = () => {
  const dispatch = useDispatch()
  const isAuth = useSelector((state) => state.auth.isAuth)
  const isLoading = useSelector((state) => state.auth.isLoading)

  useEffect(() => {
    const auth = getAuth()
    const unsubscribeAuthCheck = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user))
        dispatch(setAuth(true))
        dispatch(setLoading(false))
      } else {
        dispatch(setUser(null))
        dispatch(setAuth(false))
        dispatch(setLoading(false))
      }
    })

    return unsubscribeAuthCheck
  }, [])
  return { isAuth, isLoading }
}
