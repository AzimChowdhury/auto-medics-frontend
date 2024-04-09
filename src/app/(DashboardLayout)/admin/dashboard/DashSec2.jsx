import React from 'react';
import './dashboard.css';
import DashSec2BarChart from './DashSec2BarChart';

function DashSec2() {
    return (
        <div className="section section2">
            <p className='sectionHeader'>Most Popular Services</p>
            <DashSec2BarChart />
        </div>
    )
}

export default DashSec2
