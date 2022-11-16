import React from 'react';
import { Button, Group } from '@mantine/core';
import dynamic from 'next/dynamic';
import Image from 'next/image';
const RandomReveal = dynamic(() => import('react-random-reveal').then(mod => mod.RandomReveal), { ssr: false });
import { useRouter } from 'next/router';
export default function Intro() {
  const router = useRouter();
  const [isReady, setIsReady] = React.useState(false);

  React.useEffect(() => {
    if (router.isReady) {
      setIsReady(true);
    }
  }, [router.isReady]);
  return (
    <>
      <section className="main">
        <p>Hola!, soy</p>
        <h1>
          {
            <RandomReveal
              isPlaying={isReady}
              duration={2.5}
              revealDuration={1}
              // characterSet="01010100 01101111 01101101 01100001 01110011"
              characters="Tomas Di Mauro"
            />
          }
        </h1>
        <p className="main__intro">
          Dev full-stack 👨‍💻, Project Analyst 📈 - Invicta Blockchain Ventures <br />
          <br />
          Frontend developer - MAJR Inc
          <br />
          <br />
          <br />
          5° Puesto nacional, OIAJ 2021 lvl.2 (Arg)
          <br />
        </p>
        <section className="main__action">
          <Group>
            <button className="button--main">
              Contacto
            </button>
            <button className="button">
              Mi blog
            </button>
          </Group>
        </section>
      </section>
      <section className="indicators">
        <span>Scroll to start</span>
      </section>
    </>
  )
}