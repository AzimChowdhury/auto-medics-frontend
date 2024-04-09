'use client'
import React, { PureComponent } from 'react';
import './dashboard.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const popularServices = [
    { name: 'Users', total: 50 },
    { name: 'Customers', total: 38 },
    { name: 'Specialists', total: 8 },
    { name: 'Services', total: 15 },
    { name: 'Bookings', total: 55 }
];



export default class DashSec2BarChart extends PureComponent {


    render() {
        return (
            <ResponsiveContainer style={{ marginLeft: '20px' }} width="95%" height="80%">
                <BarChart
                    layout="vertical"
                    data={popularServices}
                    margin={{
                        top: 5,
                        right: 15,
                        left: -18,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" angle={0} textAnchor="end" interval={0} fontSize={10} />
                    <Tooltip />
                    <Bar dataKey="total" fill="#0160E7" />
                </BarChart>
            </ResponsiveContainer>
        );
    }
}
