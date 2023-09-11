import { FaHeart } from 'react-icons/fa';
import './index.scss'

export default function Table () {

  return (
    <div className='table'>
      <h1 className='title'>BURGUER</h1>
      <div className='subSectionTable'>
        <div className='leftSubSectionTable'>
          <p className='productName'>Product</p>
          <p className='productValue'>RS 10,00</p>
          <p className='productDescription'>Hamburguer</p>
        </div>
        <div className='rightSubSectionTable'>
          <FaHeart className="rightSubSectionTableIcon"/>
        </div>
      </div>
    </div>
  )
}