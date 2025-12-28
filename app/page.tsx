'use client';

import React, { useState, useEffect } from 'react';
import { AlertCircle, CheckCircle, Code, Trophy, Lock, Zap, Brain, Target } from 'lucide-react';

// Simple localStorage wrapper for Next.js (replaces window.storage from artifact)
const storage = {
  async get(key: string) {
    if (typeof window === 'undefined') return null;
    const value = localStorage.getItem(key);
    return value ? { key, value, shared: false } : null;
  },
  async set(key: string, value: string) {
    if (typeof window === 'undefined') return null;
    localStorage.setItem(key, value);
    return { key, value, shared: false };
  }
};

const CHALLENGES = [
  {
    id: 'tsx-basics',
    title: 'TypeScript + JSX Fundamentals',
    difficulty: 'Beginner',
    concept: 'Type-safe component props',
    description: 'Create a Button component that accepts typed props and renders children',
    starterCode: `// Create a typed Button component
// Props: onClick (function), variant ('primary' | 'secondary'), children
// Render a <button> element with proper types

`,
    hints: [
      'Define an interface for your props with specific types',
      'Use React.FC or explicit return type',
      'Remember to type the onClick handler properly'
    ],
    solution: `interface ButtonProps {
  onClick: () => void;
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, variant, children }) => {
  return (
    <button 
      onClick={onClick}
      className={\`btn btn-\${variant}\`}
    >
      {children}
    </button>
  );
};`,
    unlocks: ['tailwind-styling', 'component-state']
  },
  {
    id: 'tailwind-styling',
    title: 'Tailwind v4 Dynamic Styling',
    difficulty: 'Beginner',
    concept: 'Conditional classes with Tailwind',
    description: 'Style the Button component with Tailwind utilities based on variant prop',
    starterCode: `interface ButtonProps {
  onClick: () => void;
  variant: 'primary' | 'secondary' | 'danger';
  children: React.ReactNode;
}

// Add Tailwind classes that change based on variant
// Primary: blue bg, white text, hover effect
// Secondary: gray bg, dark text, hover effect  
// Danger: red bg, white text, hover effect

const Button: React.FC<ButtonProps> = ({ onClick, variant, children }) => {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
};`,
    hints: [
      'Use template literals to conditionally apply classes',
      'Tailwind v4 uses arbitrary values differently than v3',
      'Consider hover states and transitions'
    ],
    solution: `const Button: React.FC<ButtonProps> = ({ onClick, variant, children }) => {
  const baseClasses = "px-4 py-2 rounded-lg font-semibold transition-all duration-200";
  
  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700"
  };
  
  return (
    <button 
      onClick={onClick}
      className={\`\${baseClasses} \${variantClasses[variant]}\`}
    >
      {children}
    </button>
  );
};`,
    unlocks: ['component-state', 'nextjs-routing'],
    requires: ['tsx-basics']
  },
  {
    id: 'component-state',
    title: 'State Management with TypeScript',
    difficulty: 'Intermediate',
    concept: 'Typed useState and event handlers',
    description: 'Create a Counter component with typed state and increment/decrement functions',
    starterCode: `// Create a Counter component
// State: count (number, starts at 0)
// Functions: increment, decrement, reset
// Display count and 3 buttons with proper TypeScript types

`,
    hints: [
      'useState can infer types, but explicit typing is better practice',
      'Event handlers should be typed as React.MouseEvent',
      'Consider extracting handler functions outside JSX'
    ],
    solution: `const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  
  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(0);
  
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="text-4xl font-bold">{count}</div>
      <div className="flex gap-2">
        <button onClick={decrement} className="px-4 py-2 bg-red-500 text-white rounded">-</button>
        <button onClick={reset} className="px-4 py-2 bg-gray-500 text-white rounded">Reset</button>
        <button onClick={increment} className="px-4 py-2 bg-green-500 text-white rounded">+</button>
      </div>
    </div>
  );
};`,
    unlocks: ['form-handling', 'nextjs-routing'],
    requires: ['tsx-basics']
  },
  {
    id: 'form-handling',
    title: 'Form Handling & Validation',
    difficulty: 'Intermediate',
    concept: 'Controlled inputs with TypeScript',
    description: 'Create a login form with email/password, validation, and typed submit handler',
    starterCode: `// Create a LoginForm component
// Fields: email (string), password (string)
// Validate: email must contain @, password min 8 chars
// Show validation errors below each field
// Type the form submit event properly

`,
    hints: [
      'Use controlled inputs with useState',
      'Type form events as React.FormEvent<HTMLFormElement>',
      'Create a separate validation function with explicit return type',
      'Store errors in state as Record<string, string>'
    ],
    solution: `interface FormData {
  email: string;
  password: string;
}

interface FormErrors {
  email?: string;
  password?: string;
}

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ email: '', password: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  
  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.email.includes('@')) newErrors.email = 'Invalid email';
    if (formData.password.length < 8) newErrors.password = 'Min 8 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', formData);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-sm">
      <div>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          className="w-full px-3 py-2 border rounded"
          placeholder="Email"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>
      <div>
        <input
          type="password"
          value={formData.password}
          onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
          className="w-full px-3 py-2 border rounded"
          placeholder="Password"
        />
        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
      </div>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Login</button>
    </form>
  );
};`,
    unlocks: ['data-fetching'],
    requires: ['component-state', 'tailwind-styling']
  },
  {
    id: 'nextjs-routing',
    title: 'Next.js 16 App Router Concepts',
    difficulty: 'Intermediate',
    concept: 'File-based routing understanding',
    description: 'Create a simulated navigation component that demonstrates Next.js routing patterns (without actual Next.js)',
    starterCode: `// Create a Nav component that simulates Next.js routing:
// - Track active route in state (starts at '/')
// - Render buttons for: Home (/), About (/about), Dashboard (/dashboard)
// - Style active route differently
// - Type everything properly

`,
    hints: [
      'Use useState to track currentRoute as a string',
      'Create a links array with href and label properties',
      'Use onClick to update the current route',
      'Apply conditional Tailwind classes based on currentRoute'
    ],
    solution: `interface NavLink {
  href: string;
  label: string;
}

const Nav: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<string>('/');
  
  const links: NavLink[] = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/dashboard', label: 'Dashboard' }
  ];
  
  return (
    <nav className="flex gap-4 p-4 bg-gray-100">
      {links.map(link => (
        <button
          key={link.href}
          onClick={() => setCurrentRoute(link.href)}
          className={\`px-4 py-2 rounded \${
            currentRoute === link.href 
              ? 'bg-blue-600 text-white' 
              : 'bg-white text-gray-900 hover:bg-gray-200'
          }\`}
        >
          {link.label}
        </button>
      ))}
    </nav>
  );
};`,
    unlocks: ['data-fetching'],
    requires: ['tailwind-styling']
  },
  {
    id: 'data-fetching',
    title: 'Async Data with TypeScript',
    difficulty: 'Advanced',
    concept: 'Fetch API with proper typing',
    description: 'Create a component that fetches and displays user data with loading/error states',
    starterCode: `// Fetch users from: https://jsonplaceholder.typicode.com/users
// Create proper TypeScript interfaces for User data
// Handle loading, error, and success states
// Display users in a card grid with Tailwind

`,
    hints: [
      'Define a User interface matching the API response',
      'Use useState for data, loading, and error states',
      'Use useEffect for the fetch call',
      'Type the error as Error | null',
      'Handle async/await with try-catch'
    ],
    solution: `interface User {
  id: number;
  name: string;
  email: string;
  username: string;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!res.ok) throw new Error('Failed to fetch');
        const data: User[] = await res.json();
        setUsers(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchUsers();
  }, []);
  
  if (loading) return <div className="text-center p-8">Loading...</div>;
  if (error) return <div className="text-red-500 p-8">Error: {error.message}</div>;
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {users.map(user => (
        <div key={user.id} className="border rounded-lg p-4 hover:shadow-lg transition">
          <h3 className="font-bold text-lg">{user.name}</h3>
          <p className="text-gray-600">@{user.username}</p>
          <p className="text-sm text-gray-500">{user.email}</p>
        </div>
      ))}
    </div>
  );
};`,
    unlocks: ['advanced-patterns'],
    requires: ['form-handling', 'nextjs-routing']
  },
  {
    id: 'advanced-patterns',
    title: 'Custom Hooks & Composition',
    difficulty: 'Advanced',
    concept: 'Reusable logic with TypeScript',
    description: 'Create a useLocalStorage hook with full TypeScript support',
    starterCode: `// Create useLocalStorage<T> hook that:
// - Accepts key (string) and initialValue (T)
// - Returns [value, setValue] like useState
// - Persists to localStorage
// - Handles JSON parse/stringify
// - Properly types the generic

`,
    hints: [
      'Use generic type parameter <T>',
      'Initialize from localStorage in useState initializer',
      'Create a setValue wrapper that updates both state and localStorage',
      'Handle JSON serialization errors',
      'Type the return value as [T, (value: T) => void]'
    ],
    solution: `function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });
  
  const setValue = (value: T) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };
  
  return [storedValue, setValue];
}

// Usage:
const [user, setUser] = useLocalStorage<{ name: string; email: string }>('user', { name: '', email: '' });`,
    unlocks: [],
    requires: ['data-fetching']
  }
];

