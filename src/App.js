import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import IncidentReport from './components/IncidentReport';
import Coordination from './components/Coordination';
import Prediction from './components/Prediction';
import './styles/App.css';

const App = () => {
    const [incidents, setIncidents] = useState([]);
    const [helplines] = useState([
        { type: 'Fire', number: '123-456-7890' },
        { type: 'Medical', number: '098-765-4321' },
        { type: 'Police', number: '111-222-3333' },
    ]);

    const addIncident = (incident) => {
        setIncidents(prevIncidents => [...prevIncidents, incident]);
    };

    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Dashboard incidents={incidents} />} />
                    <Route path="/report" element={<IncidentReport addIncident={addIncident} />} />
                    <Route path="/coordinate" element={<Coordination helplines={helplines} />} />
                    <Route path="/predict" element={<Prediction />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
