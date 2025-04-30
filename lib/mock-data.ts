import { Transaction, Savings, Category, SavingsTip, CategorySpending } from './types';

// Helper to generate a random ID
const generateId = (): string => Math.random().toString(36).substring(2, 15);

// Helper to get a random date within the last 30 days
const getRandomRecentDate = (): Date => {
  const date = new Date();
  date.setDate(date.getDate() - Math.floor(Math.random() * 30));
  return date;
};

// Helper to calculate round up amount
const calculateRoundUp = (amount: number): number => {
  const nextDollar = Math.ceil(amount);
  return parseFloat((nextDollar - amount).toFixed(2));
};

// Categories with their emoji representation
export const categoryEmojis: Record<Category, string> = {
  food: '🍔',
  shopping: '🛍️',
  transportation: '🚗',
  entertainment: '🎬',
  utilities: '💡',
  housing: '🏠',
  health: '🏥',
  education: '📚',
  other: '📦'
};

// Mock transactions
export const mockTransactions: Transaction[] = [
  {
    id: generateId(),
    userId: 'user123',
    amount: 12.50,
    description: 'Lunch at Chipotle',
    category: 'food',
    date: getRandomRecentDate(),
    roundUpAmount: calculateRoundUp(12.50)
  },
  {
    id: generateId(),
    userId: 'user123',
    amount: 35.20,
    description: 'Uber ride',
    category: 'transportation',
    date: getRandomRecentDate(),
    roundUpAmount: calculateRoundUp(35.20)
  },
  {
    id: generateId(),
    userId: 'user123',
    amount: 8.99,
    description: 'Netflix subscription',
    category: 'entertainment',
    date: getRandomRecentDate(),
    roundUpAmount: calculateRoundUp(8.99)
  },
  {
    id: generateId(),
    userId: 'user123',
    amount: 42.75,
    description: 'Groceries at Whole Foods',
    category: 'food',
    date: getRandomRecentDate(),
    roundUpAmount: calculateRoundUp(42.75)
  },
  {
    id: generateId(),
    userId: 'user123',
    amount: 15.00,
    description: 'Movie tickets',
    category: 'entertainment',
    date: getRandomRecentDate(),
    roundUpAmount: calculateRoundUp(15.00)
  },
  {
    id: generateId(),
    userId: 'user123',
    amount: 65.32,
    description: 'New clothes at H&M',
    category: 'shopping',
    date: getRandomRecentDate(),
    roundUpAmount: calculateRoundUp(65.32)
  },
  {
    id: generateId(),
    userId: 'user123',
    amount: 120.00,
    description: 'Electricity bill',
    category: 'utilities',
    date: getRandomRecentDate(),
    roundUpAmount: calculateRoundUp(120.00)
  },
  {
    id: generateId(),
    userId: 'user123',
    amount: 10.25,
    description: 'Coffee and pastry',
    category: 'food',
    date: getRandomRecentDate(),
    roundUpAmount: calculateRoundUp(10.25)
  },
  {
    id: generateId(),
    userId: 'user123',
    amount: 5.99,
    description: 'Apple Music',
    category: 'entertainment',
    date: getRandomRecentDate(),
    roundUpAmount: calculateRoundUp(5.99)
  },
  {
    id: generateId(),
    userId: 'user123',
    amount: 25.50,
    description: 'Gas station',
    category: 'transportation',
    date: getRandomRecentDate(),
    roundUpAmount: calculateRoundUp(25.50)
  },
];

// Mock savings
export const mockSavings: Savings[] = mockTransactions.map(transaction => ({
  id: generateId(),
  userId: 'user123',
  amount: transaction.roundUpAmount || 0,
  source: 'roundUp',
  date: transaction.date,
  transactionId: transaction.id
}));

// Calculate total savings
export const getTotalSavings = (): number => {
  return parseFloat(mockSavings.reduce((sum, saving) => sum + saving.amount, 0).toFixed(2));
};

// Calculate spending by category
export const getSpendingByCategory = (): CategorySpending[] => {
  const categoryTotals: Record<Category, number> = {
    food: 0,
    shopping: 0,
    transportation: 0,
    entertainment: 0,
    utilities: 0,
    housing: 0,
    health: 0,
    education: 0,
    other: 0
  };

  // Sum up amounts by category
  mockTransactions.forEach(transaction => {
    categoryTotals[transaction.category] += transaction.amount;
  });

  // Calculate total spending
  const totalSpending = Object.values(categoryTotals).reduce((sum, amount) => sum + amount, 0);

  // Create category spending objects with percentages
  return Object.entries(categoryTotals)
    .filter(([_, amount]) => amount > 0) // Only include categories with spending
    .map(([category, amount]) => ({
      category: category as Category,
      amount,
      percentage: parseFloat(((amount / totalSpending) * 100).toFixed(1))
    }))
    .sort((a, b) => b.amount - a.amount); // Sort by amount descending
};

// Mock savings tips
export const mockSavingsTips: SavingsTip[] = [
  {
    id: generateId(),
    title: 'Reduce Food Delivery',
    description: 'Cook at home more often instead of ordering delivery. Save up to $50 per week!',
    potential_savings: 200
  },
  {
    id: generateId(),
    title: 'Coffee Budget',
    description: 'Make coffee at home instead of buying it daily. This could save you $100 monthly.',
    potential_savings: 100
  },
  {
    id: generateId(),
    title: 'Entertainment Subscriptions',
    description: 'Review your subscriptions and cancel unused ones. The average person saves $30/month.',
    potential_savings: 30
  },
  {
    id: generateId(),
    title: 'Public Transportation',
    description: 'Use public transportation once a week instead of ride-sharing services.',
    potential_savings: 80
  },
  {
    id: generateId(),
    title: 'Meal Planning',
    description: 'Plan your meals and grocery shopping to reduce food waste and impulse buying.',
    potential_savings: 150
  }
];

// Get random savings tips
export const getRandomSavingsTips = (count: number = 3): SavingsTip[] => {
  const shuffled = [...mockSavingsTips].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};