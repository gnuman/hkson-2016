export const INITIAL_LOAD = 'INITIAL_LOAD';

export function setInitialData(initialData) {
  return {
    initialData,
    type: INITIAL_LOAD
  }
}