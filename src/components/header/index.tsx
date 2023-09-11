import Image from "next/image";
import logo from '@/assets/logo.webp'
import { FaHeart } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import './index.scss'

export default function Header () {
  return (
    <header>
      <div className="leftHeader">
        <Image src={logo} width={70} height={70} alt="Logo"/>
        <h1 className="logoText">BURGUERIA</h1>
      </div>
      <div className="rightHeader">
        <FaHeart className="icons"/>
        <FaShoppingCart className="icons"/>
      </div>
    </header>
  )
}