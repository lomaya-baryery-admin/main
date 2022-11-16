import { Link, To } from 'react-router-dom';
import { ICellTextProps } from './cell-text';
import cn from 'classnames';

interface ICellLinkProps extends Omit<ICellTextProps, 'type'> {
  routeTo: To;
}

export const CellLink: React.FC<ICellLinkProps> = ({ text, routeTo, extClassName }) => {
  return (
    <Link
      to={routeTo}
      className={cn(extClassName, 'text', 'text_type_main-default', 'spreadsheetLink')}
    >
      {text}
    </Link>
  );
};
