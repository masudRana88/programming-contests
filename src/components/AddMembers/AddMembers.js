import React from 'react';
import './AddMembers.css'
const AddMembers = (props) => {
    const {members} = props;
    let  totalCost = 0;
    for(const member of members){
        totalCost = totalCost + parseInt(member.sallary);
    }
    return (
        <div>
            <h4 className="text-heighlight"><i className="fas fa-user user-icons"> </i> Empoloyee Added : {props.members.length}</h4>
            <h5 className="text-heighlight">Total Cost $ {totalCost}</h5>
            {
                members.map(member => <h6 key={member.id} >{member.name}</h6> )
            }
        </div>
    );
};

export default AddMembers;