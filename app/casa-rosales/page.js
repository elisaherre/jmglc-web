"use client";

import { useLanguage } from '../context/LanguageContext';
import Image from 'next/image';
import { useState } from 'react';

export default function CasaRosales() {
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
                <p className='fixed'>Casa Rosales</p>
              )}
              {language === 'en' && (
                <p className='fixed'>Rosales House</p>
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
              <p className='fixed'>2023</p>
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
              <p>Morelos</p>
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
              <p>Construido</p>
            )}
            {language === 'en' && (
              <p>Built</p>
            )}
            </div>

            <div className='col-span-1 md:block hidden'></div>
            <div className="col-span-1">
              <div>
              {language === 'es' && (
                <h3 className="titles pl-5 md:pl-0">Fotografías</h3>
              )}
              {language === 'en' && (
                <h3 className="titles pl-5 md:pl-0">Photographs</h3>
              )}
              </div>
            </div>
            <div className='col-span-3'>
              <p>Andrés Cedillo</p>
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
                  La casa gira alrededor de una serie de patios que generan una sucesión espacial en diagonal, articulando y vestibulando las diferentes partes del programa. Siendo una casa de fin de semana en una zona cálida, se priorizaron las áreas comunes sobre las privadas, siempre con posibilidad de abrirse por completo hacia el exterior.
                </p>
                <p className="pb-2">
                  El elemento central de la casa es la alberca, el cual se encuentra integrado de forma indivisible a la estructura de la casa, junto al patio central. Esta, conecta las diferentes terrazas de descanso y la mitad de esta se encuentra cubierta por una losa que le da sombra en las épocas más calurosas del año. De esta forma, la casa funciona como un pabellón se rompe la frecuente división entre la recreación y el habitar. El uso honesto de los materiales como tabique, concreto y azulejos esmaltados darán un bajo costo de mantenimiento a la casa y le dan un valor adicional en su relación con el paisaje natural que la rodea.
                </p>
              </div>
              )}
              {language === 'en' && (
              <div className="col-span-3 md:col-span-5">
                <p className="pb-2">
                  The house revolves around a series of courtyards that create a diagonal spatial sequence, articulating and providing access to the different parts of the program. The central element of the house is the swimming pool, which is seamlessly integrated into the structure alongside the central courtyard. In this way, the house functions like a pavilion, breaking the common division between recreation and living spaces. The house is designed to promote a sense of connection with the surrounding environment, blurring the boundaries between indoor and outdoor spaces. Large windows and sliding doors allow natural light and ventilation to permeate the interior while also providing views of the landscaped gardens and courtyards.
                </p>
                <p className="pb-2">
                  Each courtyard is designed to serve a specific function, whether it’s for dining, relaxation, or socializing. Overall, the design of the house prioritizes both functionality and aesthetics, creating a harmonious balance between form and function. The integration of courtyards and the swimming pool into the overall layout adds a unique architectural character to the residence.
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
        <div className='grid grid-cols-4 md:grid-cols-12 gap-y-16 gap-x-4 mx-10'>

        {/* COMPLETA */}
          <div className='col-span-4 md:col-span-12'>
            <div className='img-full'>
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/casa-rosales/01.webp`}
                alt='Casa Rosales'
                width={100}
                height={100}
                quality={100}
                unoptimized={true}
              />
            </div>
          </div>

        {/* IZQ */}
          <div className='col-span-4 md:col-span-6'>
            <div className='img-left'>
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/casa-rosales/02.webp`}
                alt='Casa Rosales'
                width={100}
                height={100}
                quality={100}
                unoptimized={true}
              />
              </div>
          </div>
          <div className='md:col-span-6 hidden md:block'></div>

        {/* DER */}
          <div className='md:col-span-6 hidden md:block'></div>
          <div className='md:col-span-6 col-span-4'>
            <div className='img-right'>
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/casa-rosales/03.webp`}
                alt='Casa Rosales'
                width={100}
                height={100}
                quality={100}
                unoptimized={true}
              />
            </div>
          </div>

        {/* DOBLE */}
          <div className='col-span-2 md:col-span-6'>
            <div className='img-dbl'>
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/casa-rosales/04.webp`}
                alt='Casa Rosales'
                width={100}
                height={100}
                quality={100}
                unoptimized={true}
              />
            </div>
          </div>
          <div className='col-span-2 md:col-span-6'>
            <div className='img-dbl'>
              <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/casa-rosales/05.webp`}
                    alt='Casa Rosales'
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
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/casa-rosales/06.png`}
                alt='Casa Rosales'
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
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/casa-rosales/07.webp`}
                alt='Casa Rosales'
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
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/casa-rosales/08.webp`}
                alt='Casa Rosales'
                width={100}
                height={100}
                quality={100}
                unoptimized={true}
              />
            </div>
        </div>

        {/* DOBLE */}
        <div className='col-span-2 md:col-span-6'>
            <div className='img-dbl'>
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/casa-rosales/09.webp`}
                alt='Casa Rosales'
                width={100}
                height={100}
                quality={100}
                unoptimized={true}
              />
            </div>
          </div>
          <div className='col-span-2 md:col-span-6'>
            <div className='img-dbl'>
              <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/casa-rosales/10.webp`}
                    alt='Casa Rosales'
                    width={100}
                    height={100}
                    quality={100}
                    unoptimized={true}
                  />
            </div>
          </div>

        {/* IZQ */}
          <div className='col-span-4 md:col-span-6'>
            <div className='img-left'>
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/casa-rosales/11.webp`}
                alt='Casa Rosales'
                width={100}
                height={100}
                quality={100}
                unoptimized={true}
              />
              </div>
          </div>
          <div className='md:col-span-6 hidden md:block'></div>

        {/* DER */}
        <div className='md:col-span-6 hidden md:block'></div>
        <div className='md:col-span-6 col-span-4'>
            <div className='img-right'>
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/casa-rosales/12.webp`}
                alt='Casa Rosales'
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
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/casa-rosales/13.png`}
                alt='Casa Rosales'
                width={100}
                height={100}
                quality={100}
                unoptimized={true}
              />
            </div>
        </div>

        {/* IZQ */}
        <div className='col-span-4 md:col-span-6'>
            <div className='img-left'>
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/casa-rosales/14.webp`}
                alt='Casa Rosales'
                width={100}
                height={100}
                quality={100}
                unoptimized={true}
              />
              </div>
          </div>
          <div className='md:col-span-6 hidden md:block'></div>

        {/* COMPLETA */}
        <div className='col-span-4 md:col-span-12 pb-10'>
            <div className='img-full'>
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/casa-rosales/15.webp`}
                alt='Casa Rosales'
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
