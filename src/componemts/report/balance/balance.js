import './balance.css'
import { useDataContext } from '../../context/context'
import { currencyFormat } from '../../data/function/currency_format'
export default function Balance(){
  const {state} = useDataContext()

  return (
    <div className='balance-container'>
      <text className='balance'>
        {/* balance {(state.financial.balance+state.financial.income)-state.financial.expenses} */}
        balance 
        <div>{currencyFormat(state.financial.balance)}</div>

      </text>
    </div>
  )
}
