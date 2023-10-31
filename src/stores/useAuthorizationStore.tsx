import create from 'zustand'
import { immer } from 'zustand/middleware/immer'

type AuthorizationStoreState = {
  authorized: boolean
  username: string
  loginUser: (userName: string, password: string) => void
  logoutUser: () => void
  setUsername: (name: string) => void
  setAuthorized: (flag: boolean) => void
}
export const useAuthorizationStore = create<AuthorizationStoreState>()(
  immer((set) => ({
    username: '',
    authorized: false,
    loginUser: async (username, password) => {
      set((state) => {
        if(username !== 'admin' || password !== 'haslo123') {
          return
        }
        state.authorized = true
        state.username = username
      })
    },
    logoutUser: () => {
      set((state) => {
        state.authorized = false
      })
    },
    setUsername: (name) => {
      set((state) => {
        state.username = name
      })
    },
    setAuthorized: (flag) => {
      set((state) => {
        state.authorized = flag
      })
    },
  }))
)

export const { loginUser, logoutUser, setUsername, setAuthorized } =
  useAuthorizationStore.getState()
