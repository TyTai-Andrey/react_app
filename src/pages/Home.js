import React, {Fragment} from 'react';
import Popular from '../components/Popular';
import News from '../components/News';


function Home() {
    return (
        <Fragment>
            <Popular/>
            <News/>
        </Fragment>
    )
}

export default Home