"use client";

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const { language, handleLanguageChange } = useLanguage();
  const pathname = usePathname();

  const routes = [
    {
      nombre_ES: 'Rey Yupanqui',
      nombre_EN: 'Rey Yupanqui',
      route: '/rey-yupanqui'
    },
    {
      nombre_ES: 'Estudio IV',
      nombre_EN: 'Study IV',
      route: '/estudio-iv'
    },
    {
      nombre_ES: 'Palmarosa',
      nombre_EN: 'Palmarosa',
      route: '/palmarosa'
    },
    {
      nombre_ES: 'Casa Rosales',
      nombre_EN: 'Rosales House',
      route: '/casa-rosales'
    },
    {
      nombre_ES: 'Casa Rio',
      nombre_EN: 'Rio House',
      route: '/casa-rio'
    },
    {
      nombre_ES: 'Ciudad Deportiva',
      nombre_EN: 'Sports City',
      route: '/ciudad-deportiva'
    },
    {
      nombre_ES: 'Paisaje-Tiempo-Ciudad',
      nombre_EN: 'Landscape-Time-City',
      route: '/paisaje-tiempo-ciudad'
    },
    {
      nombre_ES: '"tú" y "yo", "tú y yo"',
      nombre_EN: '"you" and "me", "me and you"',
      route: '/tu-y-yo'
    }
  ];

  const normalizePath = (p) => {
    if (!p) return p;
    return p.length > 1 && p.endsWith('/') ? p.slice(0, -1) : p;
  };

  const normalizedPath = normalizePath(pathname);
  const currentIndex = routes.findIndex(route => {
    if (!normalizedPath) return -1;
    if (normalizedPath === route.route) return true;
    // handle possible prefixes (e.g. locale like /es)
    return normalizedPath.endsWith(route.route);
  });

  const previousProject = currentIndex > 0 ? routes[currentIndex - 1] : null;
  const nextProject = (currentIndex >= 0 && currentIndex < routes.length - 1) ? routes[currentIndex + 1] : null;

  return (
    <footer className='footer'>
      <section className="footer-content">

        { pathname === '/' && (
          <div className='hidden md:block md:col-span-4'></div>
        )}

        { pathname !== '/' && (
        <>
          <div className='hidden md:block md:col-span-1'></div>
          {previousProject ? (
            <>
              <div className='col-span-1'>
                {language === 'es' ? (
                  <h3 className="titles pl-5 md:pl-0 leading-tight md:leading-5">Proyecto Previo</h3>
                ) : (
                  <h3 className="titles pl-5 md:pl-0 leading-tight md:leading-5">Previous Project</h3>
                )}
              </div>
              <div className='col-span-3 md:col-span-2'>
                <Link href={previousProject.route} className='hover:underline'>
                  {language === 'es' ? previousProject.nombre_ES : previousProject.nombre_EN}
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className='hidden md:block md:col-span-3'></div>
            </>
          )
        }

          {nextProject && (
            <>
              {/* Mobile */}
              <div className='md:hidden col-span-1'>
                {language === 'es' ? (
                  <h3 className="titles-line-height pl-5 md:pl-0">Siguiente Proyecto</h3>
                ) : (
                  <h3 className="titles pl-5 md:pl-0">Next Project</h3>
                )}
              </div>
              <div className='md:hidden col-span-3 md:col-span-2'>
                <Link href={nextProject.route} className='hover:underline whitespace-nowrap'>
                  {language === 'es' ? nextProject.nombre_ES : nextProject.nombre_EN}
                </Link>
              </div>
            </>
          )}
        </>
        )}

        <div className='hidden md:block md:col-span-1'></div>

        { pathname === '/' && (
          <>
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
          </>
        )}

        <div className='hidden md:block md:col-span-1'></div>

        { pathname !== '/' && (
          <>
            {nextProject && (
              <>
                <div className='hidden md:block md:col-span-1'></div>
                {/* Web */}
                <div className='hidden md:block col-span-1'>
                  {language === 'es' ? (
                    <h3 className="titles pl-5 md:pl-0">Siguiente Proyecto</h3>
                  ) : (
                    <h3 className="titles pl-5 md:pl-0">Next Project</h3>
                  )}
                </div>
                <div className='hidden md:block col-span-2 md:col-span-1'>
                  <Link href={nextProject.route} className='hover:underline whitespace-nowrap'>
                    {language === 'es' ? nextProject.nombre_ES : nextProject.nombre_EN}
                  </Link>
                </div>
              </>
            )}
          </>
        )}

      </section>
    </footer>
  );
}
