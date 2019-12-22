import React from 'react';
import './sampleTeacher.css';

export default function SampleTeacher(props) {
  return (
   <div className="card-deck cardItem">
      <div className="card">
      <img className="card-img-top" src={props.pic} alt="Card image cap" />
      <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is a longer card with supporting text below</p>
          <p className="btn btn-primary float-right"><small>توضیحات بیشتر</small></p>
          <p className="btn btn-success float-left"><small> ثبت نام</small></p>
        </div>
      </div>
      </div>


      );
  
      
}