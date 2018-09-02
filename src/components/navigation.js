import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  font-family: 'Space Mono', monospace;
  max-width: 90%;
  display: flex;
  margin-top: 20px;
  justify-content: flex-end;
`;

const ListItem = styled.li`
  color: #f6f1d1;
  padding: 0 10px;
`;

const Slash = styled.span`
  color: #4cff00;
  font-weight: 700;
`

const LinkStyle = {
  color: "#f6f1d1",
  textDecoration: "none"
};


const Navigation = () => {
  return <div>
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
