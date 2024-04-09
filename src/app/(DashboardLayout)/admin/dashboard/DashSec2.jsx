import React from 'react';
import './dashboard.css';

const popularServices = [
    { name: 'Car Wash', booking: 5 },
    { name: 'Engine Diagnostic', booking: 7 },
    { name: 'Oil Change', booking: 9 },
    { name: 'Tire Rotation', booking: 3 },
    { name: 'Brake Inspection', booking: 6 },
    { name: 'Alignment Service', booking: 4 },
    { name: 'Battery Replacement', booking: 8 },
    { name: 'Transmission Flush', booking: 2 },
    { name: 'Wheel Alignment', booking: 5 },
    { name: 'Air Conditioning Service', booking: 10 },
    { name: 'Spark Plug Replacement', booking: 7 },
    { name: 'Coolant Flush', booking: 3 },
    { name: 'Timing Belt Replacement', booking: 6 },
    { name: 'Fuel System Cleaning', booking: 4 },
    { name: 'Diagnostic Service', booking: 8 }
];



function DashSec2() {
    return (
        <div className="section section2">
            <div>
                <p className='sectionHeader'>Most Popular Services</p>
            </div>
            <div>

            </div>
        </div>
    )
}

export default DashSec2
