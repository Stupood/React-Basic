import './App.css';
// import { useDataContext } from './componemts/context/context';
import { Routes, Route ,Navigate } from "react-router";
import Navbar from './componemts/Navbar/navbar';
import HomePage from './componemts/pages/home_page/homepage';
import ReportPage from './componemts/pages/report_page/reportpage';

export default function App() {
  // const { state } = useDataContext();
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/report' element={<ReportPage />}/>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

