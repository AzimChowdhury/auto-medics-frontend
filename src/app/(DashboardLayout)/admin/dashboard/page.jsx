import React from "react";
import './dashboard.css';
import DashSec1 from './DashSec1';
import DashSec2 from './DashSec2';
import DashSec3 from './DashSec3';
import DashSec4 from './DashSec4';



const Dashboard = () => {
    return (
        <div className="dashboard">
            <DashSec1 />
            <DashSec3 />
            <DashSec2 />
            <DashSec4 />
        </div>
    );
};

export default Dashboard;