import React from "react";
import { HomePage, LoginPage, RegisterPage } from "./page";
import { Routes, Route} from "react-router-dom"

const App = () => {
  return <main>
    <Routes>
      <Route path="/" element={<LoginPage/>} />
    </Routes>
  </main>;
};

export default App;
