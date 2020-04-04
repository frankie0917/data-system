import React from 'react'
import './Sidebar.css'

export default function Sidebar(){

    return(
        <div className='Sidebar'>
            <div className="user-info"></div>
            <div className="link-group">
                <div className="tables">
                    <h3>数据表</h3>
                    <a href="#">出库</a>
                    <a href="#">入库</a>
                </div>
                <div className="graphs">
                    <h3>图表</h3>
                </div>
                <div className="workflow">
                    <h3>流程</h3>
                </div>
            </div>
            <div className="logo">
                <h1 className="company-name">Pink Smooth</h1>
            </div>
        </div>
    )
}