import React from 'react';
import PropTypes from 'prop-types'

const FriendListItem = (props) => {
    return (
        <li>
            <span ></span>
            <img src={props.avatar} alt={props.name} width="48" />
            <p>{props.name}</p>
        </li>
    );
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}
export default FriendListItem;