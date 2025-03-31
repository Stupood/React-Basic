import './report.css'
import IncomeExpenses from './income-expenses/income-expenses'
import Balance from './balance/balance'
import { useDataContext } from '../context/context'

export default function Report(){
const {state} = useDataContext()
  return (
    <div className='report container'>
      <div className={`report ${state.check.showBTN ? "show" : "hide"}`}>
          <Balance />
          <IncomeExpenses />
      </div>
    </div>
  )
}
