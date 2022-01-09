import {Link} from "react-router-dom";

const Header = () => {
    return ( 
        <>
        <h1>React Router Exercise</h1>
        <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/users">Users</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/comments">Comments</Link>
        </nav>
        </>
     );
}
 
export default Header;