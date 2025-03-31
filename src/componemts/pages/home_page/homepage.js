import React from 'react'
import './homepage.css'
import Form from '../../form/form'

export default function HomePage(){
  return (
    <div className='home_page container'>
        <h1 className='home_page title'>โปรแกรม รายรับ-รายจ่าย</h1>
        <Form />
    </div>
  )
}
