"use client";

import { useLanguage } from '../context/LanguageContext';
import Image from 'next/image';
import { useState } from 'react';

export default function TYY() {
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
                <p className='fixed'>&quot;tú&quot; y &quot;yo&quot;, &quot;tú y yo&quot;</p>
              )}
              {language === 'en' && (
                <p className='fixed'>&quot;you&quot; and &quot;me&quot;, &quot;me and you&quot;</p>
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
              <p className='fixed'>2020</p>
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
              <p>Ciudad Nezahualcóyotl</p>
            )}
            {language === 'en' && (
              <p>Ciudad Nezahualcóyotl</p>
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
              <p>Beca “Jóvenes Creadores” FONCA 2019-2020</p>
            )}
            {language === 'en' && (
              <p>“Young Creators” Grant FONCA 2019-2020</p>
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
                  ¿Es posible generar momentos de intimidad en el espacio público sin comprometer la seguridad de los habitantes? Este proyecto plantea la posibilidad de que ambas condiciones puedan coexistir en zonas marginadas y con carencia de espacios públicos en la Zona Metropolitana del Valle de México. El proyecto toma como modelo los terrenos habitacionales de Ciudad Nezahualcóyotl, municipio con una traza urbana reticular y modular que permitiría desarrollar una red de espacios públicos de escala barrial replicables.
                </p>
                <p className="pb-2">
                  A través de cuatro estrategias de diseño (Topografía, Reflejos y transparencias, Luz y sombra, Materialidad), el proyecto plantea una serie de propuestas, maquetas de trabajo, diagramas y conclusiones a partir de la investigación donde el espacio y la escala arquitectónica del diseño urbano fueron los protagonistas. Sin buscar llegar a propuestas ideales o finales, el proyecto se abordó como una investigación, realizando la totalidad del material de forma manual, en donde el proceso de diseño fuera una herramienta de reflexión a través de la cual surgieran conclusiones y descubrimientos sobre la intimidad en el espacio público recreativo.
                </p>
              </div>
              )}
              {language === 'en' && (
              <div className="col-span-3 md:col-span-5">
                <p className="pb-2">
                  Is it possible to create moments of intimacy in public spaces without compromising the safety of inhabitants? This project proposes that both conditions can coexist in marginalized areas lacking public spaces in the Metropolitan Area of the Valley of Mexico. The project takes as a model the residential areas of Ciudad Nezahualcóyotl, a municipality with a reticular and modular urban layout that would allow the development of a network of replicable neighbourhood-scale public spaces.
                </p>
                <p className="pb-2">
                Through four design strategies (Topography, Reflections and transparencies, Light and shadow, and Materiality), the project presents a series of proposals, working models, diagrams, and conclusions based on research where space and the architectural scale of urban design were the protagonists. Without seeking to reach ideal or final proposals, the project was approached as research, with all material created manually, where the design process served as a tool for reflection through which conclusions and discoveries about intimacy in recreational public space emerged.
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

        <div className='col-span-4 md:col-span-12'>
          <div className='template02-01'>
            <Image
              src='/images/tu-y-yo/01.webp'
              alt='Tu y Yo'
              width={100}
              height={100}
              quality={100}
              unoptimized={true}
            />
          </div>
        </div>

        <div className='col-span-2 md:col-span-6'>
          <div className='template02-02'>
            <Image
              src='/images/tu-y-yo/02.webp'
              alt='Tu y Yo'
              width={100}
              height={100}
              quality={100}
              unoptimized={true}
            />
          </div>
        </div>
        <div className='col-span-2 md:col-span-6'>
          <div className='template02-02'>
            <Image
                  src='/images/tu-y-yo/03.webp'
                  alt='Tu y Yo'
                  width={100}
                  height={100}
                  quality={100}
                  unoptimized={true}
                />
          </div>
        </div>

        <div className='col-span-4 md:col-span-6'>
          <div className='template02-03'>
            <Image
              src='/images/tu-y-yo/04.webp'
              alt='Tu y Yo'
              width={100}
              height={100}
              quality={100}
              unoptimized={true}
            />
          </div>
        </div>
        <div className='md:col-span-6 hidden md:block'></div>

        <div className='col-span-2 md:col-span-6'>
          <div className='template02-02'>
            <Image
              src='/images/tu-y-yo/05.webp'
              alt='Tu y Yo'
              width={100}
              height={100}
              quality={100}
              unoptimized={true}
            />
          </div>
        </div>
        <div className='col-span-2 md:col-span-6'>
          <div className='template02-02'>
            <Image
                  src='/images/tu-y-yo/06.webp'
                  alt='Tu y Yo'
                  width={100}
                  height={100}
                  quality={100}
                  unoptimized={true}
                />
          </div>
        </div>

        <div className='col-span-4 md:col-span-12'>
          <div className='template02-04'>
            <Image
              src='/images/tu-y-yo/07.webp'
              alt='Tu y Yo'
              width={100}
              height={100}
              quality={100}
              unoptimized={true}
            />
          </div>
        </div>

        <div className='col-span-2 md:col-span-6 pb-10'>
          <div className='template02-02'>
            <Image
              src='/images/tu-y-yo/08.webp'
              alt='Tu y Yo'
              width={100}
              height={100}
              quality={100}
              unoptimized={true}
            />
          </div>
        </div>
        <div className='col-span-2 md:col-span-6 pb-10'>
          <div className='template02-02'>
            <Image
                  src='/images/tu-y-yo/09.webp'
                  alt='Tu y Yo'
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
