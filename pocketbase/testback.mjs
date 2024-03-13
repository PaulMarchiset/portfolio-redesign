import { AllCelestial } from './backend';

try {
    const records = await AllCelestial();
    console.log(records);
} catch (e) {
    console.error(e);
}