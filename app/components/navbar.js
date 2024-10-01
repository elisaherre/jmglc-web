"use client";

import { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const { language } = useLanguage();
  const pathname = usePathname();

  const images = {
    'rey-yupanqui': '/images/rey-yupanqui.png',
    'estudio-iv': '/images/estudio-iv.png',
    'palmarosa': '/images/palmarosa.png',
    'casa-rosales': '/images/casa-rosales.jpg',
  };

  return (
    <>
      { pathname === '/' && (
      <nav className="navbar">
        <div className='grid grid-cols-5 auto-rows gap-4'>
          <div className='col-span-1'></div>
          <div className='col-span-1'>
            <h3>Index</h3>
          </div>
            <div className='w-full'>
              <ul className="project-list">
                <li
                  onMouseEnter={() => setHoveredItem('rey-yupanqui')}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <a href="/rey-yupanqui" id='rey-yupanqui'>Rey Yupanqui</a>
                </li>
                <li
                  onMouseEnter={() => setHoveredItem('estudio-iv')}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <a href="#">Estudio IV</a>
                </li>
                <li
                  onMouseEnter={() => setHoveredItem('palmarosa')}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <a href="#">Palmarosa</a>
                </li>
                {language === 'es' && (
                <li
                  onMouseEnter={() => setHoveredItem('casa-rosales')}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <a href="#">Casa Rosales</a>
                </li>
                )}
                {language === 'en' && (
                <li
                  onMouseEnter={() => setHoveredItem('casa-rosales')}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <a href="#">Rosales House</a>
                </li>
                )}
              </ul>
              <div className='image-container fixed bottom-8 w-1/3 h-80'>
                {hoveredItem && (
                  <Image
                    src={images[hoveredItem]}
                    alt={hoveredItem.replace('-', ' ')}
                    className={`project-img ${hoveredItem ? 'show' : ''}`}
                    width={400}
                    height={300}
                    quality={100}
                    unoptimized={true}
                  />
                )}
              </div>
            </div>
        </div>
      </nav>
      )}
      <nav className="navbar-mobile">
        <p className='flex justify-center'>José María Gómez de León</p>
        { pathname === '/' && (
        <div className='flex gap-8 ml-10 mt-10'>
          <div className="w-10">
            <h3 className='titles'>Index</h3>
          </div>
          <div className='w-full'>
            <ul className="project-list">
                <li>
                  <a href="/rey-yupanqui" id='rey-yupanqui'>Rey Yupanqui</a>
                </li>
                <li>
                  <a href="#">Estudio IV</a>
                </li>
                <li>
                  <a href="#">Palmarosa</a>
                </li>
                {language === 'es' && (
                <li>
                  <a href="#">Casa Rosales</a>
                </li>
                )}
                {language === 'en' && (
                <li>
                  <a href="#">Rosales House</a>
                </li>
                )}
              </ul>
          </div>
        </div>
        )}
      </nav>
    </>
  );
}
