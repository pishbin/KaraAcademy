import React, { useState, useContext } from 'react';
import '../../assets/css/styleLogin/css/style.css';
import './login.css';
import '../../assets/css/styleLogin/css/form-elements.css';
import '../../assets/css/styleLogin/font-awesome/css/font-awesome.min.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import './login.css';
import logoImg from '../../assets/pic/logo3.png'
import validator from 'validator';
import { AuthContext } from '../../conext/AuthContext';
import insWebApi1 from '../../configs/instanseWebApi1_config.js';
import Loader from '../../componnet/loader/Loader';

export default function LoginForm2(props) {

    const authContext = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    function handleChangeEmail(event) {
        setEmail(event.target.value);
    }
    function handleChangePassword(event) {
        setPassword(event.target.value);
    }
    const validate = () => {
        if (validator.isEmpty(email)) {
            NotificationManager.warning('مقدار فیلد ایمیل الزامی است');
            return false;
        }
        if (!validator.isEmail(email)) {
            NotificationManager.warning('فرمت ایمیل اشتباه است');
            return false;
        }

        if (validator.isEmpty(password)) {
            NotificationManager.warning('مقدار فیلد پسورد الزامی است');
            return false;
        }
        return true;
    }

    function handleSubmit(event) {

        event.preventDefault();
        if (validate()) {
            setLoading(true);
            insWebApi1.post('/login', {
                UserName: email,
                Password: password
            })
                .then(response => {
                    setLoading(false);
                    if (response.data.ErrorCode == 0) {
                        localStorage.setItem('api_token', response.data.Result)
                        localStorage.setItem('name', 'مدیرسیستم')
                        const userInfo = { name: 'مدیرسیستم', api_token: response.data.Result }
                        authContext.dispatch({ type: 'LOGIN', userInfo });
                        props.history.replace('/');
                    } else if (response.data.ErrorCode == 4) {
                        NotificationManager.error('این کاربر در سامانه ثبت نشده است');
                    } else {
                        NotificationManager.error('عملیات با خطا مواجه شد دوباره امتحان کنید');
                    }
                })
                .catch(err => {
                    //sent to api service for save err ------->
                    // for save log users login -------------->
                    setLoading(false);
                    NotificationManager.error('عملیات با خطا مواجه شد دوباره امتحان کنید');
                })
        }
    }
    return (
        <div className="loginForm">
            <div className="rtl">
                <div className="inner-bg" style={{ fontFamily: 'irs' }}>
                    <div className="container">

                        <div className="row">
                            <div className="col-sm-8 col-sm-offset-2 text">
                                <div className="description">

                                </div>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-sm-6 col-sm-offset-3 form-box">
                                <div className="form-top rtl">
                                    <div className="form-top-left rtl">
                                        <h3 style={{ fontFamily: 'irs-Bold' }}>ورود به سامانه</h3>
                                        <p >جهت ورود نام کاربری و رمز عبور را وارد نمائید</p>
                                    </div>
                                    <div className="form-top-right rtl">
                                        {/* <i className="fa fa-lock"></i> */}
                                        <img src={logoImg} alt="loginlogo" style={{ paddingLeft: 20 }} />
                                    </div>
                                </div>
                                <div className="form-bottom">
                                    <form onSubmit={handleSubmit} className="login-form">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control inputStyle"
                                                name="email"

                                                value={email}
                                                onChange={handleChangeEmail}
                                                placeholder=" نام کاربری ....  " />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="password"
                                                className="form-control inputStyle"
                                                name="password"

                                                value={password}
                                                onChange={handleChangePassword}
                                                placeholder=" رمز عبور ....  " />
                                        </div>
                                        <button className="btn btnLogin" type="submit"> ورود  </button>
                                        {loading ? <Loader /> : null}
                                    </form>  </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <NotificationContainer />
        </div>
    );
}
