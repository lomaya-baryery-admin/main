import React from 'react';
import { CircleWarningIcon, CircleCheckIcon, CircleStopIcon } from '../../../ui/icons';
import { IIconProps } from '../../../ui/icons/utils';
import { withTooltip } from '../../../ui/tooltip/tooltip';
import { IStatusIcons, IIconColors, TTaskStatus } from '../types';

interface Props {
  status: TTaskStatus;
  tooltipText: string;
}

export const StatusIcon: React.FC<Props> = ({ status, tooltipText }) => {
  const CircleWarningIconWithTooltip = withTooltip<IIconProps>(CircleWarningIcon);
  const CircleCheckIconWithTooltip = withTooltip<IIconProps>(CircleCheckIcon);
  const CircleStopIconWithTooltip = withTooltip<IIconProps>(CircleStopIcon);

  const statusIcons: IStatusIcons = {
    under_review: CircleWarningIconWithTooltip,
    approved: CircleCheckIconWithTooltip,
    declined: CircleStopIconWithTooltip,
  };

  const iconColors: IIconColors = {
    under_review: 'pending',
    approved: 'success',
    declined: 'error',
  };

  const IconComponent = statusIcons[status];

  return (
    <IconComponent type={iconColors[status]} size="24" tooltipText={tooltipText} tooltipEnabled />
  );
};
