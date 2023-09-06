import { render } from 'preact'
import { App } from './Components/App'
import './index.css'
import { Toaster } from 'react-hot-toast'
render(
  <><Toaster /><App /></>, document.getElementById('app')!)
