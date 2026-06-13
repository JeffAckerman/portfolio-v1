import Cursor from './components/Cursor.jsx'
import ThemeToggle from './components/ThemeToggle.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import IconMarquee from './components/IconMarquee.jsx'
import Stats from './components/Stats.jsx'
import Work from './components/Work.jsx'
import TechStack from './components/TechStack.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import MobileDock from './components/MobileDock.jsx'

export default function App() {
  return (
    <>
      <Cursor />
      <ThemeToggle />
      <Nav />
      <main>
        <Hero />
        <IconMarquee />
        <Stats />
        <Work />
        <TechStack />
        <About />
        <Contact />
      </main>
      <Footer />
      <MobileDock />
    </>
  )
}
