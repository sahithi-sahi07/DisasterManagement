import React, { useState } from 'react';

const Coordination = ({ helplines }) => {
    const [search, setSearch] = useState('');
    const [filteredHelplines, setFilteredHelplines] = useState(helplines);

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
        const searchTerm = e.target.value.toLowerCase();
        const filtered = helplines.filter(helpline =>
            helpline.type.toLowerCase().includes(searchTerm) ||
            helpline.number.includes(searchTerm)
        );
        setFilteredHelplines(filtered);
    };

    return (
        <div>
            <h2>Coordination</h2>
            <input
                type="text"
                placeholder="Search helplines..."
                value={search}
                onChange={handleSearchChange}
            />
            <ul>
                {filteredHelplines.map((helpline, index) => (
                    <p key={index}>
                        <strong>{helpline.type}</strong> - {helpline.number}
                    </p>
                ))}
            </ul>
        </div>
    );
};

export default Coordination;
