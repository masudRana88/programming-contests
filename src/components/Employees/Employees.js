import React, { useEffect, useState } from 'react';
import Employee from '../Employee/Employee';
import './Employees.css'
const Employees = () => {
    const [employees , setEmployee] = useState([]);
    useEffect(()=>{
        fetch('./fakedb.JSON')
        .then(res => res.json())
        .then(data => setEmployee(data))
    }, [])
    return (
        <div className="employees-container">
            <div className="container employee-container">
                
                <div className="row row-cols-1 row-cols-md-3 g-4">
                   {
                    employees.map(employee=> <Employee  key={employee.id} employee={employee}></Employee>)
                   } 
                </div>
            </div>
            <div className="add-member">
                <h3>hi</h3>
            </div>
        </div>
    );
};

export default Employees;