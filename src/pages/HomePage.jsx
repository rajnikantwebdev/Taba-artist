import Main from '../components/Main'
import Services from '../components/Services'
import ContactPage from '../components/ContactPage'
import Founders from '../components/Founder'
import Review from '../components/Review'
import Projects from '../components/Projects'
import Brands from '../components/Brands'
function HomePage() {
  return (
    <div >
      <Main/>
      <div>
      <Services/>
      <Projects />
      <Brands />
      <ContactPage/>
      <Founders/>
      <Review/>
      </div>
    </div>
  )
}

export default HomePage
