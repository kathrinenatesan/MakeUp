import { useState } from 'react'
import { motion } from 'framer-motion'
import App from './App.jsx'

function HomePage() {
  const profile = JSON.parse(localStorage.getItem('profile'));
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState(null);

  const handleSearch = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:8000/scrape-product', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url, profile })
      });
      const data = await response.json();
      setRecommendation(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
        >
        <h1 className="font-display text-4xl text-text-primary mb-2">
          does this align with your makeup?
        </h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="w-full max-w-lg flex flex-col gap-3"
    >
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="paste a Sephora product link here"
          className="w-full bg-surface border border-surface text-text-primary 
            placeholder-text-muted rounded-xl px-4 py-3 text-sm 
            focus:outline-none focus:border-accent transition-colors"
        />
        <button onClick={handleSearch}>Analyze</button>
        </motion.div>
    </div>
  )

}

export default HomePage