import React from 'react';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__search">
                    <input type="text" placeholder="Search" className="sidebar__input"/>

                </div>
            </div>

            <div className="sidebar__threads">
                <div className="sidebar__bottom">

                </div>
            </div>
        </div>
    );
};

export default Sidebar;
