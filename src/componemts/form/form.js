import Input from './input/input'
import Button from './button/button'
import { v4 as uuidv4 } from 'uuid';
import RadioCard from './radio-card/radio-card';
import './form.css'
import { useDataContext } from '../context/context';

export default function Form() {
  const {state,dispatch} = useDataContext()

  // useEffect(()=>{
  //   const checkData = state.name.trim().length > 0 && state.amount > 0
  //   if(checkData){
  //     dispatch({type:"SET_CHECK"})
  //   }
    
  // },[state.name,state.amount,dispatch])


  const handleAddData = (e) => {
    e.preventDefault()
    const newEntry = {
      id:String(uuidv4()),
      name:String(state.form.name),
      amount:Number(state.form.amount),
      type:String(state.form.type)
    };
    dispatch({type:"ADD_NEW_DATA",payload:newEntry});
    dispatch({type:"RESET_FORM"});
  }
  
  return (
    <div className='forms container'>
      <div className='forms form'>
        <form onSubmit={handleAddData}>
          <Input />
          <RadioCard />
          <Button />
        </form>
      </div>
    </div>
  )
}
