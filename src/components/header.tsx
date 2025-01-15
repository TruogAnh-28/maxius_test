import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();

  const changeLanguage = (locale: string) => {
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <div className='container mx-auto flex justify-between items-center z-50'>
      <h1 className='text-[21px] font-bold absolute top-[30px] left-[50px] xs:top-[50px] md:left-[60px] z-50'>
        MAXIUS
      </h1>
      <div className='absolute top-12 right-24 flex items-center gap-4 z-50'>
        <button className='z-50 ml-4 text-[32px]'>☰ </button>
        <div className='absolute top-[50px] flex right-0 z-50'>
          <button
            onClick={() => changeLanguage('en')}
            className={` mr-[10px] text-[21px]  ${
              router.locale === 'en' ? 'text-[#f93]' : ''
            }`}
          >
            EN
          </button>
          <button
            onClick={() => changeLanguage('ko')}
            className={` text-[21px] ${
              router.locale === 'ko' ? 'text-[#f93]' : ''
            }`}
          >
            KR
          </button>
        </div>
      </div>
    </div>
  );
}
