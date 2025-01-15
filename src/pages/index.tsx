import Header from '@/components/header';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Suspense, lazy } from 'react';

const PageOne = lazy(() => import('../components/home/page_1'));
const PageTwo = lazy(() => import('../components/home/page_2'));
const PageThree = lazy(() => import('../components/home/page_3'));
const PageFour = lazy(() => import('../components/home/page_4'));
const PageFive = lazy(() => import('../components/home/page_5'));
export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default function Home() {
  return (
    <div className='snap-y snap-mandatory h-screen w-screen overflow-scroll overflow-x-hidden'>
      <Header />
      <Suspense
        fallback={
          <div className='h-screen flex justify-center items-center'>
            Loading...
          </div>
        }
      >
        <div className='snap-start'>
          <PageOne />
        </div>
        <div className='snap-start'>
          <PageTwo />
        </div>
        <div className='snap-start'>
          <PageThree />
        </div>
        <div className='snap-start'>
          <PageFour />
        </div>
        <div className='snap-start'>
          <PageFive />
        </div>
      </Suspense>
    </div>
  );
}
