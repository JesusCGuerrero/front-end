import React from 'react';

import RecipeList from './RecipeList'

const Dashboard = () => {

    const handleLogout = () => {

    }

    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
            <RecipeList />
        </div>
    )
}

export default Dashboard