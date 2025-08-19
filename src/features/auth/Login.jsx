import React from 'react';
import { useTranslation } from 'react-i18next';
import useDarkMode from '../../hooks/useDarkMode'; 

function Login() {
  const [isDark, toggleDark] = useDarkMode();
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center gap-4 
      ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
      
      <h1 className="text-3xl font-bold">{i18n.t('welcome')}</h1>

      <button 
        onClick={toggleDark} 
        className="px-4 py-2 border rounded"
      >
        {isDark ? 'Light Mode' : 'Dark Mode'}
      </button>

      <div className="flex gap-2">
        <button onClick={() => changeLanguage('en')} className="px-2 py-1 border rounded">
          EN
        </button>
        <button onClick={() => changeLanguage('fr')} className="px-2 py-1 border rounded">
          FR
        </button>
      </div>
    </div>
  );
}

export default Login;
