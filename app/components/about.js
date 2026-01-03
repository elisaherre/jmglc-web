"use client";

import { useLanguage } from '../context/LanguageContext';
import Image from 'next/image';
import { useState } from 'react';

export default function About() {
  const { language } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);
  const base = process.env.NEXT_PUBLIC_BASE_PATH || '';

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="about h-fit">

        <section className="grid grid-cols-4 md:grid-cols-7 auto-rows gap-2.5 md:gap-4">
          <div className="col-span-1">
            <h3 className="titles pl-5 md:pl-0">About</h3>
          </div>
          <div className="col-span-3 md:col-span-5 pb-8 md:pb-16">
            {language === 'es' && (
              <>
                <p>
                  José María Gómez de León (Ciudad de México, 1993) es un arquitecto graduado con mención honorífica por parte de Universidad Nacional Autónoma de México (2018) con estudios en l’École Nationale Supérieure d’Architecture Paris-Belleville (2016) y un posgrado en The London School of Economics and Political Science MSc City Design and Social Science (2024).
                </p>
                <br />
                <p className='hidden md:block'>
                  Ha colaborado en los estudios de Frida Escobedo, Héctor Barroso y Manuel Cervantes entre el 2017 y 2022, siendo líder de proyectos culturales, habitacionales, espacio público e infraestructura. En 2019 recibió la beca “Jóvenes Creadores” otorgada por el Fondo Nacional para la Cultura y las Artes (FONCA) con su proyecto “Espacios de intimidad en tiempos violentos” en el cual exploró el diseño del espacio público en zonas vulnerables de la Zona Metropolitana del Valle de México. Desde 2020 desarrolla su propia práctica en un constante balance entre la escala arquitectónica y la escala urbana, siempre acompañado de un profundo interés en los proyectos docentes y de investigación que nutren su práctica profesional.
                </p>
                <p className={`text-sm ${isExpanded ? 'block' : 'hidden'}`}>
                  Ha colaborado en los estudios de Frida Escobedo, Héctor Barroso y Manuel Cervantes entre el 2017 y 2022, siendo líder de proyectos culturales, habitacionales, espacio público e infraestructura. En 2019 recibió la beca “Jóvenes Creadores” otorgada por el Fondo Nacional para la Cultura y las Artes (FONCA) con su proyecto “Espacios de intimidad en tiempos violentos” en el cual exploró el diseño del espacio público en zonas vulnerables de la Zona Metropolitana del Valle de México. Desde 2020 desarrolla su propia práctica en un constante balance entre la escala arquitectónica y la escala urbana, siempre acompañado de un profundo interés en los proyectos docentes y de investigación que nutren su práctica profesional.
                </p>
              </>
            )}
            {language === 'en' && (
              <>
                <p>
                  José María Gómez de León (Mexico City, 1993) is an architect graduated with honours from the Universidad Nacional Autónoma de México (UNAM, 2018) with additional studies in l’École Nationale Supérieure d’Architecture Paris-Belleville from 2015-2017 and a MSc City Design and Social Science in The London School of Economics and Political Science (2024).
                </p>
                <br />
                <p className='hidden md:block'>
                  He has collaborated with Frida Escobedo, Taller Héctor Barroso, and Manuel Cervantes Estudio in Mexico City, leading housing, cultural, retail, and public space projects. In 2019, he received the “Young Creators Grant” from the National Fund for Culture and Arts (FONCA) for his project “Intimate Spaces in Violent Times”, in which he explored public space design in insecure and vulnerable areas in Mexico City. Since 2020, he has developed his own architectural practice, finding a balance between the architectural and the urban scale, always with a profound interest in academia and research projects that constantly inform his personal practice.
                </p>
                <p className={`text-sm ${isExpanded ? 'block' : 'hidden'}`}>
                  He has collaborated with Frida Escobedo, Taller Héctor Barroso, and Manuel Cervantes Estudio in Mexico City, leading housing, cultural, retail, and public space projects. In 2019, he received the “Young Creators Grant” from the National Fund for Culture and Arts (FONCA) for his project “Intimate Spaces in Violent Times”, in which he explored public space design in insecure and vulnerable areas in Mexico City. Since 2020, he has developed his own architectural practice, finding a balance between the architectural and the urban scale, always with a profound interest in academia and research projects that constantly inform his personal practice.
                </p>
              </>
            )}
            <div className="sm:block md:hidden">
              <button
                className="read-more-button"
                onClick={toggleReadMore}
              >
                {isExpanded ? 'Read Less' : 'Read More'}
              </button>
            </div>
          </div>
        </section>
        <section className="grid grid-cols-4 md:grid-cols-7 auto-rows gap-2.5 md:gap-4">
          <div className="col-span-1">
            <h3 className="titles pl-5 md:pl-0">Contact</h3>
          </div>
          <div className="col-span-3 md:col-span-5">
            <div className='grid grid-cols-2'>
              <p>josemaria@jmglc.xyz</p>
              <div className="bio-img-container">
                  <p className="bio-text">José María Gómez de León</p>
                  <Image
                    src={`${base}/images/jmglc_about.png`}
                    alt="José María Gómez de León Cantú"
                    className="bio-image"
                    width={100}
                    height={100}
                    quality={100}
                    unoptimized={true}
                  />
              </div>
            </div>
          </div>
          <div className="col-span-1"></div>
        </section>

    </div>
  );
}
