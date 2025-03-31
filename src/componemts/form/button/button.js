import './button.css'
import { useDataContext } from '../../context/context'

export default function Button() {
  const {state} = useDataContext()
  return (
    <div className='submit-btn container'>
      <button className='submit-btn submit' type="submit" 
        disabled={state.form.type !== "" && state.form.amount.length !== 0 && state.form.name.length !== 0 ? !state.check.submitBTN:state.check.submitBTN}>
        บันทึกข้อมูล
      </button>
    </div>
  )
}