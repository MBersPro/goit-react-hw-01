import React from 'react'; //imr
import PropTypes from 'prop-types'


const Profile = (props) => {
    return (
        <div>
            <div>
                <img src={props.avatar} alt="Аватар пользователя" />
                <p>{props.name}</p>
                <p>{props.tag}</p>
                <p>{props.location}</p>
            </div>
            <ul>
                {Object.entries(props.stats).map((key, value) =>
                    <li>
                        <span>{key}</span>
                        <span>{value}</span>
                    </li>
                )}
            </ul>
        </div>
    );
}

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.number.isRequired,
};

export default Profile;