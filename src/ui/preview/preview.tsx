import imageDefault from './image5.jpg';
import { ZoomIcon } from '../icons';
import styles from './preview.module.css';

interface IPreviewProps {
  image: string;
}

export const Preview = ({ image = imageDefault }: IPreviewProps) => (
  <div style={{ backgroundImage: `url(${image})` }} className={styles.container}>
    <div className={styles.overlay} />
    <span>
      <ZoomIcon type="interface-white" />
    </span>
  </div>
);
