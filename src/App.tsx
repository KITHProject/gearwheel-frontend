import { Button } from "./components/ui/button"
import { loginUser, useAuthorizationStore } from "./stores/useAuthorizationStore"

const App = () => {
  const authorized = useAuthorizationStore((state) => state.authorized)
  const username = useAuthorizationStore((state) => state.username)
  return (
      <>
      <Button
        onClick={() => {
          loginUser('admin', 'haslo123')
        }}
      >
        Log in
      </Button>
        {authorized ? <>Tak: {username}</> : <>Nie</>}
      </>
)
}

export default App
