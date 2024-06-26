import React from 'react';

const Dashboard = ({ incidents }) => {
    return (
        <div>
            <h2>Dashboard</h2>
            <p>Overview of current incidents and responses.</p>
            <ul>
                {incidents.map((incident, index) => (
                    <li key={index}>
                        <strong>{incident.description}</strong> - {incident.location} ({incident.severity})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
