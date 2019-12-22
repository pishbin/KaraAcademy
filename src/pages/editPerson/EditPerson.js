
import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import './editPerson.css';

const schema = yup.object().shape({
  name: yup.string().required('ورود نام  الزامیست'),
  family: yup.string().required('ورود نام خانوادگی الزامیست'),
  natiaonCode: yup.string().required('ورود کدملی الزامیست'),
  gender: yup.bool().required(' تعیین جنسیت  الزامیست'),
  email: yup.string().required('ورود ایمیل الزامیست').email('فرمت ایمیل صحیح نیست'),

});
export default function EditPerson(props) {
  function sendtoApi(values) {
    console.log('sendtoApi');
    console.log(values);

  }
  const {person}=props;
  return (
   
    <div className="card">
      
        <h3 className="card-header"> فرم ویرایش پرسنل   </h3>
     

      <div className="card-block cardblockStyle">
        <Formik
          initialValues={{ name: person.name, family: person.family, natiaonCode: person.natiaonCode, gender: person.gender, email: person.email }}
          onSubmit={(values) => sendtoApi(values)}
          validationSchema={schema}
        >
          {props => (


            <form className="form-signin" onSubmit={props.handleSubmit} style={{ padding: 10 }}>

              <div className="form-group row">

                <label for="example-text-input" className="col-md-2 col-form-label">نام</label>
                <div className="col-md-6">
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
                {props.errors.name && <div id="feedback" className="feedbackStyle col-md-4">{props.errors.name}</div>}

              </div>


              <div className="form-group row">

                <label for="example-text-input" className="col-md-2 col-form-label">نام خانوادگی </label>
                <div className="col-md-6">
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
                {props.errors.family && <div id="feedback" className="feedbackStyle col-md-4">{props.errors.family}</div>}

              </div>


              <div className="form-group row">

                <label for="example-text-input" className="col-md-2 col-form-label">کدملی</label>
                <div className="col-md-6">
                  <input
                    className={
                      props.errors.natiaonCode && props.touched.natiaonCode
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                    type="text"
                    value="Artisanal kale"
                    id="example-text-input"
                    placeholder="کدملی را وارد کنید"
                    value={props.values.natiaonCode}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    name="natiaonCode" />
                </div>
                {props.errors.natiaonCode && <div id="feedback" className="feedbackStyle col-md-4">{props.errors.natiaonCode}</div>}

              </div>

              <div className="form-group row">
                <label for="example-text-input" className="col-md-2 col-form-label">جنسیت</label>
                <div className="col-md-6">
                  <input
                    className={
                      props.errors.gender && props.touched.gender
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                    type="text"
                    value="Artisanal kale"
                    id="example-text-input"
                    placeholder="جنسیت را وارد کنید"
                    value={props.values.gender}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    name="gender" />
                </div>
                {props.errors.gender && <div id="feedback" className="feedbackStyle col-md-4">{props.errors.gender}</div>}

              </div>

              <div className="form-group row">

                <label for="example-text-input" className="col-md-2 col-form-label"> آدرس ایمیل</label>


                <div className="col-md-6">
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
                {props.errors.email && <div id="feedback" className="feedbackStyle col-md-4">{props.errors.email}</div>}

              </div>


              <button className="btn btn-lg btn-primary btn-block col-md-2 float-left" type="submit">ورود  </button>

            </form>


          )}
        </Formik>
      </div>
    </div>

  );
}

