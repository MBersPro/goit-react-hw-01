import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './friendListItem/FriendListItem';
import {ul} from './FriendList.module.css'

const FriendList = (props) => (
    <ul className={ul}>
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