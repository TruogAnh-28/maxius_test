import { useTranslation } from 'next-i18next';

export default function PageFive() {
  const { t } = useTranslation('common');

  const sections = [
    {
      title: 'Company.',
      text: 'support@maxius.io',
    },
    {
      title: 'Warranty.',
      text: 'Learn more >',
    },
    {
      title: 'Technical support.',
      text: 'support@maxius.io',
    },
  ];

  return (
    <div className='h-screen justify-center items-center text-white bg-[url("/images/banner-05-kr.png")] relative bg-cover'>
      <div className='absolute top-1/2 translate-y-[-25%] transform sm:translate-y-[-40%] w-[90%] text-left mb-[15%] mx-auto fifth-wrapper w-full xs1:w-[70%] left-[50px] md:left-[140px] lg:left-[180px]'>
        {sections.map((section, index) => (
          <div key={index} className='w-[250px] mb-[50px]'>
            <h3 className='text-white sm:text-[34px] font-bold mb-[12px] sm:ml-[5px] whitespace-nowrap text-[20.5px] sm:ml-0'>
              {section.title}
            </h3>
            <div className='group hover:cursor-pointer relative w-[90%] h-[35px] leading-[35px] -my-[6px] px-[5%] transition-all duration-200 hover:bg-white'>
              <a
                href='mailto: support@maxius.io'
                className='text-left block w-full h-full'
              >
                <p className='text-[13.5px] xs1:text-[14px] group-hover:text-black transition-colors duration-200'>
                  {section.text}
                </p>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
