import React from 'react';
import { Link } from 'react-router-dom'

class Navigation extends React.Component {

    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-sm bg-light navbar-light">
                    <Link to='/' className="navbar-brand">Home</Link>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link to='/samsung' className="nav-link">Samsung</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/nokia' className="nav-link">Nokia</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/mi' className="nav-link">Mi</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navigation