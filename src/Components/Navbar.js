import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Navbar(){
    return(
        <nav>
        <div>
            <ul id="navbar">
            
            <a href="#" class="logo" ><i class="fas fa-heartbeat"></i></a>
                <li>
                
                    <a className="active" href="index.html">Home</a></li>
                 
                <li><a href="index.html">Offers</a></li>
                <li><a href="index.html">Cart</a></li>
                <li><a href="index.html">Login</a></li>
                <li><a href="index.html">Contact</a></li>
            </ul>
        </div>
        </nav>
    )
}
export default Navbar;