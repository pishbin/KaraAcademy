import React from 'react';
import SampleTeacher from './sampleTeacher/SampleTeacher';
import t1 from '../../assets/pic/teacher/61.jpg';
import t2 from '../../assets/pic/teacher/51.jpg';
import t3 from '../../assets/pic/teacher/91.jpg';
import t4 from '../../assets/pic/teacher/101.jpg';
import './sampleTeachers.css';

//import logoImg from '../../assets/pic/logo3.png'
export default function SampleTeachers(params) {
    return (
        <div className="bestTeacherStyle">
          <SampleTeacher pic={t1}/>
          <SampleTeacher pic={t3}/>
          <SampleTeacher pic={t2}/>
          <SampleTeacher pic={t4}/>
        </div>
    );
    
}