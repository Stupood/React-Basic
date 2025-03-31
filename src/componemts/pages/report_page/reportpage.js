import React from 'react'
import './reportpage.css'
import ShowButton from '../../report/showButton/showButton'
import Report from '../../report/report'
import Transection from '../../transection/transection'

export default function ReportPage(){
  return (
    <div className='report_page container'>
        <h1 className='report_page title'>สรุปผล รายรับ-รายจ่าย</h1>
        <ShowButton />
        <Report />
        <Transection />
    </div>
  )
}
