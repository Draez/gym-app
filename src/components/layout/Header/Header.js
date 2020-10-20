import React from 'react'

export const Header = () => {
    return (
        <div className="header">
            <div className="header__wrapper">
                <div className="header__wrapper__logo">
                    <a href="/"><p className="logo">Fitness App</p></a>
                </div>

                <div className="header__wrapper__items">
                    <span className="profile__name">Oskar Lehtonen (Draez)</span>
                </div>
            </div>
        </div>
    )
}
