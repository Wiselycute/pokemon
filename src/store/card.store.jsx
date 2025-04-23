import { create } from 'zustand'


export const useStoreCard = create((set) => ({
    selectedCardIds: [],
    toggleCardIcon:(id) =>{
        set((state) => {
            const isAlreadySelected = state.selectedCardIds.includes(id);
            return {
              ...state,
              selectedCardIds: isAlreadySelected
                ? state.selectedCardIds.filter((item) => item !== id) // Remove if exists
                : [...state.selectedCardIds, id], // Add if not exists
            };
          });
    },
    clearAll: () => set({selectedCardIds: []}),
}))