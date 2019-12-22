import React, { useState, useContext } from 'react';
import Sidebar from "react-sidebar";
import Menus from "../menu/Menus";
import { FaBars, FaUser,FaPowerOff,FaHome} from "react-icons/fa";
import './sidebar.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../conext/AuthContext';
import { withRouter } from 'react-router-dom';


function SidebarCom(props) {
   

    const authContext = useContext(AuthContext);
  
    const [sidebarOpen, setSidebarOpen] = useState(false);

    function onSetSidebarOpen(open) {
        setSidebarOpen(open);
    }
    function ExitFunc() {
        localStorage.removeItem('api_token');
        authContext.dispatch({ type: 'LOGOUT' });
        props.history.push('/login');

    }

    return (
        <Sidebar
            sidebar={<Menus />}
            open={sidebarOpen}
            onSetOpen={onSetSidebarOpen}
            sidebarClassName="sidebarStyle"
            pullRight={true}
            // docked={true}
            shadow={true}
            contentClassName={"rtl"}
        >
            <header className="header rtl">
                <div>
                    <i className="float-left"  style={{marginLeft:15}}>
                        <FaPowerOff onClick={ExitFunc} title="خروج" color='#f2cb40' size={45} className="FaPowerOfStyle" />
                    </i>
                    <i className="float-left FaUserStyle">
                        <FaUser color='white' size={45} className="FaPowerOfStyle" title={localStorage.getItem('name')} />
                    </i>
                    <i className="float-left">
                        {/* <label className="textStyle"> </label> */}
                        <Link to='/'>
                        <FaHome color='white'  size={45} className="FaBarStyle textStyle" title='صفحه اصلی'/>
                        </Link>
                     </i>
                    <i className="float-right" onClick={onSetSidebarOpen}>
                        <FaBars color='white' size={50} className="FaBarStyle" /></i>
                </div>
            </header>
        </Sidebar>
    );
}

export default React.memo(withRouter(SidebarCom));