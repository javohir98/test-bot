
const App = () => {
  const tg = window.Telegram.WebApp

  return (
    <div className='container'>
      <button onClick={() => alert(tg.colorScheme)}>test dark</button>
      <p>{tg?.initDataUnsafe?.user?.id}</p>
    </div>
  )
}

export default App