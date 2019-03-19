import React from 'react';
import { Link } from 'react-router-dom';

class Profile extends React.Component {
    render() {
        return (
            <div>

                <h2>Profile Page</h2>

                <li><Link to="/">Back to Landing</Link></li>
                <li><Link to="/drug">Forward to Drug</Link></li>

            </div>
        )
    }
}

export default Profile;