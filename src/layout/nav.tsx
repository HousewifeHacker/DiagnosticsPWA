import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  links: LinkInfo[]; 
}

const SideNav: React.FC<Props> = ({ links }) => {
  return (
    <div>
      {links.map(link => (
        <div key={link.path}><Link to={link.path}>{link.text}</Link></div>
      ))}
    </div>
  );
};

export default SideNav;