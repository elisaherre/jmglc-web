"use client";

import { useLanguage } from '../context/LanguageContext';
import Image from 'next/image';
import { useState } from 'react';

export default function RioHouse() {
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
                <p className='fixed'>Casa Rio</p>
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
              <p>Querétaro</p>
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
              <p>En proceso</p>
            )}
            {language === 'en' && (
              <p>In process</p>
            )}
            </div>

            <div className='col-span-1 md:block hidden'></div>
            <div className="col-span-1">
              <div>
              {language === 'es' && (
                <h3 className="titles pl-5 md:pl-0">Co-autoría</h3>
              )}
              {language === 'en' && (
                <h3 className="titles pl-5 md:pl-0">Co-author</h3>
              )}
              </div>
            </div>
            <div className='col-span-3'>
              <p>Diego González</p>
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
                  Este proyecto residencial, ubicado en las afueras de la ciudad de Querétaro, parte de una necesidad de crear un espacio donde sea posible construir los proyectos personales y profesionales de una familia. Es por esto que la propuesta incluye, además de las áreas tradicionalmente residenciales, una serie de espacios de estudio, trabajo y convivencia en los tres diferentes niveles. El volumen se construye a través de una sucesión de transformaciones y sustracciones partiendo de un prisma rectangular puro, el cual se moduló y racionalizó para dar sentido a diferentes lógicas espaciales y estructurales. Los materiales utilizados son principalmente muros de tabique blanco y entrepisos de madera clara, los cuales dan calidez y luminosidad a los espacios de la casa.
                </p>
              </div>
              )}
              {language === 'en' && (
              <div className="col-span-3 md:col-span-5">
                <p className="pb-2">
                  This residential project, located on the outskirts of Querétaro, originates from the need to create a space where a family can develop both personal and professional projects. For this reason, the proposal includes a series of study, work, and social spaces spread across three different levels in addition to traditionally residential areas. The structure is built through a sequence of transformations and subtractions from a pure rectangular prism, which was then modulated and rationalized to make sense of different spatial and structural logics. The materials used are primarily white brick walls and light wood floors, which provide warmth and brightness to the home&apos;s spaces.
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

        {/* COMPLETA */}
          <div className='col-span-4 md:col-span-12'>
            <div className='img-full'>
              <Image
                src='/images/casa-rio/01.webp'
                alt='Casa Río'
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
                src='/images/casa-rio/02.webp'
                alt='Casa Río'
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
                src='/images/casa-rio/04.webp'
                alt='Casa Rio'
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
                src='/images/casa-rio/05.webp'
                alt='Casa Río'
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
                src='/images/casa-rio/06.webp'
                alt='Casa Río'
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
                src='/images/casa-rio/07.webp'
                alt='Casa Río'
                width={100}
                height={100}
                quality={100}
                unoptimized={true}
              />
            </div>
          </div>

        {/* COMPLETA */}
        <div className='col-span-4 md:col-span-12 pb-10'>
            <div className='img-full'>
              <Image
                src='/images/casa-rio/08.webp'
                alt='Casa Río'
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
