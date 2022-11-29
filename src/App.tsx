import './App.css'
import { surround } from './apptools';

const message = 'welcome to this site';

function App() {

  return (
    <div className="App">
      <p>Message: {surround(message, '[]')}</p>
      <p>Message: {surround(message, '()')}</p>
      <p>Message: {surround(message, 'slkdjf')}</p>
      <p>Message: {surround(message, '--')}</p>
    </div>
  )
}

export default App
