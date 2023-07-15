import * as ReactDOM from 'react-dom/client' // i typed this and this worked: * as
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<App />)