import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BsCartFill} from 'react-icons/Bs';
import {HiOutlineRefresh} from 'react-icons/Hi';
import {RiRecycleFill,RiDeleteBin5Line} from 'react-icons/Ri';
import {IoMdAddCircleOutline} from 'react-icons/Io';
import {GrSubtractCircle} from 'react-icons/Gr';
import Row from './component/row';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">

    <div className="first">
       <BsCartFill className='cart'/>
       <h1>0</h1>
       <p>Items</p>
    </div>

    <div className="icon">
      < HiOutlineRefresh className='refresh'/>
      <RiRecycleFill className='recycle'/>
    </div>

   <Row/>
   <Row/>
   <Row/>
   <Row/>

    </div>
  )
}

export default App
