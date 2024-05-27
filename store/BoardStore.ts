import { getTodosGroupedByColumn } from "@/lib/getTodosGroupByColumn";
import { create } from "zustand";

//type def
interface BoardState {
  board: Board;
  getBoard: () => void;
}

export const useBoardStore = create<BoardState>((set) => ({
  board: {
    columns: new Map<TypedColumn, Column>(),
  },
  getBoard: async () => {
    const board = await getTodosGroupedByColumn();
    set({ board }); //set the global value
  },
}));
