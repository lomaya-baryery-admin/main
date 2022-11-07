import { FC } from 'react';
import previewStyle from './ImagePreview.module.css';
import { ZoomIcon } from '../../ui/icons';

interface IImagePreviewProps {
  url: string;
  title: string;
}

export const ImagePreview: FC<IImagePreviewProps> = ({ url, title }) => (
  <div className={previewStyle.image__container}>
    <img src={url} alt={title} className={previewStyle.image} />
    <span className={previewStyle.image__icon}>
      <ZoomIcon onClick={() => {}} type="interface-white" />
    </span>
  </div>
);
