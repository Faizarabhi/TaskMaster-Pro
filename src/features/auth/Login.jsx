import React from 'react';
import useDarkMode from '../../hooks/useDarkMode'; 

function Login() {
  const [isDark, toggleDark] = useDarkMode();

  return (
    <div className="min-h-screen bg-primary text-textPrimary flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">Bienvenue</h1>
      <button
        onClick={toggleDark}
        className="px-4 py-2 rounded bg-gray-300 dark:bg-gray-700 text-black dark:text-white"
      >
        {isDark ? 'Passer en mode clair' : 'Passer en mode sombre'}
      </button>
    </div>
  );
}

export default Login;
