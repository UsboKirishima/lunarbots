import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Center } from '../utils/styles/index'
import '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div id="app">
      <article className="full-container">
        <nav className="navbar">
          <span className="navbar-toggle" id="js-navbar-toggle">
                  <i className="fas fa-bars"></i>
              </span>
          <a href="#" className="logo">LunarBots</a>
          <ul className="main-nav" id="js-menu">
            <li>
              <a href="#" className="nav-links">Home</a>
            </li>
            <li>
              <a href="#" className="nav-links">Products</a>
            </li>
            <li>
              <a href="#" className="nav-links">About Us</a>
            </li>
            <li>
              <a href="#" className="nav-links">Contact Us</a>
            </li>
            <li>
              <a href="#" className="nav-links">Blog</a>
            </li>
          </ul>
        </nav>
        <Center>
          <header className="main-header">
            <div className="header-container">
              <div className="void-div"><br/><br/></div>
              <h1 className="title-h">Lunar Bots</h1>
            </div>
          </header>
        </Center>
      </article>
    </div>
  )
}

export default Home
