
import React, { Component } from 'react';
import validator from 'validator';
import axios from 'axios';
import {Link} from "react-router-dom";

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {
                email: '',
                password: ''
            },
            errors: {}
        }
    }

    handleValidation(callback) {
        let { fields } = this.state;
        let errors = {};
        let formIsValid = true;

        // Email
        if (validator.isEmpty(fields.email)) {
            formIsValid = false;
            errors["email"] = "فیلد نام کاربری نمیتواند خالی بماند";
        }
        // } else if (!validator.isEmail(fields.email)) {
        //     formIsValid = false;
        //     errors["email"] = "فرمت ایمیل اشتباه است";
        // }

        // Email
        if (validator.isEmpty(fields.password)) {
            formIsValid = false;
            errors["password"] = "فیلد پسورد نمیتواند خالی بماند";
        } else if (!validator.isLength(fields.password, { min: 3, max: undefined })) {
            formIsValid = false;
            errors["password"] = "   رمز عبور باید بیشتر از 3 کاراکتر باشد";
        }

        this.setState({ errors }, () => {
            return callback(formIsValid)
        });

    }
    handleChange(event) {
        let fields = this.state.fields;
        let target = event.target;
        fields[target.name] = target.value;
        this.setState({ fields });
    }

    handleRequest() {
        const { email, password } = this.state.fields;

        let data = new FormData();
        data.append('email', email);
        data.append('password', password);

        // axios.post('http://roocket.org/api/login', data)
        //     .then(response => {
        //         localStorage.setItem('api_token', response.data.data.api_token);
        //         this.props.history.push('/')
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })
    }

    handleSubmit(event) {
        event.preventDefault();

        this.handleValidation((valid) => {
            if (valid) this.handleRequest()
            //this.props.history('/')
            // this.redirection('ُ/systemPanel');
        })
    }
    render() {
        const { email, password } = this.state.fields;
        const { errors } = this.state;
        return (
            <div className="col-lg-6" style={{marginTop:'20%',marginLeft:'20%',justifyContent:'center',alignItems:'center'}}>
                <div className="card " >
                    <div className="card-header " style={{justifyContent:'center',alignItems:'center',textAlign:'center'}}>فرم ورود کاربر</div>
                    <div className="card-body rtl">
                        {/* <h2>Login Form</h2> */}
                        <form onSubmit={this.handleSubmit.bind(this)} className="col-lg-12" style={{ marginTop: 20 }}>
                            <div className="form-group">
                                <label>نام کاربری : </label>
                                <input
                                    type="text"
                                    className={["form-control", errors["email"] ? 'is-invalid' : ''].join(' ')}
                                    name="email"
                                    value={email}
                                    onChange={this.handleChange.bind(this)}
                                    placeholder="لطفا نام کاربری را وارد کنید" />
                                <span className="invalid-feedback rtl" style={{ display: errors["email"] ? 'block' : 'none' }}>{errors["email"]}</span>
                            </div>
                            <div className="form-group">
                                <label>رمز عبور : </label>
                                <input
                                    type="password"
                                    className={["form-control", errors["password"] ? 'is-invalid' : ''].join(' ')}
                                    name="password"
                                    value={password}
                                    onChange={this.handleChange.bind(this)}
                                    placeholder="لطفا رمز عبور را وارد کنید" />
                                <span className="invalid-feedback rtl" style={{ display: errors["password"] ? 'block' : 'none' }}>{errors["password"]}</span>
                            </div>
                            <div className="form-group" style={{justifyContent:'center',alignItems:'center',textAlign:'center'}}>
                                <button className="btn btn-danger" type="submit">
                                ورود
                                {/* <Link className="nav-link active" to="/">
                                ورود
                                </Link> */}
                                
                                
                                </button>
                            </div>
                        </form>
                    </div>
                    {/* <div class="card-footer">Footer</div> */}
                </div>
                <div></div>

            </div>
        );
    }
}

export default LoginPage;
