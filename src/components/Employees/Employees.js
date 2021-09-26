import React, { useEffect, useState } from 'react';
import AddMembers from '../AddMembers/AddMembers';
import Employee from '../Employee/Employee';
import './Employees.css'
const Employees = () => {
    // loade data
    const [employees , setEmployees] = useState([]);
    useEffect(()=>{
        fetch('./fakedb.JSON')
        .then(res => res.json())
        .then(data => setEmployees(data))
    }, []);
    // get added employee
    const [members, setMember] =useState([]);
    const addMember = (empoloyee) =>{
        const newMember = [...members];
        if(empoloyee){
            const exist = members.find(elemment => empoloyee.id === elemment.id);
            if(!exist){
                newMember.push(empoloyee)
            }
            else{
                alert('This Employee is already Added')
            }
        }
        setMember(newMember);
    }
    return (
        <div className="employees-container">
            <div className="container employee-container">
                
                <div className="row row-cols-1 row-cols-md-3 g-3">
                   {
                    employees.map(employee=> <Employee key={employee.id} employee={employee} addMember={addMember}></Employee>)
                   } 
                </div>
            </div>
            <div className="add-member">
                <AddMembers key={members.map(member=> member.id)} members={members}></AddMembers>
            </div>
        </div>
    );
};

export default Employees;