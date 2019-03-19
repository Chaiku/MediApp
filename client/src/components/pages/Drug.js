import React from 'react';
import { Link } from 'react-router-dom';

class Drug extends React.Component {
    render() {
        return (
            <div>

                <h2>Drug Page</h2>

                <li><Link to="/">Back to Landing</Link></li>

            </div>
        )
    }
}

export default Drug;