import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import { fontFamily, cream, neonGreen, darkBlue } from '../layouts/variables';
import './navigation.css';


const List = styled.ul`
  background: ${darkBlue};
  list-style: none;
  font-family: ${fontFamily};
  display: flex;
  margin-top: 20px;
  padding: 10px 0 10px 10px;
  justify-content: flex-end;
`;

const ListItem = styled.li`
  color: ${cream};
  padding: 0 3px;
  margin-bottom: 0;

  &:last-child:after {
    content: '';
  }

  &:after {
    content: '/';
    color: ${neonGreen};
    padding: 0 7px;
  }
`

const LinkStyle = {
  color: cream,
  textDecoration: "none",
  position: 'relative'
};


const navigationItems = ['About', 'Work', 'Contact'];

const renderNavItems = navigationItems.map( item => {
  return <ListItem key={item}>
    <Link to={`/${item.toLowerCase()}/`} style={LinkStyle} activeClassName="active">
      {item}
    </Link>
  </ListItem>
})

const Navigation = () => {
  return <div style={{ position: "fixed", right: "5%", top:"5%", zIndex: '50' }}>
      <List>
        { renderNavItems }
      </List>
    </div>
}

export default Navigation
