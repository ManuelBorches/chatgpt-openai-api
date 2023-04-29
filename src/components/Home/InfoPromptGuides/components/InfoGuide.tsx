import { type FC, type ElementType } from 'react';
import { formatInfoItem } from '../utils/formatInfoItem';

interface InfoPromptGuideProps {
  Icon: ElementType;
  title: string;
  infoItems: string[];
}

export const InfoGuide: FC<InfoPromptGuideProps> = ({
  Icon,
  title,
  infoItems,
}) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center mb-5">
        <Icon className="h-8 w-8" />
        <h2>{title}</h2>
      </div>

      <div className="space-y-2 flex flex-col">
        {infoItems.map((infoItem) => (
          <span key={infoItem} className="infoText">
            {formatInfoItem(title, infoItem)}
          </span>
        ))}
      </div>
    </div>
  );
};
