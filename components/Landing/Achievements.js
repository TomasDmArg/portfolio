import React from 'react'
const achievements = [
  {
    title: "Olimpiada Informatica Argentina (OIA)",
    tag: "2021 - Nivel 2",
    description: <>5° puesto, Argentina <br /><br /> 1° en la provincia de Buenos Aires.<br /><br /> </>,
    language: "Lenguaje: C++",
    proof: "http://www.oia.unsam.edu.ar/oia-certamen-nacional-de-programacion-2021/",
  },
  {
    title: "Olimpiada Informatica Argentina (OIA)",
    tag: "2022 - Nivel 2, Jurisdiccional",
    description: <> 1° puesto jurisdicción <br /><br /> </>,
    language: "Lenguaje: C++",
    proof: "http://www.oia.unsam.edu.ar/jurisdiccional-oia-2022-categoria-programacion/",
  }
]
export default function Achievements() {
  return (
    <>

      <section className="achievements">
        <h2 className="nexa-title">Logros</h2>
        <div className="achievements__items">
          {
            achievements.map((achievement, index) => (
              <div className="achievements__item" key={index}>
                <div className="achievements__item--title">
                  <h4>{achievement.title}</h4>
                  <span>{achievement.tag}</span>
                </div>
                <p>{achievement.description}</p>
                <p className="achievements__item--language">{achievement.language}</p>
                <a href={achievement.proof} rel="noopener noreferrer" target="__blank" className="achievements__item--link">Detalles</a>
              </div>
            ))
          }
        </div>
      </section>
    </>
  )
}