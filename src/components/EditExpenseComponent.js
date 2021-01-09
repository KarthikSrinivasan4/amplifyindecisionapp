import React from 'react';

const EditExpenseComponent = (props) => {
    console.log(props);
    return (<div>Edit Expense Separate component for {props.match.params.val}</div>)
};

export default EditExpenseComponent;