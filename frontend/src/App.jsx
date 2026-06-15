import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import MonkScaleSelector from './MonkShadeSelector';

function App() {
  const profile = localStorage.getItem('profile')
  return profile ? <HomePage /> : <Onboarding />
}

export default App
