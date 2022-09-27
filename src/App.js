import { Button } from 'antd';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout_ from "./pages/Layout_";
import Home from "./pages/Home";
import AutoFrontend from "./pages/AutoFrontend";
import AutoBackend from "./pages/AutoBackend";
import AutoDA from "./pages/AutoDA";
import AutoML from './pages/AutoML';
import AutoMobile from './pages/AutoMobile';
import NoPage from './pages/NoPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout_ />}>
          <Route index element={<Home />} />
          <Route path="autofront" element={<AutoFrontend />} />
          <Route path="autoback" element={<AutoBackend />} />
          <Route path="autoda" element={<AutoDA/>}/>
          <Route path='automl' element={<AutoML/>} />
          <Route path='automobile' element={<AutoMobile/>} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
