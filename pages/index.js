import Head from 'next/head'
import Image from 'next/image'
import Navbar from "../components/Navbar"
import React from 'react'
import Landing from '../components/Landing'

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>En construcción - TMDM (v2)</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Portfolio de Tomas D. Mauro" />
      </Head>
      <Navbar links={
        [
          {
            label: "Home",
            link: "/",
          },
          {
            label: "Proyectos",
            link: "/projects",
          },
          {
            label: "Blog",
            link: "/blog",
          },
          {
            label: "Contacto",
            link: "/contact",
          },
        ]
      } />
      <Landing />
    </React.Fragment >
  )
}
