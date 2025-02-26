import React from 'react';
import './Applications.css';
import SectionDisplay from './SectionDisplay';
import wineryImage from '../../assets/images/Winery.png';
import nurseryImage from '../../assets/images/Nursery.png';
import timberImage from '../../assets/images/Timber.png';
import forestImage from '../../assets/images/Forest.png';
import contructionImage from '../../assets/images/Construction.png';

const Applications = () => {
  const applications = [
    {
      id: 1,
      title: 'WINERY',
      image: wineryImage,
      position: 'left',
      heading: 'BETTER PERFORMANCE',
      content: `The EL800s is equivalent to diesel models in terms of power, compact dimensions and maneuverability. At the same time, the EL800s does its job emission-free and silent, properties that people and animals living for. Enloq Loaders® are equipped standard with a choice of AGM batteries or BYD® lithium-ion batteries with two powerful electric motors - 14 kW for the drive working hydraulics. With 40 L/min flow rate and dual motor all-wheel drive enable the Enloq series a premium pulling force, there is always enough power. Generally stronger than diesel equivalents.`,
      showBadge: false
    },
    {
      id: 2,
      title: 'NURSERIES',
      image: nurseryImage,
      position: 'right',
      heading: 'ACCURATE WORK',
      content: `Dual speeds can be selected to perform tasks more accurately and quickly. In work mode, the machine has a top speed of 10 km/h, the travel mode offers a top speed of 20 km/h. With a lifting height of 3.98 meters and a capacity of 800-1000 kg, the EL800s can be used comfortably when power is important. The EL800r has a lifting capacity of 800-1000 kg, a lifting height of 3.98 meters due to its telescopic boom and has been specially developed for extreme heavy work in construction, agriculture, tree care and earthmoving.`,
      showBadge: false
    },
    {
      id: 3,
      title: 'TIMBER INDUSTRIES',
      image: timberImage,
      position: 'left',
      heading: 'COMPACT DESIGN STABILITY AND MANEUVERABILITY',
      content: `The articulated pendulum system gives the Enloq Loaders® a lot of stability and agility in tight turns. The system ensures that all four wheels remain on the ground, even when working on uneven terrain. This makes it safe to work as there is always sufficient traction.`,
      showBadge: false
    },
    {
      id: 4,
      title: 'FORESTRY',
      image: forestImage,
      position: 'right',
      heading: 'CHARGING WHEN IT\'S NEEDED',
      content: `Enloq's BYD® lithium-ion phosphate batteries score higher than traditional lead-based batteries on their performance, fast charging times and the fact that the batteries last up to three times longer. All Enloq Loaders® are equipped with a universal charger, which uses a standard 230V power supply. Our chargers are available in different amperage rates, making it possible to charge a battery overnight or under 1.5 hours. We will be happy to define a solution for you.`,
      showBadge: false
    },
    {
      id: 5,
      title: 'CONSTRUCTION',
      image: contructionImage,
      position: 'left',
      heading: 'BYD® LITHIUM BLADE BATTERY TECHNOLOGY',
      content: `Enloq Loaders® offers high quality LFP (Lithium Ion Phosphate) batteries. These batteries on recharge create a lot of energy instantly and have the highest degree of safety compared to NMC and lead containing batteries. Enloq Loaders® lithium-ion phosphate batteries with a capacity of 17.7 kw/ 73.6V are fully charged in 5 hours @ 230V, at 380V fully charged in just 1.5 hours. A charge and discharge life rating of more than 3000 times with a 3 year warranty. One battery charge is sufficient to operate under normal conditions for 6 to 8 hours. So, there is more than enough energy to work all day long.`,
      showBadge: false
    }
  ];

  return <SectionDisplay items={applications} backgroundColor="#3c3c3c" />;
};

export default Applications;