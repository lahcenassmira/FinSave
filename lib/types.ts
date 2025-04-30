// User types
export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
}

// Transaction types
export interface Transaction {
  id: string;
  userId: string;
  amount: number;
  description: string;
  category: Category;
  date: Date;
  roundUpAmount?: number;
}

// Savings types
export interface Savings {
  id: string;
  userId: string;
  amount: number;
  source: 'roundUp' | 'manual';
  date: Date;
  transactionId?: string;
}

// Dashboard stats
export interface DashboardStats {
  totalSaved: number;
  recentTransactions: Transaction[];
  spendingByCategory: CategorySpending[];
  savingsTips: SavingsTip[];
}

// Category types
export type Category = 
  | 'food' 
  | 'shopping' 
  | 'transportation' 
  | 'entertainment' 
  | 'utilities' 
  | 'housing' 
  | 'health' 
  | 'education' 
  | 'other';

export interface CategorySpending {
  category: Category;
  amount: number;
  percentage: number;
}

// Saving tips
export interface SavingsTip {
  id: string;
  title: string;
  description: string;
  potential_savings: number;
}

// Chart data types
export interface ChartData {
  name: string;
  value: number;
}