


import React, { useState, useEffect, useContext } from "react";
import { render } from "react-dom";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import ReactTable from "react-table";
import "react-table/react-table.css";
import './gridStyle.css'
import axios from 'axios';
import { Redirect, NavLink } from 'react-router-dom';
import insWebApi1 from '../../configs/instanseWebApi1_config';
import { PersonContext } from '../../conext/PersonContext';
import {FaUserPlus,FaFileExport} from 'react-icons/fa';



export default function ListPersons(props) {
  const personContext = useContext(PersonContext);
  
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [pages, setPages] = useState(0);
  const [size, setSize] = useState(5);



  function exportToExell() {
    
    //setTt(true);
    return <Redirect to="/add-person" />

  }

  // function exportBtnInHeader() {
  //   const btnList = <button type="button" class=" exportBtn btn btn-info " onClick={exportToExell}>
  //     {/* <i className="zmdi zmdi-blur-linear zmdi-hc-fw" /> */}
  //    ثبت پرسنل جدید
  //   </button>
  //   return <div className="divBtn">{btnList}</div>;

  // };

  function TitleHeader() {
    const titleHeader = <h5 className="font-weight-light">
      لیست  پرسنل آموزشگاه کارا
        </h5>
    return <div className="headerTable"> {titleHeader}  </div>;
  };
  function deletePerson(person) {
    // setLoading(true);
    // let _url = '/persons/' +
    //    person.row.Id
    // insWebApi1.delete(_url)
    //   .then(response => {
    //     if (response.data.Result) {
    //       personContext.dispatch({ type: 'DeletedPerson', Id: person.row.Id })
    //       setLoading(false);
    //     }else{
    //       setLoading(false);
    //       NotificationManager.error(' حذف  با خطا مواجه شد  ');
       
    //     }
       
        
    //   })
    //   .catch(error => {
    //     setLoading(false);
    //     NotificationManager.error(' بارگزاری لیست با خطا مواجه شد  ');
    //   });
  }
  function editPerson(person) {
    
  }

  //function DisplayData() { }

  if (personContext.persons == null) {
    return null;
  } else {
   
    return (
      <div className="divContainerListPersons">
        <ReactTable
          data={personContext.persons}
          pages={pages}
          filterable

          columns={[
            {
              Header: TitleHeader,
              columns: [
                {
                  Header: "کد",
                  accessor: "Id",
                  width: 50,
                  filterable: false,

                },
                {
                  Header: "نام ",
                  accessor: "Name",
                  width: 150,

                  filterable: false,
                },
                {
                  Header: "نام خانوادگی",
                  accessor: "Family",
                  filterable: false,


                },
                {
                  Header: " کدملی",
                  accessor: "NationalCode",
                  filterable: false,

                }

              ]
            },
            {
              // Header: exportBtnInHeader,//TitleHeader,
              Header: <div className="headerTable">
                <NavLink to="/add-person" activeClassName="activeItem">
                <FaUserPlus title=" افزودن پرسنل جدید" size={35} color="white" className="iconStyle"/>
                </NavLink>
                <FaFileExport title=" خروجی به صورت فایل اکسل" size={35} color="white" className="iconStyle"/>

                </div>,

              columns: [

                {
                  Header: " عملیات",
                  accessor: "Id",
                  Cell: ({ row }) => (<div>
                    <button className="btn btn-info" style={{ fontSize: 12, marginRight: 10 }} onClick={() => editPerson({ row })}>ویرایش</button>
                    <button className="btn btn-danger" style={{ fontSize: 12, marginRight: 10 }} onClick={() => deletePerson({ row })}>حذف</button>
                  </div>
                  ),
                  width: 160,
                  filterable: false,
                }

              ]
            },
          ]}


          defaultSorted={[
            {
              id: "age",
              desc: true
            }
          ]}
          defaultPageSize={5}
          minRows={3}
          className="-striped -highlight"
          loading={loading}
          showPagination={true}
          showPaginationTop={false}
          showPaginationBottom={true}
          pageSizeOptions={[5, 10, 20, 25, 50]}
          showPageJump={true}
          collapseOnSortingChange={true}
          collapseOnPageChange={true}
          collapseOnDataChange={true}
          freezeWhenExpanded={true}
          sortable={true}
          multiSort={true}
          resizable={true}
          // filterable= {true}
          defaultSortDesc={true}
          manual
          onFetchData={(state, instance) => {
            setLoading(true)
            let sendPagecurrent = Number(state.page) + 1;

            let _url = '/persons?' +
              'PageSize=' + state.pageSize +
              '&CurrentPage=' + sendPagecurrent
            insWebApi1.get(_url)
              .then(response => {
                personContext.dispatch({ type: 'GetListPersons', persons: response.data.Result })
                // setData(response.data.Result)
              // setPersonsData(personContext.persons)
                setLoading(false);
                setPages(10);
              })
              .catch(error => {
                setLoading(false);
                NotificationManager.error(' بارگزاری لیست با خطا مواجه شد  ');
              });
          }}
          previousText='صفحه قبلی'
          nextText='صفحه  بعد'
          loadingText='منتظر بمانید...'
          noDataText='دیتای برای نمایش وجود ندارد'
          pageText='صفحه'
          ofText='از'
          rowsText='رکورد'
          style={{ borderColor: '#2196F3', fontFamily: 'irs', fontSize: 14 }}
        />
        <NotificationContainer />
      </div>
    );
  }

}


