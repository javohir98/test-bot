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
    alert(tg.initDataUnsafe.user.first_name)
  }

  return (
    <div>
      <button onClick={testInit}>testInit</button>
      <button onClick={testInitUserName}>testInitUserName</button>
      <span>{tg.initDataUnsafe?.user?.username}</span>
      <span>{tg.initDataUnsafe?.user?.first_name}</span>
      <span>{tg.initDataUnsafe?.user?.last_name}</span>
    </div>
  )
}

export default App