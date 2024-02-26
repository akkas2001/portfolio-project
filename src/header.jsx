import "./header.css"
function Header() {
    return (
        <div className="header-class">
            <div className="header">
                <div className="left-header">
                    <h2>A<sup>2</sup> Academy</h2>
                    <div></div>
                </div>
                <div className="right-header">
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Courses</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header