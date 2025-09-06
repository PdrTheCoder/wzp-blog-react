import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Pdr Blog</h1>
            <div className="links">
                <Link to="/">主页</Link>
                <Link to="/create">创建</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;