import "./radio-card.css"
import { useDataContext } from "../../context/context"

export default function RadioCard(){
    const {state,dispatch} = useDataContext()
    return (
        <div className="card_radio container">
            <label>
                <div className="card_radio flex-radio">
                    <h1 className="card_radio name">รายรับ</h1>
                    <input className="card_radio radio" name="plan" type="radio" 
                        onChange={(e)=>dispatch({type:"SET_TYPE",payload:e.target.value})} 
                        value="Income" 
                        checked={state.form.type === "Income"} required/>
                    <span className="card_radio circle plus"></span> 
                </div> 
            </label>
            <label>
                <div className="card_radio flex-radio">
                    <h1 className="card_radio name">รายจ่าย</h1> 
                    <input className="card_radio radio" name="plan" type="radio" 
                        onChange={(e)=>dispatch({type:"SET_TYPE",payload:e.target.value})} 
                        value="Expenses" 
                        checked={state.form.type === "Expenses"} required/>
                    <span className="card_radio circle minus"></span> 
                </div>
            </label>
        </div>   
    )
}