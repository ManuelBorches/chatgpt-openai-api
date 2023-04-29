import {
  SunIcon,
  BoltIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';
import {
  examplesData,
  capabilitiesData,
  limitationsData,
} from '../data/infoItemsData';
import { InfoGuide } from './InfoGuide';

export const InfoPromptGuides = () => {
  return (
    <div className="flex space-x-3">
      <InfoGuide Icon={SunIcon} title="Examples" infoItems={examplesData} />
      <InfoGuide
        Icon={BoltIcon}
        title="Capabilities"
        infoItems={capabilitiesData}
      />
      <InfoGuide
        Icon={ExclamationTriangleIcon}
        title="Limitations"
        infoItems={limitationsData}
      />
    </div>
  );
};
