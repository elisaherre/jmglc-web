"use client";

import { useLanguage } from '../context/LanguageContext';
import Image from 'next/image';
import { useState } from 'react';

export default function Rey() {
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
              <p className='fixed'>Rey Yupanqui</p>
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
              <p className='fixed'>2024</p>
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
              <p>En desarrollo</p>
            )}
            {language === 'en' && (
              <p>In developement</p>
            )}
            </div>

            <div className='col-span-1 md:block hidden'></div>
            <div className="col-span-1">
              <div>
              {language === 'es' && (
                <h3 className="titles pl-5 md:pl-0">Equipo</h3>
              )}
              {language === 'en' && (
                <h3 className="titles pl-5 md:pl-0">Team</h3>
              )}
              </div>
            </div>
            <div className='col-span-3'>
            {language === 'es' && (
              <p>Diego González, Omar Granados, Zabdiel Ramos</p>
            )}
            {language === 'en' && (
              <p>Diego González, Omar Granados, Zabdiel Ramos</p>
            )}
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
                  Convocatoria que solicitaba la ampliación del actual plantel de primaria de una escuela en la Ciudad de México para construir el Bloque de las Artes, un Salón de Usos Múltiples y la remodelación del volumen existente de la Biblioteca.
                </p>
                <p className="pb-2">
                  La intervención pretende unificar todo el programa de la escuela en un solo volumen articulado a través de un nuevo vestíbulo y plaza híbrida de acceso. Haciendo uso de materiales aparentes y siguiendo la lógica constructiva de los edificios existentes de ambos planteles, la propuesta generará un nuevo corazón para la comunidad así como nuevas formas de habitar un recinto académico, en constante contacto con el exterior y la naturaleza. Una nueva plaza híbrida de acceso podrá utilizarse peatonalmente, como bahía de ascenso y descenso, o como una ampliación del estacionamiento cuando haya una mayor afluencia de vehículos.
                </p>
                <p className="pb-4">
                  El Salón de Usos Múltiples se convertirá en el corazón del plantel, el cual podrá abrirse hacia el exterior o cerrarse por completo cuando sea necesario. Los nuevos salones plantean una nueva forma de enseñanza en constante contacto con el exterior y la naturaleza. Estos podrán abrirse en sus extremos, protegidos del sol por las cartelas de tabique y generando ventilación natural cruzada. En el segundo nivel, el Patio de las Artes, fomentará el intercambio entre las diferentes disciplinas en un ambiente contenido.
                </p>
              </div>
              )}
              {language === 'en' && (
              <div className="col-span-3 md:col-span-5">
                <p className="pb-2">
                  This project proposes the extension of the current primary school campus of a school in Mexico City, encompassing the art classrooms, a multi-use hall, and the renovation of the existing library.
                </p>
                <p className="pb-2">
                  The intervention aims to unify the entire school program into a single integrated volume articulated through a new lobby and hybrid plaza. Using exposed materials and following the construction logic of the existing buildings of both campuses, the proposal will generate a new heart for the community as well as new ways of experiencing academic environments close to the exterior and nature. A new hybrid access plaza can be used as a pedestrian space, as a drop-off and pick-up bay, or as an extension of the parking lot when there is increased vehicle traffic.
                </p>
                <p className="pb-2">
                  The new multi-use hall will become the heart of the campus, which can open up to the outside or be completely closed when necessary. The new classrooms propose a new teaching approach that is constantly in contact with the exterior and nature. These can open at their sides, protected from the sun by the building’s latticed porous skinand generating cross ventilation. On the second level, a courtyard will foster exchange between different disciplines in a safe environment.
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
              src='/images/rey-yupanqui/01.webp'
              alt='Rey Yupanqui'
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
              src='/images/rey-yupanqui/02.webp'
              alt='Rey Yupanqui'
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
              src='/images/rey-yupanqui/03.webp'
              alt='Rey Yupanqui'
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
                  src='/images/rey-yupanqui/04.webp'
                  alt='Rey Yupanqui'
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
              src='/images/rey-yupanqui/05.webp'
              alt='Rey Yupanqui'
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
