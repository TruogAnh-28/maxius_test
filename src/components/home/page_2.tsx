import { useTranslation } from 'next-i18next';

export default function PageTwo() {
  const { t } = useTranslation('common');

  return (
    <div className='h-screen flex justify-center items-center text-white bg-[url("/images/banner-02-kr.png")]'>
      <div className='max-w-[1324px] mx-[10%] '>
        <div className='block min-w-[256px] w-[256px] text-[20px] lg1:text-[22px] lg1:w-[710px] lg1:text-[30px] xl1:text-[40px] font-bold xl1:w-[960px] text-justify break-all xs1:break-normal xs1:w-[475px]'>
          <p
            className='m-0 text-justify font-roboto tracking-tight'
            dangerouslySetInnerHTML={{ __html: t('page2.text') }}
          ></p>
        </div>
      </div>
    </div>
  );
}
