import React from 'react';
import './dashboard.css';
import DashSec4PieChart from './DashSec4PieChart';

function DashSec4() {
    return (
        <div className="section section4">
            <p className='sectionHeader'>User Satisfaction <span style={{ fontSize: '12px', color: 'gray' }}>(Hover to see details)</span></p>
            <div className='sectionPart'>
                <div className='sectionPart1'>
                    <p><span style={{ backgroundColor: "#01218b" }}></span> Very Happy</p>
                    <p><span style={{ backgroundColor: "#0088FE" }}></span> Happy</p>
                    <p><span style={{ backgroundColor: "#00C49F" }}></span> Normal</p>
                    <p><span style={{ backgroundColor: "#FFBB28" }}></span> Awful</p>
                    <p><span style={{ backgroundColor: "#FF8042" }}></span> Very Awful</p>
                </div>
                <div className='sectionPart2'>
                    <DashSec4PieChart />
                </div>
            </div>

        </div>
    )
}

export default DashSec4
