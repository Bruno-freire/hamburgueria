import Card from './card'
import hamburguer from '@/assets/hamburguer.webp'
import fries from '@/assets/fries.webp'
import refri from '@/assets/refri.webp'
import beer from '@/assets/beers.webp'
import portion from '@/assets/portion.webp'
import combo from '@/assets/combo.webp'

import './index.scss'
import Table from './table'

export default function Main() {
  return (
    <main>
      <section className='foodSection'>
        <Card text='Hamburguers' img={hamburguer}/>
        <Card text='Batatas' img={fries}/>
        <Card text='Refrigerantes' img={refri}/>
        <Card text='Cervejas' img={beer}/>
        <Card text='Porções' img={portion}/>
        <Card text='Combos' img={combo}/>
      </section>
      <section className='tableSection'>
        <Table/>
      </section>
    </main>
  )
}