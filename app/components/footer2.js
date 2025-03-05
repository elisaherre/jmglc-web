"use client";

import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { language, handleLanguageChange } = useLanguage();

  return (
    <footer className='footer'>
      <section className="footer-content">

        <div className='hidden md:block md:col-span-1'></div>
        <div className='col-span-1'>
          <h3 className="titles pl-5 md:pl-0">Previous Project</h3>
        </div>
        <div className='col-span-3 md:col-span-2'>
          <p>Rey Yupanqui</p>
        </div>

        <div className='md:hidden col-span-1'>
          <h3 className="titles pl-5 md:pl-0">Next Project</h3>
        </div>
        <div className='md:hidden col-span-3 md:col-span-2'>
          <p>Palmarosa</p>
        </div>

        <div className='hidden md:block md:col-span-1'></div>

        <div className='col-span-1 pt-4 md:pt-0'>
          <h3 className="titles pl-5 md:pl-0">Language</h3>
        </div>
        <div className='col-span-3 md:col-span-1'>
          <div className='flex pt-4 md:pt-0'>
            <button onClick={() => handleLanguageChange('es')} className={language === 'es' ? 'underline' : ''}>
              español
            </button>
            <p className='px-1'>/</p>
            <button onClick={() => handleLanguageChange('en')} className={language === 'en' ? 'underline' : ''}>
              english
            </button>
          </div>
        </div>

        <div classNae='hidden md:block md:col-span-1'></div>

        <div className='hidden md:block md:col-span-1'></div>
        <div className='hidden md:block col-span-1'>
          <h3 className="titles pl-5 md:pl-0">Next Project</h3>
        </div>
        <div className='hidden md:block col-span-2 md:col-span-1'>
          <p>Proyecto</p>
        </div>

      </section>
    </footer>
  );
}
