import React from 'react';
import PropTypes from 'prop-types'
import Profile from '../profile/Profile';
import { tr, th, table, td, tr2} from './TransactionHistory.module.css'

const TransactionHistory = (props) => {
    return (
        <table className={table}>
            <thead>
                <tr className={tr}>
                    <th className={th}>Type</th>
                    <th className={th}>Amount</th>
                    <th className={th}>Currency</th>
                </tr>
            </thead>
            <tbody>
                {props.items.map(item => (
                    <tr className={tr2}>
                       <td className={td}>{item.type}</td>
                        <td className={td}>{item.amount}</td>
                        <td className={td}>{item.currency}</td> 
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