"use client";

import { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const { language } = useLanguage();
  const pathname = usePathname();
  const base = process.env.NEXT_PUBLIC_BASE_PATH || '';

  const images = {
    'rey-yupanqui': `${base}/images/covers/01_Rey_Yupanqui.webp`,
    'estudio': `${base}/images/covers/02_Estudio.webp`,
    'palmarosa': `${base}/images/covers/03_Palmarosa.webp`,
    'casa-rosales': `${base}/images/covers/04_Casa_Rosales.webp`,
    'casa-rio': `${base}/images/covers/05_Casa_Rio.webp`,
    'ciudad-deportiva': `${base}/images/covers/06_Ciudad_Deportiva.webp`,
    'paisaje-tiempo-ciudad': `${base}/images/covers/07_Paisaje_Ciudad.webp`,
    'tu-y-yo': `${base}/images/covers/08_Tu_Y_Yo.webp`,
  };

  return (
    <>
      { pathname === '/' && (
      <nav className="navbar">
        <div className='grid grid-cols-5 auto-rows gap-4'>
          <div className='col-span-1'></div>
          <div className='col-span-1'>
            {language === 'en' && (
              <h3>Index</h3>
            )}
            {language === 'es' && (
              <h3>Índice</h3>
            )}
          </div>
          <div className='col-span-3'>
            <ul className="project-list">
              <li
                onMouseEnter={() => setHoveredItem('rey-yupanqui')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <a href={`${base}/rey-yupanqui`} id='rey-yupanqui'>Rey Yupanqui</a>
              </li>

              <li
                onMouseEnter={() => setHoveredItem('estudio')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <a href={`${base}/estudio-iv`}>Estudio IV</a>
              </li>

              <li
                onMouseEnter={() => setHoveredItem('palmarosa')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <a href={`${base}/palmarosa`}>Palmarosa</a>
              </li>

              {language === 'es' && (
              <li
                onMouseEnter={() => setHoveredItem('casa-rosales')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <a href={`${base}/casa-rosales`}>Casa Rosales</a>
              </li>
              )}
              {language === 'en' && (
              <li
                onMouseEnter={() => setHoveredItem('casa-rosales')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <a href={`${base}/casa-rosales`}>Rosales House</a>
              </li>
              )}

              {language === 'es' && (
              <li
                onMouseEnter={() => setHoveredItem('casa-rio')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <a href={`${base}/casa-rio`}>Casa Río</a>
              </li>
              )}
              {language === 'en' && (
              <li
                onMouseEnter={() => setHoveredItem('casa-rio')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <a href={`${base}/casa-rio`}>Río House</a>
              </li>
              )}

              {language === 'es' && (
              <li
                onMouseEnter={() => setHoveredItem('ciudad-deportiva')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <a href={`${base}/ciudad-deportiva`}>Ciudad Deportiva</a>
              </li>
              )}
              {language === 'en' && (
              <li
                onMouseEnter={() => setHoveredItem('ciudad-deportiva')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <a href={`${base}/ciudad-deportiva`}>Sports City</a>
              </li>
              )}

              {language === 'es' && (
              <li
                onMouseEnter={() => setHoveredItem('paisaje-tiempo-ciudad')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <a href={`${base}/paisaje-tiempo-ciudad`}>Pasaje-tiempo-ciudad</a>
              </li>
              )}
              {language === 'en' && (
              <li
                onMouseEnter={() => setHoveredItem('paisaje-tiempo-ciudad')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <a href={`${base}/paisaje-tiempo-ciudad`}>Landscape-Time-City</a>
              </li>
              )}

              {language === 'es' && (
              <li
                onMouseEnter={() => setHoveredItem('tu-y-yo')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <a href={`${base}/tu-y-yo`}>&quot;tú&quot; y &quot;yo&quot;, &quot;tú y yo&quot;</a>
              </li>
              )}
              {language === 'en' && (
              <li
                onMouseEnter={() => setHoveredItem('tu-y-yo')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <a href={`${base}/tu-y-yo`}>&quot;you&quot; and &quot;me&quot;, &quot;me and you&quot;</a>
              </li>
              )}


            </ul>
            <div className='image-container'>
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
      <nav className="navbar-mobile h-fit">
        <div className='grid grid-cols-4 gap-x-1'>
          <div className="col-span-1"></div>
          <p className='col-span-3 flex justify-left pb-8'>José María Gómez de León Cantú</p>
        </div>
          { pathname === '/' && (
          <div className='grid grid-cols-4 gap-x-2.5'>
            <div className="col-span-1">
              <h3 className='titles pl-5'>Index</h3>
            </div>
            <div className='col-span-3 pb-8'>
              <ul className="project-list">
                  <li>
                    <a href={`${base}/rey-yupanqui`} id='rey-yupanqui'>Rey Yupanqui</a>
                  </li>
                  <li>
                    <a href={`${base}/estudio-iv`}>Estudio IV</a>
                  </li>
                  <li>
                    <a href={`${base}/palmarosa`}>Palmarosa</a>
                  </li>
                  {language === 'es' && (
                  <li>
                    <a href={`${base}/casa-rosales`}>Casa Rosales</a>
                  </li>
                  )}
                  {language === 'en' && (
                  <li>
                    <a href={`${base}/casa-rosales`}>Rosales House</a>
                  </li>
                  )}
                  {language === 'es' && (
                  <li>
                    <a href={`${base}/casa-rio`}>Casa Río</a>
                  </li>
                  )}
                  {language === 'en' && (
                  <li>
                    <a href={`${base}/casa-rio`}>Río House</a>
                  </li>
                  )}
                  {language === 'es' && (
                  <li>
                    <a href={`${base}/ciudad-deportiva`}>Ciudad Deportiva</a>
                  </li>
                  )}
                  {language === 'en' && (
                  <li>
                    <a href={`${base}/ciudad-deportiva`}>Sports City</a>
                  </li>
                  )}
                  {language === 'es' && (
                  <li>
                    <a href={`${base}/paisaje-tiempo-ciudad`}>Paisaje-tiempo-ciudad</a>
                  </li>
                  )}
                  {language === 'en' && (
                  <li>
                    <a href={`${base}/paisaje-tiempo-ciudad`}>Landscape-Time-City</a>
                  </li>
                  )}
                  {language === 'es' && (
                  <li>
                    <a href={`${base}/tu-y-yo`}>&quot;tú&quot; y &quot;yo&quot;, &quot;tú y yo&quot;</a>
                  </li>
                  )}
                  {language === 'en' && (
                  <li>
                    <a href={`${base}/tu-y-yo`}>&quot;you&quot; and &quot;me&quot;, &quot;me and you&quot;</a>
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
