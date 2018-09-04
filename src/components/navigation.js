import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import { fontFamily, cream, neonGreen, darkBlue } from '../layouts/variables';
import './navigation.css';


const List = styled.ul`
  background: ${darkBlue};
  list-style: none;
  font-family: ${fontFamily};
  max-width: 90%;
  display: flex;
  margin-top: 20px;
  padding: 10px 0;
  justify-content: flex-end;
`;

const ListItem = styled.li`
  color: ${ cream };
  padding: 0 10px;
  margin-bottom: 0; 
`;

const Slash = styled.span`
  color: ${ neonGreen };
  font-weight: 700;
`

const LinkStyle = {
  color: cream,
  textDecoration: "none",
  position: 'relative'
};


const Navigation = () => {
  return <div style={{ position: "fixed", right: "5%", top:"5%", zIndex: '50' }}>
      <List>
        <ListItem>
          <Link to="/about/" style={LinkStyle} activeClassName="active">
            About
          </Link>
        </ListItem>

        <Slash> / </Slash>

        <ListItem>
          <Link to="/work/" style={LinkStyle} activeClassName="active">
            Work
          </Link>
        </ListItem>

        <Slash> / </Slash>

        <ListItem>
          <Link to="/notes/" style={LinkStyle} activeClassName="active">
            Notes
          </Link>
        </ListItem>
      </List>
    </div>
}

export default Navigation
