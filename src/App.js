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
    alert(tele.initData?.user?.first_name)
  }

  return (
    <div>
      <button onClick={testInit}>testInit</button>
      <button onClick={testInitUserName}>testInitUserName</button>
    </div>
  )
}

export default App