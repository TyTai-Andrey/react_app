import React, {Fragment} from 'react';
import Popular from '../components/Popular';
import News from '../components/News';
import Partners from '../components/Partners';


function Home() {
    return (
        <Fragment>
            <Popular/>
            <News/>
            <Partners/>
        </Fragment>
    )
}

export default Home