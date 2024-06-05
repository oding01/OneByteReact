import './Header.css';
import { memo } from 'react';

const Header = () => {
  return (
    <div className="Header">
      <h3>TODAY 🐳</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};

const memorizedHeader = memo(Header);

export default memorizedHeader;
