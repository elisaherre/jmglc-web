"use client";

import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { language, handleLanguageChange } = useLanguage();

  return (
    <footer className='footer'>
      <section className="footer-content">
        <div className='hidden md:block md:col-span-5'></div>
        <div className='col-span-1'>
          <h3 className="titles pl-5 md:pl-0">Language</h3>
        </div>
        <div className='col-span-3 md:col-span-6'>
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
