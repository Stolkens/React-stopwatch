import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/global.scss';
import './styles/normalize.scss';

const container = document.querySelector('#root')
const root = createRoot(container)

root.render(
  <App tab="home"/>
);