import { useTranslation } from 'next-i18next';

export default function PageThree() {
  const { t } = useTranslation('common');

  const sections = [
    {
      title: 'Product',
      content_1: 'page3.text_product_1',
      content_2: 'page3.text_product_2',
    },
    {
      title: 'Technology',
      content_1: 'page3.text_technology_1',
      content_2: 'page3.text_technology_2',
    },
    {
      title: 'Application',
      content_1: 'page3.text_application_1',
      content_2: 'page3.text_application_2',
    },
    {
      title: 'Blockchain',
      content_1: 'page3.text_blockchain_1',
      content_2: 'page3.text_blockchain_2',
    },
  ];

  return (
    <div className="h-screen flex flex-col justify-center text-white bg-[url('/images/banner-03-kr.png')] relative">
      <div className='p-[12%] md1:p-0 flex flex-col md1:flex-row md1:absolute md1:top-0 md1:left-[-3%] right-0 md1:w-[70%] md1:h-full md1:mx-auto p-0 text-left '>
        {sections.map((section) => (
          <div
            key={section.title}
            className={`item p-5 w-full p-4 group box-border md1:h-full relative transition-all duration-200 md1:w-[25%] md1:hover:w-[33%] md1:hover:group-hover:w-[22%] md1:hover:bg-white md1:hover:bg-opacity-10 transition-all duration-200 ease-in-out  md1:border-b-0  ${
              section.title === 'Blockchain' ? '' : 'md1:border-r border-b'
            }`}
          >
            <div className='md1:mt-[28vh] '>
              <p
                className={`font-bold mb-4 hover:cursor-pointer text-[20px] lg1:text-[30px] break-keep ${
                  section.title === 'Blockchain' ? 'note' : ''
                }`}
              >
                {section.title}
              </p>
              <div className='hidden group-hover:block left-0 right-0 w-[70%] md1:w-[100%] bg-opacity-75 py-2 mt-2 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100'>
                <p
                  className='text-[10px] md1:text-[12px] lg1:text-[14px]'
                  dangerouslySetInnerHTML={{ __html: t(section.content_1) }}
                ></p>
                <p
                  className='mt-4 text-[10px] md1:text-[12px] lg1:text-[14px]'
                  dangerouslySetInnerHTML={{ __html: t(t(section.content_2)) }}
                ></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
