import Image from 'next/image'
import Banner from '@/component/banner'
import ProductCard from '@/component/ProductCard'
import styles from './page.module.css'
import { Imprima, Margarine } from 'next/font/google'

export default function Home() {
  return (
    <main>
      <div>
        <Banner/>
        <div style={{margin:"20px", display:"flex", flexDirection:"row", 
        flexWrap:"wrap",justifyContent:"space-around",alignContent:"space-around"}}>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>
      </div>
    </main>
  )
}
