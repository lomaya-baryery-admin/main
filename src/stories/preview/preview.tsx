import { useState } from 'react';
import imageDefault from './image5.jpg';
import { ZoomIcon } from '../icons';
import styles from './preview.module.css'

interface IPreviewProps {
  image: string;
}

export const Preview = ({ image = imageDefault } : IPreviewProps) => {

  const [zoom, setZoom] = useState(true);

  const handler = () => {
    // eslint-disable-next-line no-unused-expressions
    zoom ? setZoom(false) : setZoom(true);
  };

  return(
    zoom ?
    <div style={{ backgroundImage: `url(${image})`}} className={styles.container} onMouseEnter={handler}>
      <ZoomIcon size="18" type="interface-white" />
    </div>
    : <div style={{ backgroundImage: `url(${image})`}} className={styles.container_full} onMouseLeave={handler} />
  )
};
