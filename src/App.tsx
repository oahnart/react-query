/* GPT
add a fake button to toggle login
- label: toggle login
- action: toggle state isLoggedIn
bind state isLoggedIn to useProfile --> enabled props
*/

import { useProfile } from '@/hooks'
import { useState } from 'react'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const { data: profile, isLoading, error } = useProfile({ enabled: isLoggedIn })

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn)
  }

  if (isLoading) {
    return <div>Loading profile...</div>
  }

  if (error) {
    return <div>Error loading profile: {error.message}</div>
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Profile</h1>
        <button onClick={toggleLogin}>Toggle login</button>
        {profile && (
          <div>
            <p>Name: {profile.name}</p>
            <p>Email: {profile.email}</p>
            {/* Render other profile data as needed */}
          </div>
        )}
      </header>
    </div>
  )
}

export default App
