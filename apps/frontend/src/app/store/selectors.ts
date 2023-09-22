export type Store = {
  data: {
    message: string
  }
}
export const dataSelector = (state: Store) => state.data.message;
