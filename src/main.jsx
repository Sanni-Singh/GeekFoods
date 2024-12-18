import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './components/SecondSection/SecondSection.css'
import './components/FirstSection/SectionOne.css'
import './components/navbar/navbar.css'
import Carder from './components/card.jsx'
import NavSection  from './components/navbar/navbar.jsx'
import FristSection from './components/FirstSection/SectionOne.jsx'
import SecondSection from './components/SecondSection/SecondSection.jsx'
import Footer from './components/footer/footer.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavSection />
    <FristSection />
    <SecondSection />
    <div className="cardContainer">
        <Carder cardDel="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis."/>
        <Carder cardDel="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae incidunt perferendis soluta facilis voluptas dicta repudiandae quasi asperiores libero, exercitationem molestiae autem sapiente dolore nulla non consequatur. Eaque, dolores."/>
        <Carder cardDel="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi a voluptatum quidem nulla quisquam natus velit provident earum esse, odio numquam labore recusandae similique sunt"/>
        <Carder cardDel="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore vel quo deserunt quos expedita minima incidunt sed tempora, a architecto consectetur reprehenderit, in repellat voluptatum."/>
        <Carder cardDel="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus eius aut unde, dolores accusantium!"/>
        <Carder cardDel="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ut necessitatibus, repudiandae qui dolor minima."/>
    </div>
    <Footer />
  </StrictMode>,
)
