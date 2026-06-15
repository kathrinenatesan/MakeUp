import React from 'react';
import { useState } from 'react';

const monkShades = [
    { id: 1, color: '#f6ede4' },
    { id: 2, color: '#f3e7db' },
    { id: 3, color: '#f7ead0' },
    { id: 4, color: '#eadaba' },
    { id: 5, color: '#d7bd96' },
    { id: 6, color: '#a07e56' },
    { id: 7, color: '#825c43' },
    { id: 8, color: '#604134' },
    { id: 9, color: '#3a312a' },
    { id: 10, color: '#292420' }, 

]

function MonkScaleSelector({ selectedShade, onShadeSelect }) {
    const [selectedShade, setSelectedShade] = useState(null);

    const handleShadeSelect = (shade) => {
        setSelectedShade(shade);
    }

    return (
        <div className="monk-scale-selector">
            {monkShades.map((shade) => (
                <div
                    key={shade.id}
                    style={{ backgroundColor: shade.color }}
                    onClick={() => handleShadeSelect(shade)}
                    className={`w-10 h-10 rounded-full border-2 
                    ${selectedShade?.id === shade.id ? 'border-white' : 'border-transparent'}`}
                />
            ))}
        </div>
    )
}

export default MonkScaleSelector;
    

