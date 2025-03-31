import Item from "./item/item"
import './transection.css'

export default function Transection(){
  return (
    <div className='item-list container'>
      <ul className='item-list item'>
        <Item />
      </ul>
    </div>
  )
}