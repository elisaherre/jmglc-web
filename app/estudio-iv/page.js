"use client";

import { useLanguage } from '../context/LanguageContext';
import Image from 'next/image';
import { useState } from 'react';

export default function Estudio() {
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
                <p className='fixed'>Estudio IV</p>
              )}
              {language === 'en' && (
                <p className='fixed'>Study IV</p>
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
              <p className='fixed'>2024</p>
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
              <p>Museo Universitario de Ciencias y Arte (MUCA)</p>
            )}
            {language === 'en' && (
              <p>Museo Universitario de Ciencias y Arte (MUCA)</p>
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
              <p>Exhibición</p>
            )}
            {language === 'en' && (
              <p>Exhibition</p>
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
              <p>Omar Gámez</p>
            )}
            {language === 'en' && (
              <p>Omar Gámez</p>
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
                  Esta pieza forma parte de una colaboración para el proyecto de Rolando Flores “Dinastía de Albañiles: otras arquitecturas emocionales” que se exhibió en el Museo Universitario de Ciencias y Artes (MUCA) de la Universidad Nacional Autónoma de México (UNAM). La exhibición, con curaduría de Ixel Rion, tiene como eje central una escultura creada en colaboración con una dinastía de albañiles: Gilberto Vargas Barrón, Roberto Vargas Martínez y Alberto Vargas Ginés; abuelo, hijo y nieto.
                </p>
                <p className="pb-2">
                  La conceptualización de la pieza “Estudio IV” parte de tres ejes fundamentales. El primero, es la relación entre el árbol genealógico abuelo-padre-nieto y cada uno de los muros elegidos por los albañiles, los cuales van por orden genealógico en alturas descendentes. El segundo, busca enfatizar y formalizar la narrativa de la familia, convirtiendo a cada uno de los personajes en el muro que les corresponde. El tercer eje utiliza la representación del tejido o telar como metáfora de un entramado familiar, indivisible, en constante cambio y donde los motivos individuales no se pueden comprender sin mirar el conjunto que genera el mismo. Así, el proyecto pretende generar una reflexión hacia los lazos familiares y los cambios que se van dando conforme se heredan las tradiciones de generación en generación. El textil final se realizó en Oaxaca con la técnica tradicional de los telares de Teotitlán del Valle, con el apoyo del estudio de textiles Arudeko.
                </p>
              </div>
              )}
              {language === 'en' && (
              <div className="col-span-3 md:col-span-5">
                <p className="pb-2">
                  This piece is part of a collaboration for Rolando Flores&apos; project “Dinastía de Albañiles: otras arquitecturas emocionales” which was exhibited at the University Museum of Sciences and Arts (MUCA) of the National Autonomous University of Mexico (UNAM), Mexico City. The exhibition, curated by Ixel Rion, centres around a sculpture created in collaboration with a dynasty of bricklayers: Gilberto Vargas Barrón, Roberto Vargas Martínez, and Alberto Vargas Ginés, grandfather, son, and grandson.
                </p>
                <p className="pb-2">
                  The conceptualization of the piece “Study IV” is based on three fundamental axes. The first is the relationship between the grandfather-father-grandson family tree and each of the walls chosen by the bricklayers, which follow a genealogical order in descending heights. The second seeks to emphasize and formalize the family&apos;s narrative, turning each of the characters into the wall that corresponds to them. The third axis uses the representation of weaving as a metaphor for family heritage, which is indivisible and constantly changing, and where individual motifs cannot be understood without looking at the whole they generate. Thus, the project aims to generate a reflection on family bonds and the changes that occur as traditions are passed down from generation to generation. The final textile was made in Oaxaca using the traditional technique of the Teotitlán del Valle textiles, with the support of the Arudeko studio.
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

        {/* IZQ */}
          <div className='col-span-4 md:col-span-6'>
            <div className='img-left'>
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/estudio-iv/01.webp`}
                alt='Estudio IV'
                width={100}
                height={100}
                quality={100}
                unoptimized={true}
              />
            </div>
          </div>
          <div className='md:col-span-6 hidden md:block'></div>

        {/* DOBLE */}
          <div className='col-span-2 md:col-span-6'>
            <div className='img-dbl'>
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/estudio-iv/02.webp`}
                alt='Estudio IV'
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
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/estudio-iv/03.webp`}
                    alt='Estudio IV'
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
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/estudio-iv/04.webp`}
                alt='Estudio IV'
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
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/estudio-iv/05.webp`}
                alt='Estudio IV'
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
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/estudio-iv/06.webp`}
                alt='Estudio IV'
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
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/estudio-iv/07.webp`}
                alt='Estudio IV'
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
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/estudio-iv/08.webp`}
                    alt='Estudio IV'
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
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/estudio-iv/09.webp`}
                alt='Estudio-IV'
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
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/estudio-iv/10.webp`}
                alt='Estudio IV'
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
