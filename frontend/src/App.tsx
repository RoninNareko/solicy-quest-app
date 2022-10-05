import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AccountsPage from "./pages/AccountsPage";
import AccountInfoPage from "./pages/AccountInfoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/accounts/" />} />
        <Route path="/accounts" element={<AccountsPage />} />
        <Route path="/accounts/:id" element={<AccountInfoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
