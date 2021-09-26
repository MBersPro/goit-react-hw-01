import React from 'react';
import PropTypes from 'prop-types'
import {li, online, offline, img } from './FriendsListItem.module.css'
const FriendListItem = (props) => {
    return (
        <li className={li}>
            <span className={props.isOnline ? online : offline}></span>
            <img className={img} src={props.avatar} alt={props.name} width="48" />
            <p>{props.name}</p>
        </li>
    );
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.string.isRequired
}
export default FriendListItem;