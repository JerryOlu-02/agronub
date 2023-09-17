import About from '@/components/AboutPage/About';
import { BLOG_DATA } from '@/utils/objects';

async function getBlogs() {
  return { BLOG_DATA };
}

export default async function AboutPage() {
  const { BLOG_DATA } = await getBlogs();

  return (
    <main>
      <About blogs={BLOG_DATA} />
    </main>
  );
}
