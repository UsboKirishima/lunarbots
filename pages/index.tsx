import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Center } from '../utils/styles/index'
import '../styles/Home.module.css'
import { Navbar } from '../components/Navbar';
import { Search } from '../components/Search';
import { Categories } from '../components/Categories';
import RecentsBots from '../components/RecentsBots';

const Home: NextPage = () => {
  return (
    <>
    <div id="app">
      <article className="full-container">
        <Navbar />
        <Center>
          <header className="main-header">
            <div className="header-container">
              <div className="void-div"><br/><br/></div>
              <h1 className="title-h">Lunar Bots</h1>
              <Center>
                <Search />
              </Center>
             <Center>
             <section className='categories'>
              <Categories
                name='Moderation'
                value='moderation'
              />

              <Categories 
                name='Fun'
                value='fun'
              />

              <Categories 
                name='Utility'
                value='utility'
              />

              <Categories 
                name='Music'
                value='music'
              />
              </section>
             </Center>
            </div>
          </header>
          <hr />
        </Center>
        <section className='home_bots'>
          <RecentsBots />
        </section>
      </article>
    </div>
    </>
  )
}

export default Home;