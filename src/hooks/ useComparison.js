import { useState, useEffect } from 'react';

const MAX_COMPARE = 3;
const STORAGE_KEY = 'jobing_comparisons';

export function useComparison() {
  const [comparisons, setComparisons] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(comparisons));
  }, [comparisons]);

  const handleCompare = (job) => {
    if (comparisons.find((c) => c.id === job.id)) {
      return { error: 'Bu vakansiya artıq müqayisədədir!' };
    }
    if (comparisons.length >= MAX_COMPARE) {
      return { error: 'Maksimum 3 vakansiya seçə bilərsiniz!' };
    }
    setComparisons((prev) => [...prev, job]);
    return { success: true };
  };

  const handleRemove = (jobId) => {
    setComparisons((prev) => prev.filter((c) => c.id !== jobId));
  };

  const handleClear = () => {
    setComparisons([]);
  };

  return {
    comparisons,
    handleCompare,
    handleRemove,
    handleClear,
    MAX_COMPARE,
  };
}