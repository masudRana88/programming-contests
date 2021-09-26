import React from 'react';
import './Employee.css'
const Employee = (props) => {
    const { name, img, role, age, country, sallary} = props.employee;
    return (
        <div>
            <div className="col empoloyee shadow">
                <div className="card empolpyee-body">
                    <img src={img} className="card-img-top card-img" alt=""/>
                     <div className="card-body">
                         <h5 className="card-title">Name : {name}</h5>
                         <h6 className="card-text">Role : {role} </h6>
                         <h6 className="card-text">Age : {age}</h6>
                         <h6 className="card-text">Country : {country}</h6>
                         <h6 className="card-text">Sallay : {sallary}</h6>
                         <p className="card-text">
                            <a href="https://github.com/"><i className="fab fa-github social-icone"></i></a>
                            <a href="https://twitter.com/?lang=en"><i className="fab fa-twitter social-icone"></i></a>
                            <a href="https://www.facebook.com/"><i className="fab fa-facebook-square social-icone"></i></a>
                         </p>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={()=> props.addMember(props.employee)}><i className="fas fa-user-plus"></i> Add Member</button>
                </div>
            </div>
        </div>
    );
};

export default Employee;