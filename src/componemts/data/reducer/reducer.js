import { initData } from "../data/data"

function dataReducer(state,action){
    switch (action.type){
      case "ADD_NEW_DATA":
        return [action.payload,...state]
      default:
        return state
    }
}
  
function formReducer(state,action){
    switch (action.type){
      case "SET_NAME":
        return {...state,name:action.payload}
      case "SET_AMOUNT":
        return {...state,amount:action.payload}
      case "SET_TYPE":
        return {...state,type:action.payload}
      case "RESET_FORM":
        return initialState.form
      default:
        return state
    }
}
  
  
function typeCheckReducer(state,action){
    switch (action.type){
      case "BTN_HIDE/SHOW":
        return {...state,showBTN:!state.showBTN}
      case "SUBMIT_BTN_HIDE/SHOW":
        return {...state,submitBTN:!state.submitBTN}
      case "NAVIGATE":
        return {...state,navigate:true}
      default:
        return state
    }
}
  
function financialReducer(state,action){
    switch (action.type){
      case "ADD_NEW_DATA":
        const newItem = action.payload
        if (newItem.type === "Income"){
          return {
            ...state,
            income:state.income + newItem.amount,
            balance:state.balance + newItem.amount
          }
        }else if (newItem.type === "Expenses"){
          return{
            ...state,
            expenses:state.expenses + newItem.amount,
            balance:state.balance - newItem.amount
          }
        }
        return state
      default:
        return state      
    }
}
  
const combineReducers = (reducers) => {
    return (state, action) => {
      return Object.keys(reducers).reduce((acc, key) => {
        acc[key] = reducers[key](state[key], action);
        return acc;
      }, {});
    };
  };

export const rootReducer = combineReducers({
    data: dataReducer,
    form: formReducer,
    check:typeCheckReducer,
    financial: financialReducer
})

const totalIncome = initData.filter(e=>e.type === "Income").reduce((value,e)=>e.amount+value,0)
const totalExpenses = initData.filter(e=>e.type === "Expenses").reduce((value,e)=>e.amount+value,0)

export const initialState = { 
  data:initData,
  form:{name:"",amount:0,type:""},
  check:{submitBTN:true,showBTN:false,navigate:false},
  financial:{income:totalIncome,expenses:totalExpenses,balance:500000}
}