'use client'
import React, { PureComponent } from 'react';
import './dashboard.css';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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




export default class DashSec2BarChart extends PureComponent {

    render() {
        return (
            <ResponsiveContainer width="100%" height="80%">
                <BarChart
                    width={500}
                    height={300}
                    data={popularServices}
                    margin={{
                        top: 5,
                        right: 15,
                        left: -18,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" angle={-90} textAnchor="end" interval={0} fontSize={10} />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="booking" fill="#0160E7" activeBar={<Rectangle fill="#0160E7" stroke="#0160E7" />} />
                </BarChart>
            </ResponsiveContainer>
        );
    }
}
