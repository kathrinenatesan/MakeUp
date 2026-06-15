import { useState } from 'react';
import MonkScaleSelector from './MonkShadeSelector';
import UndertoneQuiz from './UndertoneQuiz';
import OnboardingPage from './OnboardingPage';

function App() {
  const profile = localStorage.getItem('profile')
  return profile ? <HomePage /> : <OnboardingPage />
}

export default App;
