// usePlanStore.ts
import { create } from 'zustand';

interface PlanState {
  selectedPlan: string;
  setSelectedPlan: (plan: string) => void;
}

const usePlanStore = create<PlanState>((set) => ({
  selectedPlan: '',
  setSelectedPlan: (plan) => set({ selectedPlan: plan }),
}));

export default usePlanStore;
