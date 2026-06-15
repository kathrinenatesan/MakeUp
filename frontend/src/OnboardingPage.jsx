import { useState } from 'react';
import MonkScaleSelector from './MonkShadeSelector';
import UndertoneQuiz from './UndertoneQuiz';

function OnboardingPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedShade, setSelectedShade] = useState(null);
  const [selectedVeinUndertone, setSelectedVeinUndertone] = useState(null);
  const [selectedJewelryUndertone, setSelectedJewelryUndertone] = useState(null);
  const [selectedWhiteUndertone, setSelectedWhiteUndertone] = useState(null);

  const finalUndertone = () => {
    const undertones = [selectedVeinUndertone, selectedJewelryUndertone, selectedWhiteUndertone];
    const counts = undertones.reduce((counts, undertone) => {
      counts[undertone] = (counts[undertone] || 0) + 1;
            return counts;
    }, {});
    let maxCount = 0;
    let mostCommonUndertone = null;

    for (const undertone in undertoneCounts) {
        if (undertoneCounts[undertone] > maxCount) {
            maxCount = undertoneCounts[undertone];
            mostCommonUndertone = undertone;
        }
    }

    return mostCommonUndertone;
  }

  const handleComplete = () => {
    const profile = {
      monkShade: selectedShade,
      undertone: finalUndertone(),
    }
    localStorage.setItem('profile', JSON.stringify(profile));
    // navigate to home — you'll add this once routing is set up
  }

  return (
    <div className="onboarding-page">
      {currentPage === 1 && (
        <MonkScaleSelector 
          selectedShade={selectedShade} 
          onShadeSelect={setSelectedShade} 
        />
      )}
      {currentPage === 2 && (
        <UndertoneQuiz
          onVeinSelect={setSelectedVeinUndertone}
          onJewelrySelect={setSelectedJewelryUndertone}
          onWhiteSelect={setSelectedWhiteUndertone}
        />
      )}
      {currentPage === 1 && (
        <button onClick={() => setCurrentPage(2)}>Next</button>
      )}
      {currentPage === 2 && (
        <button onClick={handleComplete}>Find my matches</button>
      )}
    </div>
  )
}

export default OnboardingPage;