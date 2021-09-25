import React from 'react';
import PropTypes from 'prop-types'
import Profile from '../profile/Profile';

const TransactionHistory = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {props.items.map(item => (
                    <tr>
                       <td>{item.type}</td>
                        <td>{item.amount}</td>
                        <td>{item.currency}</td> 
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

Profile.PropTypes = {
    items: PropTypes.array.isRequired
}

export default TransactionHistory;