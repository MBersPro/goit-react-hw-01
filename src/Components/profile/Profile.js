import React from 'react'; //imr
import PropTypes from 'prop-types'
import {container, profile, img, upcontainer, name, some, downcontainer, li, topspan} from './Profile.module.css'


const Profile = (props) => {
    return (
        <div className={container}>
            <div className={profile}>
                <div className={upcontainer}>
                    <img className={img} src={props.avatar} alt="Аватар пользователя" width = "150px"/>
                    <p className={name}>{props.name}</p>
                    <p className={some}>@{props.tag}</p>
                    <p className={some}>{props.location}</p>
                </div>
                <ul className={downcontainer}>
                    {Object.entries(props.stats).map((key, value) =>
                        <li className={li}>
                            <span className={topspan}>{key}</span>
                            <span className={topspan}>{value}</span>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
}

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
};

export default Profile;