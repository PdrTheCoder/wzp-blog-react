import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-core">
                <h1>Pdr's Blog</h1>
                <div className="links">
                    <Link to="/" className="snes-link">Home</Link>
                    {/* <Link to="/create">Create</Link> */}
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;