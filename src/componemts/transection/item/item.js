import './item.css'
import { useDataContext } from '../../context/context'
export default function Item (){
  const {state} = useDataContext()

  const addData = state.data.map((e)=>{
    return (
      <li className={e.type} key={e.id}> 
        <span>{e.name}</span> 
        <span>{e.type === "Income" ? "+" : "-"}{e.amount}</span>
      </li>
      )
  }) 
  return <div>{addData}</div>         
}

