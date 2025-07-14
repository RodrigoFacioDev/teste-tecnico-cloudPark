import { Call, CallStatus } from "@/app/(tabs)/calls/types";
import { create } from "zustand";
import api from "./api";

interface CallsState {
  calls: Call[];
  loading: boolean;
  error: string | null;
  fetchCalls: () => Promise<void>;
  setCalls: (calls: Call[]) => void;
  addCall: (call: Omit<Call, "id">) => Promise<void>;
  updateCallStatus: (id: string, status: CallStatus) => Promise<void>;
}

export const useCallsStore = create<CallsState>((set, get) => ({
  calls: [],
  loading: false,
  error: null,
  setCalls: (calls) => set({ calls }),
  fetchCalls: async () => {
    set({ loading: true, error: null });
    try {
      const res = await api.get("/calls");
      set({ calls: res.data, loading: false });
    } catch (e: any) {
      set({ error: e.message || "Erro desconhecido", loading: false });
    }
  },
  addCall: async (call) => {
    set({ loading: true, error: null });
    try {
      const res = await api.post("/calls", call);
      set({ calls: [...get().calls, res.data], loading: false });
    } catch (e: any) {
      set({ error: e.message || "Erro ao cadastrar chamado", loading: false });
    }
  },
  updateCallStatus: async (id, status) => {
    set({ loading: true, error: null });
    try {
      await api.patch(`/calls/${id}`, { status });
      const updatedCalls = get().calls.map((call) =>
        call.id === id ? { ...call, status } : call
      );
      set({ calls: updatedCalls, loading: false });
    } catch (e: any) {
      set({ error: e.message || "Erro ao atualizar status", loading: false });
    }
  },
}));
