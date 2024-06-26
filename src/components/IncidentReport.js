import React, { useState } from 'react';

const IncidentReport = ({ addIncident }) => {
    const [incident, setIncident] = useState({ description: '', location: '', severity: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setIncident((prevIncident) => ({
            ...prevIncident,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Incident Submitted:', incident); // Debugging log
        addIncident(incident);
        setIncident({ description: '', location: '', severity: '' });
    };

    return (
        <div>
            <h2>Report Incident</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Description:</label>
                    <input type="text" name="description" value={incident.description} onChange={handleChange} required />
                </div>
                <div>
                    <label>Location:</label>
                    <input type="text" name="location" value={incident.location} onChange={handleChange} required />
                </div>
                <div>
                    <label>Severity:</label>
                    <select name="severity" value={incident.severity} onChange={handleChange} required>
                        <option value="">Select</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>
                <button type="submit">Report</button>
            </form>
        </div>
    );
};

export default IncidentReport;
