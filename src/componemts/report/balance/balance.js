import './balance.css'
import { useDataContext } from '../../context/context'
import { currencyFormat } from '../../data/function/currency_format'
export default function Balance(){
  const {state} = useDataContext()

  return (
    <div className='balance-container'>
      <span className='balance'>
        {/* balance {(state.financial.balance+state.financial.income)-state.financial.expenses} */}
        balance 
        {currencyFormat(state.financial.balance)}

      </span>
    </div>
  )
}
