import { StaticImageData } from 'next/image'
import Image from "next/image";
import './index.scss'

interface cardProps {
  img: StaticImageData,
  text: string
}

export default function Card (props: cardProps) {
  return (
    <div className="card">
      <Image src={props.img} width={90} height={90} alt={props.text} />
      <p>{props.text}</p>
    </div>
  )
}