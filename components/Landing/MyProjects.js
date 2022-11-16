import React from 'react'
import { Button, Group } from '@mantine/core'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IconBrandGithub, IconNetwork } from '@tabler/icons';
import { Timeline, Text } from '@mantine/core';
import { IconGitBranch, IconGitPullRequest, IconGitCommit, IconMessageDots } from '@tabler/icons';
export default function MyProjects() {
  const data = {
    projects: [
      {
        title: 'Enganches DIMA',
        date: "2019",
        description: 'Mi primer sitio web + google business, para un negocio de venta de enganches para vehículos y trabajos de tornería. Sus ventas crecieron un 200%',
        url: 'https://enganchesdima.com.ar/old',
        github: 'https://github/TomasDmArg',
        technologies: ['HTML', 'CSS', 'JS'],
      },
      {
        title: 'Vale Soñar',
        date: "2020",
        description: 'E-Commerce hecho con Wordpress, para una empresa de productos para el hogar.',
        url: 'https://valesonar.com.ar',
        technologies: ['WordPress', 'CSS', 'JS'],
      },
      {
        title: 'CryptoPrices v1',
        date: "2021",
        description: 'Sitio web para ver el precio de las criptomonedas en pesos argentinos.',
        github: 'https://github.com/TomasDmArg',
        technologies: ['HTML', 'CSS', 'JS (vanilla)'],
      },
      {
        title: 'CryptoPrices',
        date: "2021-2022",
        description: 'Se agregaron mas funciones y cotizaciones, diseño más moderno y una mejor experiencia de usuario. Pasó de js vanilla a Next.js para facilitar su mantenimiento',
        github: 'https://github.com/TomasDmArg',
        url: 'https://v2.cryptoprices.com.ar/',
        technologies: ['Next.js', 'SCSS', 'Figma'],
      },
      {
        title: 'Enganches DIMA v2',
        date: "2021",
        description: 'Dado el buen resultado del primer sitio, como era un diseño muy simple, se mejoró este aspecto',
        github: 'https://enganchesdima.com.ar',
        url: 'https://enganchesdima.com.ar/',
        technologies: ['PHP', 'CSS', 'JS (vanilla)', 'Figma'],
      },
      {
        title: 'Invicta Blockchain Ventures - Website & Blog',
        date: "2022",
        description: 'Sitio web y blog con automatizacion a newsletter, Twitter, Linkedin y Telegram para un Venture Capital crypto.',
        url: 'https://invicta.capital',
        technologies: ['Next.js/React.js', 'SCSS', 'Node.js', 'PHP', 'PostgreSQL', 'Figma'],
      },
      {
        title: 'Sitio web EEST N°5',
        date: "2022",
        description: 'Diseño de UI/UX, desarrollo y mantenimiento de sitio web para la Escuela de Educación Secundaria Técnica N°5. "Amancio Williams", junto con otros desarrolladores.',
        url: 'https://eest5mdp.com.ar',
        github: 'https://github.com/TomasDmArg',
        technologies: ['Next.js/React.js', 'SCSS', 'PostgreSQL', 'Figma'],
      },
    ]
  }

  const [showContent, setShowContent] = React.useState(false);

  React.useEffect(() => {
    const timeout = setTimeout(() => setShowContent(true), 2000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <section className="myp" >
      {
        showContent && (
          <section className="content">
            <h1 className="nexa-title">Proyectos</h1>
            <Timeline className="timeline" bulletSize={24} lineWidth={2}>
              {
                data.projects.map((project, index) => (
                  <Timeline.Item
                    key={index}
                    title={project.title}
                    icon={<IconGitBranch />}
                    className="timeline__item"
                  >
                    <span className="timeline__item--date">{project.date}</span>
                    <p className="timeline__item--text">
                      {project.description}
                    </p>
                    <p size="sm" className="timeline__item--text">
                      Tecnologías: <br /><br />
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="timeline__item__text__tech">{tech}</span>
                      ))}
                    </p>
                    <section className="timeline-buttons">
                      <a className="timeline__item--link" href={project.url} target="_blank" rel="noopener noreferrer">
                        Ir al sitio
                      </a>
                      {
                        project.github && (
                          <a className="timeline__item--link-sec" href={project.github} target="_blank" rel="noopener noreferrer">
                            Repo <IconBrandGithub color='#aaa' />
                          </a>
                        )
                      }
                    </section>
                  </Timeline.Item>
                ))
              }
            </Timeline></section>
        )
      }
    </section>
  )
}