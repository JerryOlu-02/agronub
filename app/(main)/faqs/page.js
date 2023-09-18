import Faqs from '@/components/FAQS/Faq';
import { FAQ_QUESTIONS } from '@/utils/objects';

async function getQuestions() {
  return {
    FAQ_QUESTIONS,
  };
}

export default async function FaqsPage() {
  const { FAQ_QUESTIONS } = await getQuestions();

  return (
    <main>
      <Faqs data={FAQ_QUESTIONS} />
    </main>
  );
}
