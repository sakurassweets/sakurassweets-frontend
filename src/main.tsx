import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { CustomIcon } from './components/Common';
import { CloseButton } from './components/Common/Toast/CloseButton';
import { store } from './redux/store';
import App from './components/App';

import './index.scss';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  //<React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <App />
      <ToastContainer autoClose={2500} theme="dark" icon={CustomIcon} closeButton={<CloseButton />} />
    </Provider>
  </BrowserRouter>
  //</React.StrictMode>
);
