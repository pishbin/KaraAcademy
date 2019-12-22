import React, { Fragment } from 'react';
import SidebarCom from "../../sections/sidebar/Sidebar";
import FooterSection from "../../sections/footer_section/FooterSection";
import Login from '../login/LoginPage';
import LoginformWithTemp from '../login/LoginForm2';
import './adminPanel.css';
import { Switch, Route } from 'react-router-dom';
import AddPerson from '../addPerson/AddPerson';
import EditPerson from '../editPerson/EditPerson';
import ListPersons from '../listPerson/ListPersons';
import Home from '../home/Home';
import About from '../about/About';
import PersonContextProvider from '../../conext/PersonContext';

export default function AdminPanel(props) {
    console.log('adminpanel');
    console.log(props.children);
    return (
        
        <Fragment>
            <SidebarCom />
            <PersonContextProvider>
            <div className="container-fluid rtl containerStyle" >
                <div className="container" style={{ marginTop: 50 }}>
                    <div className="childCardStyle">
                        <Switch>
                            <Route path='/' exact component={Home} />
                            <Route path='/add-person' component={AddPerson} />
                            <Route path='/edit-person' component={EditPerson} />
                            <Route path='/persons' component={ListPersons} />
                            <Route path='/reports' component={AddPerson} />
                            <Route path='/messages' component={EditPerson} />
                            <Route path='/about' component={About} />
                        </Switch>
                    </div>
                </div>
            </div>
            </PersonContextProvider>
            <FooterSection />
        </Fragment>
       
    );

}

