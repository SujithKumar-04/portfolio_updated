import { useEffect, useState } from 'react';
import fallback from '../data/fallback';
import { fetchPortfolio } from '../api';

// Shows the built-in content immediately, then swaps in live data from the API.
export default function usePortfolio() {
  const [data, setData] = useState(fallback);
  useEffect(() => {
    fetchPortfolio().then(setData).catch(() => {});
  }, []);
  return data;
}
