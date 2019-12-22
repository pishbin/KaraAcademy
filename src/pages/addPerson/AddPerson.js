import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import './addPerson.css';
import { Link } from 'react-router-dom';
import insWebApi1 from '../../configs/instanseWebApi1_config';
import { NotificationContainer, NotificationManager } from 'react-notifications';


const schema = yup.object().shape({
  name: yup.string().required('ورود نام  الزامیست'),
  family: yup.string().required('ورود نام خانوادگی الزامیست'),
  natiaonCode: yup.string('no').required('ورود کدملی الزامیست'),
  // .test('len', 'کدملی باید یازده کاراکتر باشد', val => val.length === 11)
  // .max(11,'تعداد کاراکتر مجاز 11 کاراکتر می باشد'),
  gender: yup.bool().required(' تعیین جنسیت  الزامیست'),
  email: yup.string().required('ورود ایمیل الزامیست').email('فرمت ایمیل صحیح نیست'),

});
export default function AddPerson(props) {

  async function sendtoApi(values) {
    try {
         const newPerson = {
         "Id": 102,
         "Name": values.name,
         "Family": values.family,
         "NationalCode": values.natiaonCode
       }

      // const response = await insWebApi1.post('/Persons', {
      //   "Id": 100,
      //   "Name": values.name,
      //   "Family": values.family,
      //   "NationalCode": values.natiaonCode
      // });
      
      const response = await insWebApi1.post('/Persons',newPerson)
      console.log(response);
      if (response.data.ErrorCode == 0) {
        NotificationManager.success('با موفقیت ثبت شد ');
        setTimeout(() => {
          props.history.replace('/persons')
        }, 500)
      } else if (response.data.ErrorCode == 1) {
        console.log(response.data.ErrorCode);
        NotificationManager.error('درثبت خطایی رخ داده است دوباره امتحان کنید    ');
      } else {
        NotificationManager.error('درثبت خطایی رخ داده است دوباره امتحان کنید    ');
      }
    } catch (error) {
      NotificationManager.error('درثبت خطایی رخ داده است دوباره امتحان کنید');
    }
  }

  // function sendtoApi(values) {

  //   try {
  //     console.log(values)
  //     // const newPerson = {
  //     //   "Id": values.id,
  //     //   "Name": values.name,
  //     //   "Family": values.family,
  //     //   "NationalCode": values.natiaonCode
  //     // }
  //     insWebApi1.post('/Persons', {
  //       "Id": 100,
  //       "Name": values.name,
  //       "Family": values.family,
  //       "NationalCode": values.natiaonCode
  //     })
  //       .then(response => {
  //         console.log(response)
  //         if (response.data.ErrorCode == 0) {
  //           NotificationManager.success('با موفقیت ثبت شد ');
  //           setTimeout(() => {
  //             props.history.replace('/persons')
  //           }, 500)
  //         } else if (response.data.ErrorCode == 1) {
  //           console.log(response.data.ErrorCode);
  //           NotificationManager.error('درثبت خطایی رخ داده است دوباره امتحان کنید    ');
  //         } else {
  //           NotificationManager.error('درثبت خطایی رخ داده است دوباره امتحان کنید    ');
  //         }

  //       })
  //       .catch(error => {
  //         console.log(error);
  //         NotificationManager.error('درثبت خطایی رخ داده است دوباره امتحان کنید');

  //       })

  //   } catch (error) {
  //     console.log(error);
  //     NotificationManager.error('درثبت خطایی رخ داده است دوباره امتحان کنید    ');

  //   }
  //   console.log('sendtoApi');
  //   console.log(values);

  // }
  return (
    <div className="card col-md-8">

      <h3 className="card-header"> فرم ثبت پرسنل جدید  </h3>
      <div className="card-block cardblockStyle">
        <Formik
          initialValues={{ name: '', family: '', natiaonCode: '', gender: '0', email: '' }}
          onSubmit={(values) => sendtoApi(values)}
          validationSchema={schema}
        >
          {props => (


            <form className="form-signin" onSubmit={props.handleSubmit} style={{ padding: 10 }}>

              <div className="form-group row">
                <label htmlFor="example-text-input" className="col-md-2 col-form-label">نام</label>
                <div className="col-md-10">
                  <input
                    className={
                      props.errors.name && props.touched.name
                        ? "form-control  is-invalid"
                        : "form-control"
                    }
                    type="text"
                    value="Artisanal kale"
                    id="example-text-input"
                    placeholder="نام را وارد کنید"
                    value={props.values.name}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    name="name" />
                </div>

              </div>
              <div className="form-group row errorStyle">
                {props.errors.name && props.touched.name ? <div id="feedback" className="feedbackStyle col-md-4">{props.errors.name}</div> : null}

              </div>

              <div className="form-group row">

                <label htmlFor="example-text-input" className="col-md-2 col-form-label">نام خانوادگی </label>
                <div className="col-md-10">
                  <input
                    className={
                      props.errors.family && props.touched.family
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                    type="text"
                    value="Artisanal kale"
                    id="example-text-input"
                    placeholder="نام خانوادگی را وارد کنید"
                    value={props.values.family}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    name="family" />
                </div>

              </div>
              <div className="form-group row errorStyle">
                {props.errors.family && props.touched.family ? <div id="feedback" className="feedbackStyle col-md-4">{props.errors.family}</div> : null}

              </div>

              <div className="form-group row">

                <label htmlFor="example-text-input" className="col-md-2 col-form-label">کدملی</label>
                <div className="col-md-10">
                  <input
                    className={
                      props.errors.natiaonCode && props.touched.natiaonCode
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                    type="text"
                    maxLength="11"
                    value="Artisanal kale"
                    id="example-text-input"
                    placeholder="کدملی را وارد کنید"
                    value={props.values.natiaonCode}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    name="natiaonCode" />
                </div>

              </div>
              <div className="form-group row errorStyle">
                {/* {props.errors.natiaonCode && <div id="feedback" className="feedbackStyle col-md-4">{props.errors.natiaonCode}</div>} */}
                {props.errors.natiaonCode && props.touched.natiaonCode ? <div id="feedback" className="feedbackStyle col-md-4">{props.errors.natiaonCode}</div> : null}


              </div>

              <div className="form-group row">
                <label htmlFor="example-text-input" className="col-md-2 col-form-label">جنسیت</label>
                <div className="col-md-10" style={{ display: 'flex' }}>
                  <div>
                    <input
                      className="form-check-input radioButtonStyle"
                      type="radio"
                      name="gender"

                      value="0"
                      checked={props.values.gender === "0"}
                      value={props.values.gender}

                      onChange={() => props.setFieldValue("gender", "0")}
                      onBlur={props.handleBlur}
                      style={{ width: 20, height: 20 }}
                    />
                    <label className="form-check-label radioLabel" htmlFor="exampleRadios1">
                      مرد
            </label>
                  </div>
                  <div>
                    <input
                      className="form-check-input radioButtonStyle"
                      type="radio"
                      name="gender"
                      style={{ width: 20, height: 20 }}
                      value="1"
                      checked={props.values.gender === "1"}
                      value={props.values.gender}

                      onChange={() => props.setFieldValue("gender", "1")}
                      onBlur={props.handleBlur}
                    />
                    <label className="form-check-label radioLabel" htmlFor="exampleRadios2">
                      زن
          </label>
                  </div>

                </div>




              </div>
              <div className="form-group row errorStyle">
                {props.errors.gender && props.touched.gender ? <div id="feedback" className="feedbackStyle col-md-4">{props.errors.gender}</div> : null}
              </div>

              <div className="form-group row">
                <label htmlFor="example-text-input" className="col-md-2 col-form-label"> آدرس ایمیل</label>
                <div className="col-md-10">
                  <input
                    className={
                      props.errors.email && props.touched.email
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                    type="text"
                    value="Artisanal kale"
                    id="example-text-input"
                    placeholder="نام را وارد کنید"
                    value={props.values.email}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    name="email" />
                </div>
              </div>
              <div className="form-group row errorStyle">
                {props.errors.email && props.touched.email ? <div id="feedback" className="feedbackStyle col-md-4">{props.errors.email}</div> : null}

              </div>
              <div className="divBtnSave">
                <div>
                  <button
                    className="btn btn-lg btn-success btn-block col-md-11" type="submit">ذخیره  </button>
                </div>
                <div>
                  <Link className="btn btn-lg btn-danger btn-block col-md-11 divBtnSaveLink" to='/persons'>
                    انصراف
                 </Link>
                </div>


              </div>

            </form>


          )}
        </Formik>
        <NotificationContainer />
      </div>
    </div>

  );
}

