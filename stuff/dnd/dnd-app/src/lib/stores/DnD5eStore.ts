import {writable} from 'svelte/store';
import type {DnDClass} from "$lib/DnDClassSchema";

type DndClassStore = {
  classes: DnDClass[];
  loading: boolean;
  error: string | null;
}

const createDnd5eSrdStore = () => {
  const {subscribe, set, update} = writable<DndClassStore>({
    classes: [],
    loading: false,
    error: null
  });

  const fetchClasses = async () => {
    update(state => ({...state, loading: true, error: null}));

    try {
      const response = await fetch(`/data/5e-SRD-Classes.json`);
      const data = await response.json();

      update(state => ({
        ...state,
        classes: data,
        loading: false
      }));
    } catch (error) {
      update(state => ({
        ...state,
        loading: false,
        error: 'Failed to load D&D 5e SRD classes'
      }));
    }
  };

  return {
    subscribe,
    fetchClasses
  };
}

export const dndSRDStore = createDnd5eSrdStore();
