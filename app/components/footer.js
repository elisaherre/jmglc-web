"use client";

import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { language, handleLanguageChange } = useLanguage();

  return (
    <footer className='footer'>
      <section className="footer-content">
      <div className="w-10">
        <h3 className="titles">Language</h3>
      </div>
        <div className="pr-28">
          <div className='flex'>
            <button onClick={() => handleLanguageChange('es')} className={language === 'es' ? 'underline' : ''}>
              español
            </button>
            <p className='px-1'>/</p>
            <button onClick={() => handleLanguageChange('en')} className={language === 'en' ? 'underline' : ''}>
              english
            </button>
          </div>
        </div>
      </section>
    </footer>
  );
}
