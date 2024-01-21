import { Route, Routes } from "react-router-dom";
import "./App.css";
import Chart from "./components/Chart";
import TablePage from "./components/TablePage";
import { useApi } from "./context/ApiContext";

function App() {
  const { Data } = useApi();
  return (
    <>
      <Routes>
        <Route path="/" element={<TablePage />} />
        <Route path="/chart" element={<Chart items={Data} />} />
      </Routes>
    </>
  );
}

export default App;
