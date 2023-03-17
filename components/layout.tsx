import React from "react";
import Link from 'next/link';
import styles from '../styles/layout.module.css';
import Head from 'next/head'

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Head>
        <title>nextjs12</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <header className={styles.header}>
          <h1>Demo Note - nextjs12</h1>
          <nav className={styles.nav}>
            <Link href='/products'>Products</Link>
            <Link href='/contact'>Contact</Link>
            <Link href='/about'>About</Link>
          </nav>
        </header>
        {children}
      </main>
    </>
  )
}