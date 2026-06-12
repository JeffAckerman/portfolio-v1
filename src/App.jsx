import Cursor from './components/Cursor.jsx'
import ThemeToggle from './components/ThemeToggle.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import IconMarquee from './components/IconMarquee.jsx'
import Stats from './components/Stats.jsx'
import Capabilities from './components/Capabilities.jsx'
import Work from './components/Work.jsx'
import TechStack from './components/TechStack.jsx'
import Journey from './components/Journey.jsx'
import About from './components/About.jsx'
import CurrentlyBuilding from './components/CurrentlyBuilding.jsx'
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
        <Capabilities />
        <Work />
        <TechStack />
        <Journey />
        <About />
        <CurrentlyBuilding />
        <Contact />
      </main>
      <Footer />
      <MobileDock />
    </>
  )
}
