import React from 'react';
import { useState } from 'react';

function UndertoneQuiz() {
    const [selectedVeinUndertone, setSelectedVeinUndertone] = useState(null);
    const [selectedJewelryUndertone, setSelectedJewelryUndertone] = useState(null);
    const [selectedWhiteUndertone, setSelectedWhiteUndertone] = useState(null);

    const handleVeinUndertoneSelect = (undertone) => {
        setSelectedVeinUndertone(undertone);
    }

    const handleJewelryUndertoneSelect = (undertone) => {
        setSelectedJewelryUndertone(undertone);
    }

    const handleWhiteUndertoneSelect = (undertone) => {
        setSelectedWhiteUndertone(undertone);
    }

    return (
        <div className="undertone-quiz">
            <h2>Take a second to look at the inside of your wrist. 
                What color do your veins predominately appear?</h2>
            <div className="undertone-veins">
                <button onClick={() => handleVeinUndertoneSelect('cool')}>More blue</button>
                <button onClick={() => handleVeinUndertoneSelect('warm')}>More green</button>
                <button onClick={() => handleVeinUndertoneSelect('neutral')}>Hard to tell if 
                    they are more blue or green</button>
            </div>
            <h2>What metal jewelry do you prefer on your skin?</h2>
            <div className="undertone-jewelry">
                <button onClick={() => handleJewelryUndertoneSelect('cool')}>Silver</button>
                <button onClick={() => handleJewelryUndertoneSelect('warm')}>Gold</button>
                <button onClick={() => handleJewelryUndertoneSelect('neutral')}>Either works!</button>
            </div>
            <h2>Quickly find a white piece of paper or fabric and hold it near your face.
                How does your complexion look next to it?
            </h2>
            <div className="undertone-white">
                <button onClick={() => handleWhiteUndertoneSelect('warm')}>It brings out more warmth in my face</button>
                <button onClick={() => handleWhiteUndertoneSelect('cool')}>My skin looks a bit more pink next to it</button>
                <button onClick={() => handleWhiteUndertoneSelect('neutral')}>I can't really tell</button>
            </div>
        </div>
    )
}

export default UndertoneQuiz;