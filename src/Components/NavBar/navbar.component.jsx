import React from "react";
import MenuItem from "./MenuItem";
import "./navbar.style.css";
import logo from "../../media/fabicon/logo.jpg";
import { HashRouter,Link } from "react-router-dom";
class NavBar extends React.Component {
  constructor() {
    super();
    this.state = { clicked: false, Items: MenuItem };
  }
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <HashRouter basename='/'>
      <nav>
        <div className='logo'>
          <Link to='/'>
            <img src={logo} alt='Home Icon' />
          </Link>
        </div>
        <ul
          className={this.state.clicked ? "nav-links nav-active" : "nav-links"}>
            <li className='online-class'>
            <div className='dropdown'>
              <button className='dropbtn'>Online Classes</button>
              <div className='dropdown-content'>
                <Link to='/math-videos'>Math</Link>
                <Link to='/datastructure-videos'>Data Structure And Algorithm</Link>
                <Link to='/statistics-videos'> Statistics</Link>
                <Link to='/javatechnology-videos'>Java Technology</Link>
              </div>
            </div>
          </li>
          {this.state.Items.map((item) => (
            <li key={item.id}>
              <Link to={item.url}>{item.title}</Link>
            </li>
          ))}
          
        </ul>
        <div className='burger' onClick={this.handleClick}>
          <div className='line-1'></div>
          <div className='line-2'></div>
          <div className='line-3'></div>
        </div>
      </nav>
      </HashRouter>
    );
  }
}
export default NavBar;
