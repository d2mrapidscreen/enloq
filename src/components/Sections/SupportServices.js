import React from 'react';
import './Applications.css';
import SectionDisplay from './SectionDisplay';
import maintenanceImage from '../../assets/images/maintenance.png';
import genuinePartsImage from '../../assets/images/genuine_parts.png';
import servicesSupportImage from '../../assets/images/services_support.png';
import trainingGroupImage from '../../assets/images/training_group.png';

const SupportServices = () => {
  const supportItems = [
    {
      id: 1,
      title: 'MAINTENANCE',
      image: maintenanceImage,
      position: 'left',
      heading: 'MAINTENANCE',
      content: `The EL800s and EL400s models are easy to maintain due to easy-to-access service points. Hydraulic system and battery are freely accessible via the easy-to-open service covers. This ensures that daily checks and maintenance can be carried out quickly and safely.`,
      showBadge: false
    },
    {
      id: 2,
      title: 'GENUINE ENLOQ PARTS',
      image: genuinePartsImage,
      position: 'right',
      heading: 'GENUINE ENLOQ PARTS',
      content: `The usage of genuine Enloq parts ensures reliable, efficient and safe operation of your machine. We only use the best quality components and test them through our stringent R&D process well before we introduce into a new model. All these parts are vital for the best possible performance and minimizing downtime. Keeping your Enloq Loader® 100% original saves money for the owner because of reduced maintenance costs and results in a higher resale value.`,
      showBadge: false
    },
    {
      id: 3,
      title: 'SERVICE & SUPPORT',
      image: servicesSupportImage,
      position: 'left',
      heading: 'SERVICE & SUPPORT',
      content: `At Enloq Loaders® we offer support, service and high quality parts to protect the investment that you have made in Enloq machinery. Together with our service partners we are available to make sure that your machine performs in the best possible way. This increases your productivity and will result in an even better return on your investment.`,
      showBadge: false
    },
    {
      id: 4,
      title: 'TRAINING',
      image: trainingGroupImage,
      position: 'right',
      heading: 'TRAINING',
      content: `At Enloq Loaders® we know all about our machines. That is why we offer an extensive training program to our customers. Not only on the newest features or attachments, but also on how to service a machine to the highest standards. We install all machines and train you in its operation as part of your investment. We also create Youtube® content to assist.`,
      showBadge: false
    }
  ];

  return <SectionDisplay items={supportItems} backgroundColor="#3c3c3c" />;
};

export default SupportServices;