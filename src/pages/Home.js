import React, {Fragment} from 'react';
import Popular from '../components/Popular';
import New from '../components/New';


function Home() {
    return (
        <Fragment>
            <Popular/>
            <New/>
        </Fragment>
    )
}

export default Home