import React from 'react';
import {Main, Sidebar} from '../utils/barrelComponents.js'
import "bootstrap/dist/css/bootstrap.min.css";

let MainView = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                <Main/>
                    </div>
                        <div className="col-md-6">
                <Sidebar/>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default MainView;