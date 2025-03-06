"use client";

import { useLanguage } from '../context/LanguageContext';
import Image from 'next/image';
import { useState } from 'react';

export default function CiudadDeportiva() {
  const { language } = useLanguage();

  return (
    <>
    {/* Info */}

        {/* Data */}

        <div className="project-info">

          <div className='grid grid-cols-4 md:grid-cols-5 auto-rows gap-4'>
            <div className='col-span-1 md:block hidden'></div>
            <div className="col-span-1 mb-5">
              <div>
              {language === 'es' && (
                <h3 className="titles fixed pl-5 md:pl-0">Proyecto</h3>
              )}
              {language === 'en' && (
                <h3 className="titles fixed pl-5 md:pl-0">Project</h3>
              )}
              </div>
            </div>
            <div className='col-span-3 mb-5'>
              {language === 'es' && (
                <p className='fixed'>Ciudad Deportiva</p>
              )}
              {language === 'en' && (
                <p className='fixed'>Sports City</p>
              )}
            </div>

            <div className='col-span-1 md:block hidden'></div>
            <div className="col-span-1 mb-5">
              <div>
              {language === 'es' && (
                <h3 className="titles fixed pl-5 md:pl-0">Fecha</h3>
              )}
              {language === 'en' && (
                <h3 className="titles fixed pl-5 md:pl-0">Date</h3>
              )}
              </div>
            </div>
            <div className='col-span-3 mb-5'>
              <p className='fixed'>2021</p>
            </div>

            <div className='col-span-1 md:block hidden'></div>
            <div className="col-span-1">
              <div>
              {language === 'es' && (
                <h3 className="titles pl-5 md:pl-0">Ubicación</h3>
              )}
              {language === 'en' && (
                <h3 className="titles pl-5 md:pl-0">Location</h3>
              )}
              </div>
            </div>
            <div className='col-span-3'>
              {language === 'es' && (
                <p>Ciudad de México</p>
              )}
              {language === 'en' && (
                <p>Mexico City</p>
              )}
            </div>

            <div className='col-span-1 md:block hidden'></div>
            <div className="col-span-1">
              <div>
              {language === 'es' && (
                <h3 className="titles pl-5 md:pl-0">Estatus</h3>
              )}
              {language === 'en' && (
                <h3 className="titles pl-5 md:pl-0">Status</h3>
              )}
              </div>
            </div>
            <div className='col-span-3'>
            {language === 'es' && (
              <p>Finalistas y mención honorífica en concurso organizado por Escuela Digital y SEDUVI</p>
            )}
            {language === 'en' && (
              <p>Finalists in the competition organised by Escuela Digital and SEDUVI</p>
            )}
            </div>

            <div className='col-span-1 md:block hidden'></div>
            <div className="col-span-1">
              <div>
              {language === 'es' && (
                <h3 className="titles pl-5 md:pl-0">Co-autoría</h3>
              )}
              {language === 'en' && (
                <h3 className="titles pl-5 md:pl-0">Co-authors</h3>
              )}
              </div>
            </div>
            <div className='col-span-3'>
              <p>Diego González, Jorge Ramos</p>
            </div>
          </div>

        </div>

        {/* Descripción */}

        <div className="col-span-4 md:col-span-7">
          <div className="grid grid-cols-4 md:grid-cols-7 auto-rows gap-2.5 md:gap-4 pb-10 pt-4 md:pt-0">
              <div className="col-span-1">
              {language === 'es' && (
                <h3 className="titles pl-5 md:pl-0">Texto</h3>
              )}
              {language === 'en' && (
                <h3 className="titles pl-5 md:pl-0">Text</h3>
              )}
              </div>
              {language === 'es' && (
              <div className="col-span-3 md:col-span-5">
                <p className="pb-2">
                  Convocatoria internacional que plantea la regeneración de la esquina sur del Palacio de los Deportes y el Autódromo HR junto con un hotel y edificio de usos mixtos. Como equipo decidimos abarcar un polígono de mayor influencia para la zona y la capital. El proyecto de regeneración urbana reúne una serie de intervenciones en el espacio público y privado con la finalidad de reconciliar la relación entre calles, centros de espectáculos y deportivos, locales comerciales y áreas de esparcimiento, con la finalidad de dar un nuevo significado a uno de los lugares más emblemáticos de la Ciudad de México. Con la creación de un túnel vehicular, el corredor contará con una gran plaza lineal en la superficie que conectará los distintos destinos al mismo nivel.
                </p>
                <p className="pb-2">
                  Al sur del corredor, el edificio de usos mixtos dará servicio tanto a usuarios cotidianos del corredor y de la zona, así como a visitantes ocasionales. Con la conservación de la estructura existente de una fábrica, silueta emblemática de la zona industrial a la que pertenece, se aprovechará tanto la ventilación como la iluminación natural, para generar una serie de patios interiores que articulen los módulos comerciales y culturales. A nivel peatonal se transparentan los límites del predio con un pórtico perimetral de doble altura, generando paseos interiores, vistas francas y espacios arbolados desde la calle hasta el centro del proyecto.
                </p>
              </div>
              )}
              {language === 'en' && (
              <div className="col-span-3 md:col-span-5">
                <p className="pb-2">
                  An international call for proposals for the regeneration of the south corner of the Palacio de los Deportes and the HR Racetrack along with a hotel and mixed-use building. As a team, we decided to cover a larger polygon area for greater influence in the zone and the capital. The urban regeneration project brings together a series of interventions in both public and private spaces to reconcile the relationship between streets, entertainment and sports centres, commercial premises, and recreational areas, to give new meaning to one of the most emblematic places in Mexico City. With the creation of a vehicular tunnel, the corridor will have a large linear plaza on the surface that will connect the various destinations at the same level.
                </p>
                <p className="pb-2">
                  To the south of the corridor, the mixed-use building will serve both regular users of the corridor and the area, as well as occasional visitors. By preserving the existing structure of a factory, an emblematic silhouette of the industrial area to which it belongs, both ventilation and natural lighting will be utilized to create a series of interior courtyards that articulate the commercial and cultural modules. At the pedestrian level, a double-height perimeter portico makes the site&apos;s boundaries transparent, generating interior promenades, unobstructed views, and tree-lined spaces from the street to the center of the project.
                </p>
              </div>
              )}
              <div className='col-span-1'></div>
          </div>
          <div className="grid grid-cols-4 md:grid-cols-7 auto-rows gap-2.5 md:gap-4">
              <div className="col-span-1 mb-5">
              {language === 'es' && (
                <h3 className="titles pl-5 md:pl-0">Imágenes</h3>
              )}
              {language === 'en' && (
                <h3 className="titles pl-5 md:pl-0">Images</h3>
              )}
              </div>
          </div>
        </div>

      <div className='close-btn'>
        <a href='/'>
          <Image
            src='/images/close.png'
            alt='Close'
            width={15}
            height={15}
            quality={100}
            unoptimized={true}
          />
        </a>
      </div>

      {/* Images */}

      <div className='col-span-4 md:col-span-12'>
              <div className='grid grid-cols-4 md:grid-cols-12 gap-y-16 gap-x-4 mx-10'>

              <div className='col-span-4 md:col-span-6'>
                <div className='template01-01'>
                  <Image
                    src='/images/ciudad-deportiva/01.webp'
                    alt='Ciudad Deportiva'
                    width={100}
                    height={100}
                    quality={100}
                    unoptimized={true}
                  />
                </div>
              </div>
              <div className='md:col-span-6 hidden md:block'></div>

              <div className='md:col-span-6 hidden md:block'></div>
              <div className='md:col-span-6 col-span-4'>
                <div className='template01-02'>
                  <Image
                    src='/images/ciudad-deportiva/02.webp'
                    alt='Ciudad Deportiva'
                    width={100}
                    height={100}
                    quality={100}
                    unoptimized={true}
                  />
                </div>
              </div>

              <div className='col-span-2 md:col-span-6'>
                <div className='template01-03'>
                  <Image
                    src='/images/ciudad-deportiva/03.webp'
                    alt='Ciudad Deportiva'
                    width={100}
                    height={100}
                    quality={100}
                    unoptimized={true}
                  />
                </div>
              </div>
              <div className='col-span-2 md:col-span-6'>
                <div className='template01-03'>
                  <Image
                        src='/images/ciudad-deportiva/04.webp'
                        alt='Ciudad Deportiva'
                        width={100}
                        height={100}
                        quality={100}
                        unoptimized={true}
                      />
                </div>
              </div>
              <div className='col-span-4 md:col-span-12 pb-10'>
                <div className='template01-04'>
                  <Image
                    src='/images/ciudad-deportiva/05.webp'
                    alt='Ciudad Deportiva'
                    width={100}
                    height={100}
                    quality={100}
                    unoptimized={true}
                  />
                </div>
              </div>

              </div>
            </div>

    </>
  )
}
