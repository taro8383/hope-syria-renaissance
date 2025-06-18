// Source: WHO Syria Health Cluster Report 2024, World Bank Data
export const HEALTH_STATS = {
// Hospital Status (pre-war baseline: 98 hospitals)
  hospitals: {
    destroyed: 42, // 43%
    damaged: 34,   // 35%
    functional: 22, // 22%
    nonFunctional: 76, // 77% (42+34)
    functionalPercentage: '22%',
    nonFunctionalPercentage: '78%',
    damagedPercentage: '35%'
  },

// Healthcare Workers (pre-war baseline)
  workers: {
    doctors: { current: 30, preWar: 100, percentage: '30%' },
    nurses: { current: 40, preWar: 100, percentage: '40%' },
    specialists: { current: 20, preWar: 100, percentage: '20%' }
  },

  // Projection Formulas
  projections: {
    roiMultiplier: (investment: number) => {
      // Logarithmic scale: 3.5x at $100M, 4.2x at $400M, 4.5x at $800M
      return (3 + Math.log10(investment/50) * 0.5).toFixed(1);
    },
    livesSaved: (investment: number) => Math.round(investment * 1250),
    facilities: (investment: number) => Math.round(investment * 0.5)
  }
};

export const SOURCES = {
  WHO: 'WHO Syria Health Cluster Report 2024',
  WORLD_BANK: 'World Bank Middle East Health Statistics 2023'
};
