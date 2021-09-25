import React from 'react';
import PropTypes from 'prop-types'

const Statistics = (props) => {
    return (
        <section>
            {props.title ? <h2>{props.title}</h2> : null}
            <ul>
                {props.stats.map((item) => 
                    <li key={item.id}>
                        <span>
                            {item.label}
                        </span>
                        <span>
                            {item.percentage}
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