import {IoMdAddCircleOutline} from 'react-icons/Io';
import {GrSubtractCircle} from 'react-icons/Gr';
import {RiDeleteBin5Line} from 'react-icons/Ri';
import { useState } from 'react';

const Row = () => {
  const [ChangeNum,setChangeNum] = useState(0);
  const incrementFun = () => {
    setChangeNum(ChangeNum + 1);
  } 
  const decrementFun = () => { 
    if (ChangeNum > 0) {
    setChangeNum(ChangeNum - 1);
  }
  }

  const [showRow,setRow] = useState(true);
  const deleteSection = () => {
    setRow(false)
  }


    return (  <div className="content">
  { showRow && (
    <div className="cont">
      <h2>{ChangeNum}</h2>
      < IoMdAddCircleOutline onClick={incrementFun} className='add'/>
      <GrSubtractCircle onClick={decrementFun} className='sub'/>
      <RiDeleteBin5Line onClick={deleteSection} className='delete'/>
      </div>
  )}
  
  </div> );
}
 
export default Row;