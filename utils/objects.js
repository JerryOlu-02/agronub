import Image1 from '@/assets/screen-bg-1.jpg';
import Image2 from '@/assets/screen-bg-2.jpg';
import Image3 from '@/assets/screen-bg-3.jpg';
import Farmer from '@/assets/investor.jpg';
import Investor from '@/assets/farmer.jpg';
import BlogImage1 from '@/assets/blog-img-1.jpg';
import BlogImage2 from '@/assets/blog-img-2.jpg';
import BlogImage3 from '@/assets/blog-img-3.jpg';

export const SLIDER_DATA = [
  {
    title: (
      <h2>
        Invest in a farmland by renting a portion and make <span>profit</span>{' '}
        off it
      </h2>
    ),
    content:
      'AgroNub presents a transparent investment model where people can invest in farms and monitor the progress of their investment. The investment appears in form of renting farm portions and monitoring the production process related to those portions.',
    image: Image1,
  },
  {
    title: (
      <h2>
        Monitor the production process on your portion of farmland{' '}
        <span>virtually</span>
      </h2>
    ),
    content:
      'With AgroNub, you get to watch how your money is working for you. AgroNub updates you through every part of the production process, shows you how much progress and impact your money has made. AgroNub is transparent and guides you through it all.',
    image: Image2,
  },
  {
    title: (
      <h2>
        Make <span>definite profit</span> definite profit from your farm portion
        at the end of production
      </h2>
    ),
    content: `What’s an investment without a profit? With AgroNub you know the least profit you could make of your investment at the end of a period. It can never be less, it can ony be more. Invest with Agronub and get your money’s worth and more.`,
    image: Image3,
  },
];

export const WHY_CHOOSE_DATA = [
  {
    number: '1',
    content:
      'Purus aenean in ornare tincidunt non phasellus nascetur malesuada urna. Pretium bibendum felis quis nunc, mauris mattis ut.',
  },
  {
    number: '2',
    content:
      'Purus aenean in ornare tincidunt non phasellus nascetur malesuada urna. Pretium bibendum felis quis nunc, mauris mattis ut.',
  },
  {
    number: '3',
    content:
      'Purus aenean in ornare tincidunt non phasellus nascetur malesuada urna. Pretium bibendum felis quis nunc, mauris mattis ut.',
  },
  {
    number: '4',
    content:
      'Purus aenean in ornare tincidunt non phasellus nascetur malesuada urna. Pretium bibendum felis quis nunc, mauris mattis ut.',
  },
  {
    number: '5',
    content:
      'Purus aenean in ornare tincidunt non phasellus nascetur malesuada urna. Pretium bibendum felis quis nunc, mauris mattis ut.',
  },
];

export const LAST__SLIDER_DATA = [
  {
    imageOne: Farmer,
    imageTwo: Investor,
    content:
      '“Vitae pretium aliquam volutpat donec. Nunc bibendum sagittis, vitae sagittis, quis vulputate nulla. Pellentesque volutpat vitae sem a eu arcu scelerisque vitae sem a eu arcu scelerisque.”',
    farmersName: (
      <p>
        - Kapersky Martins (<span>Farmer</span>)
      </p>
    ),
    investorsName: (
      <p>
        - Joe Umeritini (<span>Investor</span>)
      </p>
    ),
  },
  {
    imageOne: Farmer,
    imageTwo: Investor,
    content:
      '“Vitae pretium aliquam volutpat donec. Nunc bibendum sagittis, vitae sagittis, quis vulputate nulla. Pellentesque volutpat vitae sem a eu arcu scelerisque vitae sem a eu arcu scelerisque.”',
    farmersName: (
      <p>
        - Kapersky Martins (<span>Farmer</span>)
      </p>
    ),
    investorsName: (
      <p>
        - Joe Umeritini (<span>Investor</span>){' '}
      </p>
    ),
  },
  {
    imageOne: Farmer,
    imageTwo: Investor,
    content:
      '“Vitae pretium aliquam volutpat donec. Nunc bibendum sagittis, vitae sagittis, quis vulputate nulla. Pellentesque volutpat vitae sem a eu arcu scelerisque vitae sem a eu arcu scelerisque.”',
    farmersName: (
      <p>
        - Kapersky Martins (<span>Farmer</span>)
      </p>
    ),
    investorsName: (
      <p>
        - Joe Umeritini (<span>Investor</span>){' '}
      </p>
    ),
  },
];

export const BLOG_DATA = [
  {
    image: BlogImage1,
    title: 'How AgroNub encourages nursery farming and how it has helped',
    content:
      'Nulla erat in id lectus nunc. Sapien egestas nunc et interdum ultrices phasellus. Aliquet vitae nisl erat ultrices nec, nec maecenas. Sit sit quis mi risus. Posuere nunc tellus cras volutpat ut...',
    date: 'Aug 16',
  },
  {
    image: BlogImage2,
    title:
      'Learn how investments from Agronub has helped improve cattle rearing',
    content:
      'Pretium netus varius amet dolor tempus vulputate volutpat urna, diam. Risus tristique ultricies facilisi vel rhoncus urna, elementum sit. Ante pulvinar odio vel lorem. Commodo nulla eu tristique arcu....',
    date: 'May 10',
  },
  {
    image: BlogImage3,
    title:
      'Interview with a few farmers on what they think AgroNub could do better',
    content:
      'Tellus pretium at dolor diam malesuada ultricies in in arcu. Eu augue sed velit eleifend mi vivamus diam bibendum. Volutpat sed in mi accumsan sit mi, neque hac. Vel scelerisque habitant...',
    date: 'Jan 23',
  },
];
