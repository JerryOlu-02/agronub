import HowItWorks from '@/components/HomeContent/HowItWorks';
import Slider from '@/components/Slider';
import { SLIDER_DATA } from '@/utils/objects';

async function getData() {
  return { SLIDER_DATA };
}

export default async function Home() {
  const { SLIDER_DATA: data } = await getData();

  return (
    <main>
      <Slider data={data} />
      <HowItWorks />
    </main>
  );
}
