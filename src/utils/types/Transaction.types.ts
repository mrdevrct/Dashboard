export type TransactionType = {
  id: number;
  customer: string;
  userImg: string;
  date: string;
  amount: number;
  status: string;
};

export type TransactionsType = TransactionType[];
