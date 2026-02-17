"use client";

import { useLanguage } from '../context/LanguageContext';
import Image from 'next/image';
import { useState } from 'react';

export default function PTC() {
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
                <p className='fixed'>Paisaje-Tiempo-Ciudad</p>
              )}
              {language === 'en' && (
                <p className='fixed'>Landscape-Time-City</p>
              )}
            </div>

            <div className='col-span-1 md:block hidden'></div>
            <div className="col-span-1 mb-5">
              <div>
              {language === 'es' && (
                <h3 className="titles fixed pl-5 md:pl-0">Año</h3>
              )}
              {language === 'en' && (
                <h3 className="titles fixed pl-5 md:pl-0">Year</h3>
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
              <p>Taller impartido en el Museo Experimental El Eco por Diego Rivero Borrell y Pedro Aparicio Llorente</p>
            )}
            {language === 'en' && (
              <p>Workshop held at Museo Experimental El Eco by Diego Rivero Borrell and Pedro Aparicio Llorente</p>
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
                  El taller ‘Paisaje - tiempo’, impartido por Diego Rivero Borrell y Pedro Aparicio Llorente como parte de los programas de vinculación del Museo, buscaba generar reflexiones a través de diferentes conceptos impartidos mediante cuatro sesiones de ponencias y debates. Los cuatro ponentes presentaron provocaciones y ejercicios en donde los participantes del taller reaccionamos a través de dibujos, textos y contenidos audiovisuales con nuestra interpretación sobre los conceptos que cada uno presentó. Al final del taller, se compilaron todos los trabajos en una publicación digital.
                </p>
                <p className="pb-2">
                Las siguientes reflexiones buscan ligar el paisaje hacia nuestro contexto urbano. Se trata diagramas que expresan fenómenos que suceden en el espacio público, relacionados con las provocaciones de cada conferencia (Causalidad, Cosmos, Resonancia y Azar), demostrando el diálogo que existe constantemente entre objetos y cuerpos, naturaleza y artificalidad, lo construido y lo no construido, lo dinámico y lo estático.
                </p>
              </div>
              )}
              {language === 'en' && (
              <div className="col-span-3 md:col-span-5">
                <p className="pb-2">
                The workshop “Landscape - Time,” led by Diego Rivero Borrell and Pedro Aparicio Llorente as part of the museum’s outreach programs, aimed to generate reflections through different concepts presented in four sessions of lectures and debates. The four speakers presented provocations and exercises where the workshop participants reacted through drawings, texts, and audiovisual content, interpreting the concepts presented by each one. At the end of the workshop, all the works were compiled into a digital publication.
                </p>
                <p className="pb-2">
                The following explorations seek to link the landscape to our urban context. It is an effort to diagram phenomena that occur in public space, related to the provocations of each lecture (Causality, Cosmos, Resonance, and Chance), demonstrating the ongoing dialogue between objects and bodies, nature and artificiality, the built and the unbuilt, the dynamic and the static.
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
        <a href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/`}>
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/close.png`}
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
        <div className='grid grid-cols-4 md:grid-cols-12 gap-y-16 gap-x-4 md:mx-10'>

        {/* COMPLETA */}
          <div className='col-span-4 md:col-span-12'>
            <div className='img-full'>
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/paisaje-tiempo-ciudad/01.webp`}
                alt='Paisaje Tiempo Ciudad'
                width={100}
                height={100}
                quality={100}
                unoptimized={true}
              />
            </div>
          </div>

        {/* IZQ */}
          <div className='md:col-span-6 col-span-4'>
            <div className='img-right'>
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/paisaje-tiempo-ciudad/02.webp`}
                alt='Paisaje Tiempo Ciudad'
                width={100}
                height={100}
                quality={100}
                unoptimized={true}
              />
            </div>
          </div>
          <div className='md:col-span-6 hidden md:block'></div>

        {/* COMPLETA */}
          <div className='col-span-4 md:col-span-12'>
            <div className='img-full'>
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/paisaje-tiempo-ciudad/03.webp`}
                alt='Paisaje Tiempo Ciudad'
                width={100}
                height={100}
                quality={100}
                unoptimized={true}
              />
            </div>
          </div>

        {/* DER */}
        <div className='md:col-span-6 hidden md:block'></div>
        <div className='md:col-span-6 col-span-4'>
            <div className='img-right'>
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/paisaje-tiempo-ciudad/04.webp`}
                alt='Paisaje Tiempo Ciudad'
                width={100}
                height={100}
                quality={100}
                unoptimized={true}
              />
            </div>
        </div>

        {/* COMPLETA */}
        <div className='col-span-4 md:col-span-12'>
            <div className='img-full'>
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/paisaje-tiempo-ciudad/05.webp`}
                alt='Paisaje Tiempo Ciudad'
                width={100}
                height={100}
                quality={100}
                unoptimized={true}
              />
            </div>
        </div>

        {/* IZQ */}
        <div className='md:col-span-6 col-span-4'>
            <div className='img-right'>
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/paisaje-tiempo-ciudad/06.webp`}
                alt='Paisaje Tiempo Ciudad'
                width={100}
                height={100}
                quality={100}
                unoptimized={true}
              />
            </div>
          </div>
          <div className='md:col-span-6 hidden md:block'></div>

        {/* COMPLETA */}
        <div className='col-span-4 md:col-span-12'>
            <div className='img-full'>
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/paisaje-tiempo-ciudad/07.webp`}
                alt='Paisaje Tiempo Ciudad'
                width={100}
                height={100}
                quality={100}
                unoptimized={true}
              />
            </div>
          </div>

        {/* DER */}
        <div className='md:col-span-6 hidden md:block'></div>
        <div className='md:col-span-6 col-span-4 pb-10'>
            <div className='img-right'>
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/paisaje-tiempo-ciudad/08.webp`}
                alt='Paisaje Tiempo Ciudad'
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
