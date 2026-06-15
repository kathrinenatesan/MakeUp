import { useState } from 'react'
import { motion } from 'framer-motion'
import MonkScaleSelector from './MonkShadeSelector'
import UndertoneQuiz from './UndertoneQuiz'
import HomePage from './HomePage'

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

    for (const undertone in counts) {
        if (counts[undertone] > maxCount) {
            maxCount = counts[undertone];
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
    window.location.reload(); // show home page after onboarding is complete
  }

    return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      {currentPage === 1 && ( // intro page
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-md"
        >
          <h1 className="font-display text-5xl text-text-primary mb-4">
            find your make up.
          </h1>
          <p className="text-text-muted text-lg mb-8">
            answer a few quick questions and we'll assemble your profile so every 
            recommendation actually makes sense.
          </p>
          <button
            onClick={() => setCurrentPage(2)}
            className="bg-accent text-white px-8 py-3 rounded-full text-sm tracking-wide hover:bg-accent-soft transition-colors"
          >
            Let's start
          </button>
        </motion.div>
      )}
      {currentPage === 2 && ( // monk shade selector page
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-lg w-full"
        >
          <p className="text-text-muted text-sm uppercase tracking-widest mb-3">
            Step 1 of 2
          </p>
          <h2 className="font-display text-3xl text-text-primary mb-3">
            Which shade matches your skin?
          </h2>
          <p className="text-text-muted mb-8">
            Select the tone that most closely resembles your complexion.
          </p>
          <MonkScaleSelector
            selectedShade={selectedShade}
            onShadeSelect={setSelectedShade}
          />
          <button
            onClick={() => setCurrentPage(3)}
            disabled={!selectedShade}
            className={`mt-10 px-8 py-3 rounded-full text-sm tracking-wide transition-colors
              ${selectedShade 
                ? 'bg-accent text-white hover:bg-accent-soft' 
                : 'bg-surface text-text-muted cursor-not-allowed'}`}
          >
            Next
          </button>
        </motion.div>
      )}
      {currentPage === 3 && ( // undertone quiz page
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-lg w-full"
        >
          <p className="text-text-muted text-sm uppercase tracking-widest mb-3">
            Step 2 of 2
          </p>
          <h2 className="font-display text-3xl text-text-primary mb-8">
            Let's find your undertone
          </h2>
          <UndertoneQuiz
            onVeinSelect={setSelectedVeinUndertone}
            onJewelrySelect={setSelectedJewelryUndertone}
            onWhiteSelect={setSelectedWhiteUndertone}
          />
          <button
            onClick={handleComplete}
            disabled={!selectedVeinUndertone || !selectedJewelryUndertone || !selectedWhiteUndertone}
            className={`mt-10 px-8 py-3 rounded-full text-sm tracking-wide transition-colors
              ${selectedVeinUndertone && selectedJewelryUndertone && selectedWhiteUndertone
                ? 'bg-accent text-white hover:bg-accent-soft'
                : 'bg-surface text-text-muted cursor-not-allowed'}`}
          >
            Find my matches
          </button>
        </motion.div>
      )}

    </div>
  )
}

export default OnboardingPage;