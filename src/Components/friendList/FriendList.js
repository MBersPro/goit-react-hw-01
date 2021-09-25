import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './friendListItem/FriendListItem';
const FriendList = (props) => (
    <ul>
        {props.friends.map(item => 
            <FriendListItem
                avatar={item.avatar}
                name={item.name}
                isOnline={item.isOnline}
                key={item.id}
            />
        )}
    </ul>
);

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object).isRequired
}
export default FriendList;