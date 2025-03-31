import { useEffect } from 'react';
import './input.css'
import { useDataContext } from '../../context/context';

export default function Input(){
  const {state,dispatch} = useDataContext()

  useEffect(() => {
    document.querySelector(".amount").addEventListener("keypress", function (event) {
      if ((event.which !== 8 && event.which !== 0 && event.which < 48) || event.which > 57){
        event.preventDefault();
      }
    })
  }, []);

  return (
    <div className='input container'>
        <div className='input data'>
            <label htmlFor='title'>ชื่อรายการ</label>
            <input type='text' id="title" name="title" placeholder='ระบุชื่อรายการ' 
              onChange={(e)=>dispatch({type:"SET_NAME",payload:e.target.value})} 
              value={state.form.name} required>
            </input>
            <label htmlFor='amount'>จำนวนเงิน</label>
            <input className='amount' type='number' id="amount" name="amount" placeholder='ระบุจำนวนเงิน' 
              onChange={(e)=>dispatch({type:"SET_AMOUNT",payload:e.target.value})} 
              value={state.form.amount === 0 ? "": state.form.amount} required>
            </input>
        </div>
    </div>
  )
}

