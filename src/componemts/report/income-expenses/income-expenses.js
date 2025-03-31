import { useDataContext } from '../../context/context'
import './income-expenses.css'
import { currencyFormat } from '../../data/function/currency_format'

export default function IncomeExpenses(){
  const {state}  = useDataContext()
  

  return (
    <section className='income-expenses-container'>
      <div className='section_item section_income'>
        <h1>income</h1>
        <h2>{state.financial.income === 0 ? "-" : currencyFormat(state.financial.income)}</h2>
      </div>
      <div className='section_item section_expenses'>
        <h1>expenses</h1>
        <h2>{state.financial.expenses === 0 ? "-" : currencyFormat(state.financial.expenses)}</h2>
      </div>
    </section>
  )
}
