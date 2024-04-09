import React from 'react';
import './dashboard.css';
import DashSec3BarChart from './DashSec3BarChart';

function DashSec3() {
    return (
        <div className="section section2">
            <p className='sectionHeader'>Auto Medics States <span style={{ fontSize: '12px', color: 'gray' }}>(Hover to see details)</span></p>
            <DashSec3BarChart />
        </div>
    )
}

export default DashSec3
