import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { LuX } from 'react-icons/lu';
import { store } from './redux/store';
import App from './components/App';

import './index.scss';
import 'react-toastify/dist/ReactToastify.css';
import { CustomIcon } from './components/Common/Toast/ToastIcon';
import classes from '../src/components/Common/Toast/toast.module.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  //<React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <App />
      <ToastContainer
        autoClose={2500}
        theme="dark"
        icon={CustomIcon}
        closeButton={<LuX className={classes.toast__closeIcon} />}
      />
    </Provider>
  </BrowserRouter>
  //</React.StrictMode>
);
