import React from 'react'; // imr
import data from '../data';
import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';


const App = () => { // slr
    return (
        <>
            <Profile
                name={data.user.name}
                tag={data.user.tag}
                location={data.user.location}
                avatar={data.user.avatar}
                stats={data.user.stats}
            />
            <Statistics
                title="Upload stats" stats={data.statisticalData}

            />
        </>
    );
}

export default App;