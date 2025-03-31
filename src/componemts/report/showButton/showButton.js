import React from 'react'
import './showButton.css'
import { useDataContext } from '../../context/context'

export default function ShowButton(){
    const {state,dispatch} = useDataContext()

    return (
        <div className='show-report-btn container'>
            <button className='show-report-btn show_hide' 
                onClick={()=>dispatch({type:"BTN_HIDE/SHOW"})}>
                {state.check.showBTN === false ? "Show" : "Hide"}
            </button>
        </div>
    )
}
