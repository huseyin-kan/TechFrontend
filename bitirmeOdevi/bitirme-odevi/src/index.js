import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/Root/App';
import { Provider } from 'react-redux';
import { configureStore } from './Store/configureStore';
import "react-toastify/dist/ReactToastify.css"


const store = configureStore()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <Provider store={store}>
          <App/>    
      </Provider>
);

