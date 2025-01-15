import { useTranslation } from 'next-i18next';

export default function PageOne() {
  const { t } = useTranslation('common');
  return (
    <div className='h-screen flex bg-center text-black md:bg-[url("/images/banner-01-kr.png")]'>
      <div className='ml-[10%] relative'>
        <div className='absolute top-1/2 transform -translate-y-1/2 white-space: nowrap '>
          <div className='text-[45px] text-[#1a2a59] font-bold xs:text-[95.5px] xs:min-w-[600px] xs:mt-[225px] xs:ml-[-5px]'>
            MAX I & US
          </div>
          <div className='mt-5 min-w-[247px] w-[247px] text-[15px] text-[#222222] font-light xs:w-[415px] xs:text-[20.5px] opacity-70 '>
            {t('page1.description_1')}
          </div>
          <div className='mt-5 min-w-[247px] w-[247px] text-[15px] text-[#222222] font-light xs:w-[415px] xs:text-[20.5px] opacity-70 '>
            {t('page1.description_2')}
          </div>
        </div>
      </div>
    </div>
  );
}
