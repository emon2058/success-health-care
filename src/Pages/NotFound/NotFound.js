import React from 'react';
const NotFound = () => {
    return (
        <div className="container my-4
        mx-auto">
            <h1>404 Not Found</h1>
            <h3>This site can’t be reached</h3>
            <ul>
                <li>Checking the connection</li>
                <li>If the content has moved, add a redirect</li>
                <li>URL is unknown</li>
            </ul>
        </div>
    );
};

export default NotFound;