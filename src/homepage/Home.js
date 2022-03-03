import React from 'react'
import { AiOutlineRight } from "react-icons/ai";
import { MdOutlineMonitor } from "react-icons/md";
import './home.css'
function Home() {
    return (
        <div className='home-bar'>
            <ul>
                <li>
                    <div>
                        <MdOutlineMonitor /> CIRCULAR
                    </div>
                </li>
                <li><div><MdOutlineMonitor /> WELCOME </div> </li>
                <li><div><MdOutlineMonitor /> Student Profile</div> </li>
                <li>
                    <div>
                        <MdOutlineMonitor /> <span>Academic Reports</span>
                    </div>
                    <AiOutlineRight />
                </li>
                <li>
                    <div>
                        <MdOutlineMonitor /> <span>Student</span>
                    </div>
                    <AiOutlineRight />
                </li>
                <li>
                    <div>
                        <MdOutlineMonitor /> <span>Unified Time Table</span>
                    </div>
                    <AiOutlineRight />
                </li>
                <li><span><MdOutlineMonitor /> Course Feedback</span> </li>
                <li><span><MdOutlineMonitor /> My Time Table</span></li>
            </ul>
        </div>
    )
}

export default Home