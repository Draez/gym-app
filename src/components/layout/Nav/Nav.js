import React from 'react'

export const Nav = () => {
    return (
        <nav className="sidebar-nav">
            <div className="sidebar-nav__wrapper">
                <div className="sidebar-nav__wrapper__items">
                    <ul>
                        <li>
                            <a href="add"><button className="default btn">Lisää nosto</button></a>
                        </li>
                        <li>
                            <a href="#">Katso nostot</a>
                        </li>
                        <li>
                            <a href="#">Jotain</a>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>
    )
}