export default function Home() {
  const [currentChallenge, setCurrentChallenge] = useState(CHALLENGES[0]);
  const [userCode, setUserCode] = useState(currentChallenge.starterCode);
  const [feedback, setFeedback] = useState('');
  const [loading, setLoading] = useState(false);
  const [showHints, setShowHints] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [completedChallenges, setCompletedChallenges] = useState<Set<string>>(new Set());
  const [currentHintIndex, setCurrentHintIndex] = useState(0);

  useEffect(() => {
    const loadProgress = async () => {
      try {
        const result = await storage.get('nextjs-mastery-completed');
        if (result) {
          setCompletedChallenges(new Set(JSON.parse(result.value)));
        }
      } catch (e) {
        // No saved progress yet
      }
    };
    loadProgress();
  }, []);

  useEffect(() => {
    setUserCode(currentChallenge.starterCode);
    setFeedback('');
    setShowHints(false);
    setShowSolution(false);
    setCurrentHintIndex(0);
  }, [currentChallenge]);

  const saveProgress = async (challengeId: string) => {
    const updated = new Set(completedChallenges);
    updated.add(challengeId);
    setCompletedChallenges(updated);
    await storage.set('nextjs-mastery-completed', JSON.stringify([...updated]));
  };

  const validateCode = async () => {
    setLoading(true);
    setFeedback('');

    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          messages: [{
            role: 'user',
            content: `You are a tough but fair coding instructor. A student is learning ${currentChallenge.concept}.

CHALLENGE: ${currentChallenge.description}

THEIR CODE:
\`\`\`typescript
${userCode}
\`\`\`

EXPECTED SOLUTION (for reference only):
\`\`\`typescript
${currentChallenge.solution}
\`\`\`

Evaluate their code:
1. Does it demonstrate understanding of the core concept?
2. Is the TypeScript typing correct?
3. Would it actually work?
4. What's missing or wrong?

Be direct. If it's wrong, explain why. If it's right but could be better, say so. If they nailed it, celebrate that.
Don't just compare to the solution - evaluate if they understood the CONCEPT.

Keep response under 150 words. Format as: [PASS/FAIL/PARTIAL] then explanation.`
          }]
        })
      });

      const data = await response.json();
      const result = data.content.find((c: any) => c.type === 'text')?.text || 'No feedback generated';
      
      setFeedback(result);

      if (result.startsWith('[PASS]')) {
        await saveProgress(currentChallenge.id);
      }
    } catch (error) {
      setFeedback('Error validating code. Check your syntax and try again.');
    } finally {
      setLoading(false);
    }
  };

  const getNextHint = () => {
    if (currentHintIndex < currentChallenge.hints.length) {
      setCurrentHintIndex(prev => prev + 1);
      setShowHints(true);
    }
  };

  const isChallengeUnlocked = (challenge: typeof CHALLENGES[0]) => {
    if (!challenge.requires || challenge.requires.length === 0) return true;
    return challenge.requires.every(req => completedChallenges.has(req));
  };

  const availableChallenges = CHALLENGES.filter(isChallengeUnlocked);
  const lockedChallenges = CHALLENGES.filter(c => !isChallengeUnlocked(c));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Zap className="w-8 h-8 text-yellow-400" />
              <h1 className="text-4xl font-bold">Next.js Mastery Lab</h1>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
              <Trophy className="w-5 h-5 text-yellow-400" />
              <span className="font-semibold">{completedChallenges.size} / {CHALLENGES.length}</span>
            </div>
          </div>
          <p className="text-blue-200">Progressive challenges that force understanding, not memorization</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Challenge Selector */}
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-white/5 backdrop-blur rounded-lg p-4">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Target className="w-5 h-5" />
                Challenges
              </h2>
              <div className="space-y-2">
                {availableChallenges.map(challenge => (
                  <button
                    key={challenge.id}
                    onClick={() => setCurrentChallenge(challenge)}
                    className={`w-full text-left p-3 rounded-lg transition-all ${
                      currentChallenge.id === challenge.id
                        ? 'bg-blue-600 shadow-lg'
                        : 'bg-white/10 hover:bg-white/20'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="font-semibold text-sm">{challenge.title}</div>
                        <div className="text-xs text-blue-200 mt-1">{challenge.difficulty}</div>
                      </div>
                      {completedChallenges.has(challenge.id) && (
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      )}
                    </div>
                  </button>
                ))}
                {lockedChallenges.length > 0 && (
                  <>
                    <div className="text-xs text-gray-400 mt-4 mb-2">Locked</div>
                    {lockedChallenges.map(challenge => (
                      <div
                        key={challenge.id}
                        className="w-full text-left p-3 rounded-lg bg-white/5 opacity-50"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="font-semibold text-sm">{challenge.title}</div>
                            <div className="text-xs text-gray-400 mt-1">{challenge.difficulty}</div>
                          </div>
                          <Lock className="w-5 h-5 text-gray-500 flex-shrink-0" />
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Main Challenge Area */}
          <div className="lg:col-span-3 space-y-6">
            {/* Challenge Description */}
            <div className="bg-white/5 backdrop-blur rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{currentChallenge.title}</h2>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-blue-500/30 rounded-full text-sm">{currentChallenge.difficulty}</span>
                    <span className="px-3 py-1 bg-purple-500/30 rounded-full text-sm flex items-center gap-1">
                      <Brain className="w-4 h-4" />
                      {currentChallenge.concept}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-blue-100">{currentChallenge.description}</p>
            </div>

            {/* Code Editor */}
            <div className="bg-white/5 backdrop-blur rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Code className="w-5 h-5" />
                  Your Solution
                </h3>
                <div className="flex gap-2">
                  <button
                    onClick={getNextHint}
                    disabled={currentHintIndex >= currentChallenge.hints.length}
                    className="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 disabled:bg-gray-600 disabled:cursor-not-allowed rounded-lg text-sm font-semibold transition"
                  >
                    Hint ({currentHintIndex}/{currentChallenge.hints.length})
                  </button>
                  <button
                    onClick={() => setShowSolution(!showSolution)}
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-sm font-semibold transition"
                  >
                    {showSolution ? 'Hide' : 'Show'} Solution
                  </button>
                </div>
              </div>
              
              <textarea
                value={userCode}
                onChange={(e) => setUserCode(e.target.value)}
                className="w-full h-96 bg-slate-950 text-green-400 font-mono text-sm p-4 rounded-lg border border-white/10 focus:border-blue-500 focus:outline-none resize-none"
                spellCheck={false}
              />

              <button
                onClick={validateCode}
                disabled={loading}
                className="mt-4 w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 rounded-lg font-bold text-lg transition"
              >
                {loading ? 'Validating...' : 'Submit Solution'}
              </button>
            </div>

            {/* Hints */}
            {showHints && currentHintIndex > 0 && (
              <div className="bg-yellow-900/20 border border-yellow-600/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-yellow-400">Hints</h3>
                <div className="space-y-2">
                  {currentChallenge.hints.slice(0, currentHintIndex).map((hint, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-yellow-400 font-bold">{idx + 1}.</span>
                      <p className="text-yellow-100">{hint}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Solution */}
            {showSolution && (
              <div className="bg-red-900/20 border border-red-600/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-red-400">Reference Solution</h3>
                <pre className="bg-slate-950 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{currentChallenge.solution}</code>
                </pre>
              </div>
            )}

            {/* Feedback */}
            {feedback && (
              <div className={`border rounded-lg p-6 ${
                feedback.startsWith('[PASS]')
                  ? 'bg-green-900/20 border-green-600/30'
                  : feedback.startsWith('[FAIL]')
                  ? 'bg-red-900/20 border-red-600/30'
                  : 'bg-blue-900/20 border-blue-600/30'
              }`}>
                <div className="flex items-start gap-3">
                  {feedback.startsWith('[PASS]') ? (
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  ) : (
                    <AlertCircle className={`w-6 h-6 flex-shrink-0 mt-1 ${
                      feedback.startsWith('[FAIL]') ? 'text-red-400' : 'text-blue-400'
                    }`} />
                  )}
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      {feedback.startsWith('[PASS]')
                        ? 'Challenge Complete!'
                        : feedback.startsWith('[FAIL]')
                        ? 'Not Quite There'
                        : 'Partial Solution'}
                    </h3>
                    <p className="text-gray-100 whitespace-pre-wrap">{feedback.replace(/^\[(PASS|FAIL|PARTIAL)\]\s*/, '')}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
