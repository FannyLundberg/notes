import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Login } from './components/Login';
import { LoggedIn } from './components/LoggedIn';
import { ViewDocument } from './components/ViewDocument';
import { EditDocument } from './components/EditDocument';
import { NotFound } from './components/NotFound';
import { WrongInput } from './components/WrongInput';
import { CreateDocument } from './components/CreateDocument';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login></Login>}></Route>
          <Route path="/loggedIn" element={<LoggedIn></LoggedIn>}></Route>
          <Route path="/viewDocument/:title" element={<ViewDocument></ViewDocument>}></Route>
          <Route path="/editDocument/:title" element={<EditDocument></EditDocument>}></Route>
          <Route path="/createDocument" element={<CreateDocument></CreateDocument>}></Route>
          <Route path="/wrongInput" element={<WrongInput></WrongInput>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
