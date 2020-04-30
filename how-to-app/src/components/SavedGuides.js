import React from 'react';
import {NavLink, Link} from 'react-router-dom';


function SavedGuides ({list}) {
    return(
        <div className ='saved-list'>
            <h3>My Saved Guides:</h3>
            {list.map(guide =>{
                return(
                    <NavLink
                    to={`/saved-guides/${guide}`}
                    key={guide.id}
                    activeClassName='saved-active'
                    >
                        <span className="saved-guide">{guide.title}</span>
                    </NavLink>
                )
            })}
        </div>
    )
}//closes component

export default SavedGuides;