import ctScan from '../../assets/ct-scan.jpg'
import ultrasound from '../../assets/ultrasound.jpg'
import xray from '../../assets/xray.jpg'
import cXray from '../../assets/cXray.jpg'
import mri from '../../assets/mri.jpg'

export const DummyImaging = [
    {
        id: 1,
        name: 'CT Scan',
        description: 'Computed tomography scan combines a series of X-ray images taken from different angles ',
        image: ctScan,
        price: '1000'
    },
    {
        id: 2,
        name: 'Ultrasound',
        description: 'Uses high-frequency sound waves to create images of organs, tissues, and blood flow inside the body.',
        image: ultrasound,
        price: '500'
    },
    {
        id: 3,
        name: 'X-ray',
        description: 'Traditional imaging technique that uses electromagnetic radiation to view bones and some internal organs.',
        image: xray,
        price: '300'
    },
    {
        id: 4,
        name: 'Contrast X-ray',
        description: 'Special X-ray examination using contrast material to enhance visibility of specific areas in the body.',
        image: cXray,
        price: '600'
    },
    {
        id: 5,
        name: 'MRI',
        description: 'Magnetic Resonance Imaging uses powerful magnets and radio waves to create detailed images of organs and tissues.',
        image: mri,
        price: '2000'
    }
];