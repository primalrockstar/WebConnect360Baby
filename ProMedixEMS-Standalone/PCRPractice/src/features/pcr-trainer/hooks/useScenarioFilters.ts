import { useMemo, useState } from 'react';
import { ScenarioDetails, ScenarioDifficulty, ScenarioCategory } from '../types';

interface FilterState {
  category?: ScenarioCategory | 'all';
  difficulty?: ScenarioDifficulty | 'all';
  query: string;
}

export const useScenarioFilters = (scenarios: ScenarioDetails[]) => {
  const [filters, setFilters] = useState<FilterState>({ query: '', category: 'all', difficulty: 'all' });

  const filtered = useMemo(() => {
    return scenarios.filter((scenario) => {
      const matchesCategory = filters.category === 'all' || !filters.category ? true : scenario.category === filters.category;
      const matchesDifficulty = filters.difficulty === 'all' || !filters.difficulty ? true : scenario.difficulty === filters.difficulty;
      const matchesQuery = scenario.title.toLowerCase().includes(filters.query.toLowerCase()) ||
        scenario.chiefComplaint.toLowerCase().includes(filters.query.toLowerCase());
      return matchesCategory && matchesDifficulty && matchesQuery;
    });
  }, [scenarios, filters]);

  const setCategory = (category: FilterState['category']) => setFilters((prev) => ({ ...prev, category }));
  const setDifficulty = (difficulty: FilterState['difficulty']) => setFilters((prev) => ({ ...prev, difficulty }));
  const setQuery = (query: string) => setFilters((prev) => ({ ...prev, query }));

  const pickRandomScenario = () => {
    if (!filtered.length) return null;
    const idx = Math.floor(Math.random() * filtered.length);
    return filtered[idx];
  };

  return {
    filters,
    filtered,
    setCategory,
    setDifficulty,
    setQuery,
    pickRandomScenario,
  };
};
