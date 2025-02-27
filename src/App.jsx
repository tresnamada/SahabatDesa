import { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import IslandScene from './components/IslandScene';
import BoatLoadingScreen from './components/BoatLoadingScreen';
import './App.css';
import Desa1 from './components/Desa1/Desa';
import Desa2 from './components/Desa2/Desa';
import Desa3 from './components/Desa3/Desa';

function AppContent() {
  return (
    <Routes>
      <Route 
        path="/" 
        element={<Home />} 
      />
      <Route 
        path="/islands" 
        element={
          <>
            <Navbar />
            <IslandScene />
          </>
        } 
      />
      <Route 
        path="/islands/desa1" 
        element={
          <>
            <Navbar />
            <Desa1 />
          </>
        } 
      />
      <Route 
        path="/islands/desa2" 
        element={
          <>
            <Navbar />
            <Desa2 />
          </>
        } 
      />
      <Route 
        path="/islands/desa3" 
        element={
          <>
            <Navbar />
            <Desa3 />
          </>
        } 
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={
        <div className="fixed inset-0 z-50">
          <BoatLoadingScreen />
        </div>
      }>
        <AppContent />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
