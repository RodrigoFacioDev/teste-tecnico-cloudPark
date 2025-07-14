export type CallStatus = "Aberto" | "Em andamento" | "Resolvido";

export interface Call {
  id: string;
  title: string;
  description: string;
  status: CallStatus;
  createdAt: string;
  category: string; // id da categoria
}
