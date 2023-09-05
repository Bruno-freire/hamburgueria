import Image from "next/image";
import logo from '../../../public/logo.webp'
import { FaHeart } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import './index.scss'

export default function Header () {
  return (
    <header>
      <div className="leftHeader">
        <Image src={logo} width={70} height={70} alt="Logo"/>
        <p>BURGUERIA</p>
      </div>
      <div className="rigthHeader">
        <FaHeart/>
        <FaShoppingCart/>
      </div>
    </header>
  )
}