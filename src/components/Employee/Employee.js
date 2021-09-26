import React from 'react';
import './Employee.css'
const Employee = (props) => {
    const { name, img, role, age, country, sallary} = props.employee;
    return (
        <div>
            <div className="col empoloyee">
                <div className="card empolpyee-body">
                    <img src={img} className="card-img-top card-img" alt=""/>
                     <div className="card-body">
                         <h5 className="card-title">Name : {name}</h5>
                         <h6 className="card-text">Role : {role} </h6>
                         <h6 className="card-text">Age : {age}</h6>
                         <h6 className="card-text">Country : {country}</h6>
                         <h6 className="card-text">Sallay : {sallary}</h6>
                    </div>
                    <button type="button" className="btn btn-primary">Primary</button>
                </div>
            </div>
        </div>
    );
};

export default Employee;