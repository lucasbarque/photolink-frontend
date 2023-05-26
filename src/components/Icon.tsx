import iconSet from '@assets/selection.json';
import IcoMoon, { IconProps } from 'react-icomoon';

export const Icon: React.FC<IconProps> = (props) => (
  <IcoMoon iconSet={iconSet} {...props} />
);
