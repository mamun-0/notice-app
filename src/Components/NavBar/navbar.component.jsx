import React from "react";
import MenuItem from "./MenuItem";
import DROPDOWN_2_1 from "./dopdown-2-1";
import DROPDOWN_2_2 from "./dropdown-2-2";
import "./navbar.style.css";
import logo from "../../media/fabicon/logo.jpg";
import { HashRouter, Link } from "react-router-dom";
class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
      Items: MenuItem,
      dropdown2_1: DROPDOWN_2_1,
      dropdown2_2: DROPDOWN_2_2,
    };
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
            className={
              this.state.clicked ? "nav-links nav-active" : "nav-links"
            }>
            <li>
              <div class='dropdown'>
                <div class='dropbtn'>Online Classes</div>
                <div class='dropdown-one'>
                  <div id='link1' class='dItem'>
                    <p className='year_sem'>2-1</p>
                    <div class='dropdown-two'>
                      {this.state.dropdown2_1.map(({ id, title, url }) => (
                        <div key={id} class='dItem'>
                          <Link to={url}>
                            {title}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div id='link1' class='dItem'>
                    <p className='year_sem'>2-2</p>
                    <div class='dropdown-two'>
                      {this.state.dropdown2_2.map(({ id, title, url }) => (
                        <div key={id} class='dItem'>
                          <Link to={url}>
                            {title}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
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
