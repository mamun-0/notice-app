import React from 'react';
import MenuItem from './MenuItem';
import './navbar.style.css';
import DROPDOWN_2_1 from './dopdown-2-1';
import DROPDOWN_2_2 from './dropdown-2-2';
import DROPDOWN_3_1 from './dropdown-3-1';
import ASSIGN_DROPDOWN from './AssignDropdown/assignmetDropdown';
import logo from '../../media/fabicon/logo-1.png';
import { HashRouter, Link } from 'react-router-dom';
class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
      Items: MenuItem,
      dropdown2_1: DROPDOWN_2_1,
      dropdown2_2: DROPDOWN_2_2,
      dropdown3_1: DROPDOWN_3_1,
      assignmentDropdown: ASSIGN_DROPDOWN,
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
              <img className='main-logo' src={logo} alt='Home Icon' />
            </Link>
          </div>
          <ul
            className={
              this.state.clicked ? 'nav-links nav-active' : 'nav-links'
            }
          >
            <li>
              <div className='dropdown'>
                <div className='dropbtn'>Online Classes</div>
                <div className='dropdown-one'>
                  <div id='link1' className='dItem'>
                    <p className='year_sem'>2-1</p>
                    <div className='dropdown-two'>
                      {this.state.dropdown2_1.map(({ id, title, url }) => (
                        <div key={id} className='dItem'>
                          <Link to={url}>{title}</Link>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div id='link1' className='dItem'>
                    <p className='year_sem'>2-2</p>
                    <div className='dropdown-two'>
                      {this.state.dropdown2_2.map(({ id, title, url }) => (
                        <div key={id} className='dItem'>
                          <Link to={url}>{title}</Link>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div id='link1' className='dItem'>
                    <p className='year_sem'>3-1</p>
                    <div className='dropdown-two'>
                      {this.state.dropdown3_1.map(({ id, title, url }) => (
                        <div key={id} className='dItem'>
                          <Link to={url}>{title}</Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className='dropdown'>
                <div className='dropbtn'>{`Assingment & Lab`}</div>
                <div className='dropdown-one'>
                  {this.state.assignmentDropdown.map((item) => (
                    <div id='link1' className='dItem' key={item.id}>
                      <Link to={item.url}>{item.title}</Link>
                    </div>
                  ))}
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
