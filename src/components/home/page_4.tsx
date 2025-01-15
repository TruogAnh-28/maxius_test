import { useTranslation } from 'next-i18next';

export default function PageFour() {
  const { t } = useTranslation('common');

  const sections = [
    {
      title: 'History',
      content: 'page4.text_history',
    },
    {
      title: 'Partners',
      content: 'page4.text_partners',
    },
    {
      title: 'Patents',
      content: 'page4.text_patents',
    },
    {
      title: 'Awards',
      content: 'page4.text_awards',
    },
  ];

  return (
    <div className='h-screen flex justify-center items-center bg-white relative'>
      <div className='absolute m-auto top-[50%] left-[50%] w-[90%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center'>
        <h1 className='text-[25px] xs:text-[30px] lg:text-[98.5px] mb-[20px] xs:mb-[40px] font-bold text-center'>
          STORY
        </h1>

        <div className='grid grid-cols-1 sm:grid-cols-2 md2:grid-cols-3 xl:grid-cols-4 gap-4 w-[75%]'>
          <div className='block '>
            <h2 className='text-[20px] lg:text-[39.5px] font-semibold mb-2 pl-[30px]'>
              {sections[0].title}
            </h2>
            <div className='h-[300px] overflow-y-auto overflow-x-hidden py-[40px] px-[30px] leading-[1.8] mt-6 border-r border-r-black'>
              <div
                className='text-[13px] opacity-70'
                dangerouslySetInnerHTML={{ __html: t(sections[0].content) }}
              />
            </div>
          </div>

          <div className='hidden sm:block '>
            <h2 className='text-[20px] lg:text-[39.5px] font-semibold mb-2 pl-[30px]'>
              {sections[1].title}
            </h2>
            <div className='h-[300px] overflow-y-auto overflow-x-hidden  py-[40px] px-[30px] leading-[1.8] mt-6 border-r border-r-black'>
              <div
                className='text-[13px] opacity-70'
                dangerouslySetInnerHTML={{ __html: t(sections[1].content) }}
              />
            </div>
          </div>

          <div className='hidden md2:block '>
            <h2 className='text-[20px] lg:text-[39.5px] font-semibold mb-2 pl-[30px]'>
              {sections[2].title}
            </h2>
            <div className='h-[300px] overflow-y-auto overflow-x-hidden  py-[40px] px-[30px] leading-[1.8] mt-6 border-r border-r-black'>
              <div
                className='text-[13px] opacity-70'
                dangerouslySetInnerHTML={{ __html: t(sections[2].content) }}
              />
            </div>
          </div>

          <div className='hidden xl:block '>
            <h2 className='text-[20px] lg:text-[39.5px] font-semibold mb-2 pl-[30px]'>
              {sections[3].title}
            </h2>
            <div className='h-[300px] overflow-y-auto overflow-x-hidden  py-[40px] px-[30px] leading-[1.8] mt-6 border-r border-r-black'>
              <div
                className='text-[13px] opacity-70'
                dangerouslySetInnerHTML={{ __html: t(sections[3].content) }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
