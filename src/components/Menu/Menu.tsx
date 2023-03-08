import "./Menu.scss"

function Menu() {
    return (
        <menu className="menu">
            <div className="sorting">
                <ul className="sorting__genres">
                    <li>ALL</li>
                    <li>COMEDY</li>
                    <li>DOCUMENTARY</li>
                    <li>HORROR</li>
                    <li>CRIME</li>
                </ul>
                <div className="options">
                    <p className="options__text options__text--sorting">SORT BY</p>
                    <p className="options__text options__text--sorting-option">RELEASE DATE</p>
                    <span className="icon-arrow-down"></span>
                </div>
            </div>
            <hr className="menu__line--bold"/>
            <hr className="menu__line--thin"/>
        </menu>
    );
}

export default Menu;
