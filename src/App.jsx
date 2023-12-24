import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import './App.css'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import projects from "./components/json/projects.json"
import { getSheetData } from "./api/index"

function App() {
  const [data, setdata] = useState(projects);
  const [loading, setloading] = useState(true);
  const [readyLoadingEnd, setreadyLoadingEnd] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const result = await getSheetData();
    if (result !== undefined) {
      setdata(result);
      setreadyLoadingEnd(true);
      setTimeout(() => {
        setloading(false);
      }, 2000);
    }
  };

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {data.ntue !== undefined ? (
            <Route
              path="/ntue"
              element={
                <Navigate replace to={`/ntue/${Object.keys(data.ntue)[0]}`} />
              }
            />
          ) : null}
          <Route 
            path="/ntue/:categroy"
            element={<Portfolio data={data.ntue} school={"ntue"} />} 
          />
          {data.ntut !== undefined ? (
            <Route
              path="/ntut"
              element={
                <Navigate replace to={`/ntut/${Object.keys(data.ntut)[0]}`} />
              }
            />
          ) : null}
          <Route 
            path="/ntut/:categroy" 
            element={<Portfolio data={data.ntut} school={"ntut"} />} 
          />
        </Routes>
      </BrowserRouter>
)}

export default App
