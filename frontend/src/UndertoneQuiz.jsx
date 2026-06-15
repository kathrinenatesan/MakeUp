import { useState } from 'react';

function UndertoneQuiz({ onVeinSelect, onJewelrySelect, onWhiteSelect }) {
  const [selectedVein, setSelectedVein] = useState(null);
  const [selectedJewelry, setSelectedJewelry] = useState(null);
  const [selectedWhite, setSelectedWhite] = useState(null);

  const veinOptions = [
    { label: 'More blue', value: 'cool' },
    { label: 'More green', value: 'warm' },
    { label: "Hard to tell", value: 'neutral' },
  ];

  const jewelryOptions = [
    { label: 'Silver', value: 'cool' },
    { label: 'Gold', value: 'warm' },
    { label: 'Either works', value: 'neutral' },
  ];

  const whiteOptions = [
    { label: 'It brings out more warmth in my face', value: 'warm' },
    { label: 'My skin looks more pink next to it', value: 'cool' },
    { label: "I can't really tell", value: 'neutral' },
  ];

  const handleVeinSelect = (value) => {
    setSelectedVein(value);
    onVeinSelect(value);
  }

  const handleJewelrySelect = (value) => {
    setSelectedJewelry(value);
    onJewelrySelect(value);
  }

  const handleWhiteSelect = (value) => {
    setSelectedWhite(value);
    onWhiteSelect(value);
  }

  return (
    <div className="flex flex-col gap-10 text-left w-full max-w-lg">

      <div className="flex flex-col gap-3">
        <p className="text-text-primary font-body text-base">
          Take a second to look at the veins on your wrist. What color do they appear to be?
        </p>
        <div className="flex flex-col gap-2">
          {veinOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => handleVeinSelect(option.value)}
              className={`px-4 py-3 rounded-xl text-sm text-left transition-all border
                ${selectedVein === option.value
                  ? 'border-accent text-accent bg-surface'
                  : 'border-surface text-text-muted hover:border-text-muted'}`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-text-primary font-body text-base">
          Which type of jewelry makes your skin look better?
        </p>
        <div className="flex flex-col gap-2">
          {jewelryOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => handleJewelrySelect(option.value)}
              className={`px-4 py-3 rounded-xl text-sm text-left transition-all border
                ${selectedJewelry === option.value
                  ? 'border-accent text-accent bg-surface'
                  : 'border-surface text-text-muted hover:border-text-muted'}`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-text-primary font-body text-base">
          Hold a plain white piece of paper up to your face. How does your complexion look next to it?
        </p>
        <div className="flex flex-col gap-2">
          {whiteOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => handleWhiteSelect(option.value)}
              className={`px-4 py-3 rounded-xl text-sm text-left transition-all border
                ${selectedWhite === option.value
                  ? 'border-accent text-accent bg-surface'
                  : 'border-surface text-text-muted hover:border-text-muted'}`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

    </div>
  )
}

export default UndertoneQuiz;