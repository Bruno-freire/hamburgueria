import Card from './card'
import hamburguer from '../../../public/hamburguer.webp'

import './index.scss'

export default function Main() {
  return (
    <main>
      <section>
        <Card text='Hamburguers' img={hamburguer}/>
       
      </section>
      <section>
        
      </section>
    </main>
  )
}