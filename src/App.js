import React, { useEffect } from 'react'

const App = () => {
  const tele = window.Telegram.WebApp;

  useEffect(() => {
    tele.ready();
  }, [])

  const testInit = () => {
    alert(tele.initData)
  }

  const testInitUserName = () => {
    alert(tele.initDataUnsafe.user.first_name)
  }

  return (
    <div>
      <button onClick={testInit}>testInit</button>
      <button onClick={testInitUserName}>testInitUserName</button>
      <p>{tele.initDataUnsafe?.user?.id}</p>
      <p>{tele.initDataUnsafe?.user?.isBot}</p>
      <p>{tele.initDataUnsafe?.user?.first_name}</p>
      <p>{tele.initDataUnsafe?.user?.last_name}</p>
      <p>{tele.initDataUnsafe?.user?.username}</p>
      <p>{tele.initDataUnsafe?.user?.language_code}</p>
    </div>
  )
}

export default App