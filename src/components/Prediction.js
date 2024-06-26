import React, { useState } from 'react';

const Prediction = () => {
    const [disaster, setDisaster] = useState('');
    const [location, setLocation] = useState('');
    const [prediction, setPrediction] = useState(null);

    const handleDisasterChange = (e) => {
        setDisaster(e.target.value);
    };

    const handleLocationChange = (e) => {
        setLocation(e.target.value);
    };

    const handlePredict = async () => {
        // Mocked prediction logic, replace with actual API call
        const response = await fetch(`https://api.prediction.example/predict?disaster=${disaster}&location=${location}`);
        const data = await response.json();
        setPrediction(data.probability);
    };

    return (
        <div>
            <h2>Prediction</h2>
            <div>
                <label>Disaster:</label>
                <select value={disaster} onChange={handleDisasterChange}>
                    <option value="">Select</option>
                    <option value="earthquake">Earthquake</option>
                    <option value="flood">Flood</option>
                    <option value="fire">Fire</option>
                </select>
            </div>
            <div>
                <label>Location:</label>
                <input type="text" value={location} onChange={handleLocationChange} />
            </div>
            <button onClick={handlePredict}>Predict</button>
            {prediction !== null && (
                <p>Probability of {disaster} in {location}: {prediction}%</p>
            )}
        </div>
    );
};

export default Prediction;
