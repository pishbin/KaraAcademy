import React from 'react'
import notFound from '../../assets/pic/NotFound.png'
import './notFound.css';
import {Link} from 'react-router-dom';

export default function NotFound(props) {
    return (
        <div className="notFoundStyle">
             <div>
                <h3>صفحه مورد نظر پیدانشد</h3>
                <Link to="/">بازگشت به صفحه اصلی</Link>
            </div>
            <img src={notFound} className="imgStyle"/>
           
        </div>
    );

}