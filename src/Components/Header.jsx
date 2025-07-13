import Button from "./Button.jsx"
function Header(){
    return(
        <header>
            <img src="" alt="" />
            <h1>MessageToSelf</h1>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Pricing</a></li>
                    <Button/>
                    <button>Log In</button>
                    <button className="createTC">Create Your Time Capsule</button>
                </ul>
            </nav>
        </header>
    )
}
export default Header