import './App.sass'
import TicTacToe from './widgets/TicTacToe'
import Winners from './widgets/Winners'

function App() {
  return (
    <div className='app'>
      <TicTacToe/>
      <Winners/>
    </div>
  )
}

export default App
