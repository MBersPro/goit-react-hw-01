import React from 'react';
import PropTypes from 'prop-types'
import { container, title, ul, li, span } from './Statistics.module.css'

const Statistics = (props) => {
    return (
        <section className={container}>
            {props.title ? <h2 className={title}>{props.title}</h2> : null}
            <ul className={ul}>
                {props.stats.map((item) => 
                    <li className={li} key={item.id}>
                        <span className={span}>
                            {item.label}
                        </span>
                        <span className={span}>
                            {item.percentage}%
                        </span>
                    </li>   
                )}
            </ul>
        </section>
    );
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Statistics;