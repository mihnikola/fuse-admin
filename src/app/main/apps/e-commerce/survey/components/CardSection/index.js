import Divider from '@mui/material/Divider';
import { Children } from 'react';

const CardSection = ({ title, children }) => {
  return (
    <div className="mt-48">
      <Divider textAlign="left">{title}</Divider>

      {Children.map(children, (child) => (
        <div key={`${child.key}-card`} className="mt-32">
          {child}
        </div>
      ))}
    </div>
  );
};
export default CardSection;