import { useState } from "react";
import * as styles from "./App.styles";
import { Card, SideBar, TopBar } from "@/components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <styles.App>
      <BrowserRouter>
        <TopBar />
        <SideBar />
        <Routes>
          <Route path="/" element={<div />} />
        </Routes>
      </BrowserRouter>
    </styles.App>
  );
};

export default App;
