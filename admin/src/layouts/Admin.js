import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// children components
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';

// action creator
import fetchProfile from '../components/Header/_redux/profileAction'

// context
import { ProfileContext } from '../components/Context/ProfileContext';

function Admin() {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchProfile())
    }, [dispatch])

    const profileState = useSelector(state => state.profile);
    const { currentUser } = profileState;

    return (
        <ProfileContext.Provider value={currentUser}>
            <Router>
                <div id="App">
                    <Header />
                    <Main />
                </div>
            </Router>
        </ProfileContext.Provider>

    )
};

export default Admin;