"use client";

import { useLanguage } from '../context/LanguageContext';
import Image from 'next/image';
import { useState } from 'react';

export default function Palmarosa() {
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
                <p className='fixed'>Palmarosa</p>
              )}
              {language === 'en' && (
                <p className='fixed'>Palmarosa</p>
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
            {language === 'es' && (
              <p>Fabián Martínez</p>
            )}
            {language === 'en' && (
              <p>Fabián Martínez</p>
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
              <p>Gustavo Silva</p>
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
                Ubicado sobre una avenida arbolada al poniente de la Ciudad de México, este pequeño local logra generar un espacio íntimo y sensorial dentro del contexto citadino. A través de elementos táctiles, visuales y olfativos se genera una atmósfera neutral que permite resaltar los valores de esta marca mexicana de cuidado personal dentro de su primera tienda física. Las diferentes áreas y momentos al interior del local se caracterizan por un balance entre materiales tersos y porosos, los cuales se entrelazan entre sí para crear un recorrido estimulante en un espacio compacto.
                </p>
                <p className="pb-2">
                Una serie de bloques geométricos de concreto aparente guían a los usuarios a través diferentes posibilidades dentro del local: un área para sentarse y descansar, un lavabo para probar los productos, y una barra como punto de venta. Al mismo tiempo, una serie de repisas esbeltas de madera se intersectan con los bloques de concreto para crear las estanterías principales que muestran los productos. Entre texturas de concreto estriado y madera de nogal, el espacio sumerge a los visitantes en una experiencia contemporánea anclada en la tradición apotecaria.
                </p>
              </div>
              )}
              {language === 'en' && (
              <div className="col-span-3 md:col-span-5">
                <p className="pb-2">
                  Located on a leafy boulevard on the west side of Mexico City, the store aims to create a tactile experience as a retreat from its active urban surroundings. Being the first brick-and-mortar for this Mexican skincare brand, it provided a black canvas to create a sensorial experience that introduced the public to the brand’s ethos. A balance of hard and soft materials interpolates through the space, defining the two areas of product experience and display in this compact space.
                </p>
                <p className="pb-2">
                The solid concrete blocks guide the users through different active functions: an area to sit, a washbasin to test products, and a counter to collect and purchase. Simultaneously, wood elements cut into the active concrete elements, introducing areas of product display. Between the fluted concrete and the rich wood shelving, the space guides customers through an elevated apothecary experience.
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
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/palmarosa/01.webp`}
                alt='Palmarosa'
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
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/palmarosa/02.webp`}
                alt='Palmarosa'
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
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/palmarosa/03.webp`}
                alt='Palmarosa'
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
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/palmarosa/04.webp`}
                    alt='Palmarosa'
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
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/palmarosa/05.webp`}
                alt='Palmarosa'
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
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/palmarosa/06.webp`}
                    alt='Palmarosa'
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
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/palmarosa/07.webp`}
                alt='Palmarosa'
                width={100}
                height={100}
                quality={100}
                unoptimized={true}
              />
            </div>
          </div>
          <div className='md:col-span-6 hidden md:block'></div>

        {/* DOBLE */}
        <div className='col-span-2 md:col-span-6 pb-10'>
            <div className='img-dbl'>
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/palmarosa/08.webp`}
                alt='Palmarosa'
                width={100}
                height={100}
                quality={100}
                unoptimized={true}
              />
            </div>
        </div>
        <div className='col-span-2 md:col-span-6 pb-10'>
          <div className='img-dbl'>
              <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/palmarosa/09.webp`}
                    alt='Palmarosa'
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
