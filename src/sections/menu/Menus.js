import React from 'react';
import { FaUser, FaUsers, FaChartBar, FaHome,FaIdCard} from 'react-icons/fa';
import './menu.css';
import logoPic from '../../assets/pic/logo3.png';
import { NavLink } from 'react-router-dom';

export default function Menus(props) {
    return (
        <div className="rtl">
            <div className="sidebar-sticky rtl" className="sidebarSticky">
                <div className="list-group col-md-12" style={{ paddingLeft: 10 }}>
                    <div className="clearfix list-group-item list-group-item-action  border-left-0" >
                        <img src={logoPic} alt="logo" />
                    </div>
                    <div className="clearfix list-group-item list-group-item-action  border-left-0 itemStyle">
                        <span className="float-left">
                            <FaHome size={20} color='#0590e3' />
                        </span>
                        <span className="float-right">
                            <NavLink to="/" activeClassName="activeItem">صفحه اصلی</NavLink>
                        </span>
                    </div>
                    <div className="clearfix list-group-item list-group-item-action  border-left-0 itemStyle">
                        <span className="float-left">
                            <FaUsers size={20} color='#0590e3' />
                        </span>
                        <span className="float-right">
                            <NavLink to="/persons" activeClassName="activeItem"> مدیریت پرسنل ها </NavLink>
                        </span>
                    </div>
                    <div className="clearfix list-group-item list-group-item-action  border-left-0 itemStyle">
                        <span className="float-left">
                            <FaChartBar size={20} color='#0590e3' />
                        </span>
                        <span className="float-right">
                            <NavLink to="/reports" activeClassName="activeItem">گزارشات </NavLink>
                        </span>
                    </div>
                    <div className="clearfix list-group-item list-group-item-action  border-left-0 itemStyle">
                        <span className="float-left">
                            <FaIdCard size={20} color='#0590e3' />
                        </span>
                        <span className="float-right">
                            <NavLink to="/about" activeClassName="activeItem">درباره ما </NavLink>
                        </span>
                    </div>

                </div>
            </div>
        </div>
    );
}

