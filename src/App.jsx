import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { fetchKartuData } from './api';
import KartuDetail from './components/KartuDetail';
import './index.css';

const App = () => {
  const [kartuData, setKartuData] = useState(null);

  useEffect(() => {
    fetchKartuData()
      .then((data) => {
        setKartuData(data);
      })
      .catch((error) => {
        console.error('Gagal mengambil data dari field "kartu":', error);
      });
  }, []);

  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/kartu/:key"
            element={<KartuDetail kartuData={kartuData} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
