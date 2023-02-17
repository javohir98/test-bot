import React, { useEffect } from 'react'

const App = () => {
  const tg = window.Telegram.WebApp;

  useEffect(() => {
    tg.ready();
  }, [])

  const testInit = () => {
    alert(tg.initData)
  }

  const testInitUserName = () => {
    alert(tg.initDataUnsafe.user)
  }

  const onClose = () => {
    tg.close()
  }

  return (
    <div>
      <button onClick={testInit}>testInit</button>
      <button onClick={testInitUserName}>test User</button>
      <h1>User id: {tg.initDataUnsafe?.user?.id}</h1>
      <h1>First name: {tg.initDataUnsafe?.user?.first_name}</h1>
      <h1>Last name: {tg.initDataUnsafe?.user?.last_name}</h1>
      <h1>User name: {tg.initDataUnsafe?.user?.username}</h1>
      <h1>Lang code: {tg.initDataUnsafe?.user?.language_code}</h1>
      <button onClick={onClose}>Close</button>
    </div>
  )
}

export default App