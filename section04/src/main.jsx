import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render( //id가 'root'인인 요소를 가져와서 React 애플리케이션을 렌더링
  <StrictMode>
    <App /> //App 컴포넌트를 StrictMode로 감싸서 렌더링
  </StrictMode>,
)
