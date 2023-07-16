import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.sass'
import { Provider } from 'react-redux'
import { weatherStore } from './shared/api/weather.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={weatherStore}>
    <App/>
  </Provider>
)
