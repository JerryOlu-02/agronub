import HomePage from '@/components/HomePage/Home';
import Slider from '@/components/Slider';
import {
  SLIDER_DATA,
  WHY_CHOOSE_DATA,
  LAST__SLIDER_DATA,
} from '@/utils/objects';

async function getData() {
  return { SLIDER_DATA };
}

async function getWhyChooseData() {
  return { WHY_CHOOSE_DATA };
}

async function getLastSliderData() {
  return { LAST__SLIDER_DATA };
}

export default async function Home() {
  const { SLIDER_DATA: data } = await getData();
  const { WHY_CHOOSE_DATA: whyData } = await getWhyChooseData();
  const { LAST__SLIDER_DATA: sliderData } = await getLastSliderData();

  return (
    <main>
      <Slider data={data} />
      <HomePage data={whyData} sliderData={sliderData} />
    </main>
  );
}
