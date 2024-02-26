import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Card from './components/Card.jsx'
let myObject = {
  username:"GauTam",
  password:123456
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* Ab is card ke andar jo bhi kuch dalunga wo direct props ke pas jayega */}
    <Card username="GauTam" />
    <Card username="Adrash" />
  </React.StrictMode>
);
