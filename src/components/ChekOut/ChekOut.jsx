import { Tab } from '@headlessui/react'
import Chekoutone from './Chekoutone';
import ReviewHouse from '../ReviewHouse';

const ChekOut = () => {
    return (
        <div className='container mx-auto'>
         <div className="flex flex-col md:flex-col lg:flex-row xl:flex-row">
    <div className=''><Chekoutone/></div>

    <div className='mt-4 ml-6'>
        <Tab.Group>
            <Tab.List className="flex flex-wrap">
                <div className='flex'>
                    <span className="mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </span>
                    <Tab as="Fragment">
  {({ selected }) => (
    <button className={selected ? "text-blue-500" : "text-gray-600"}>
     Reviews houser role!
    </button>
  )}
</Tab>
                </div>
                <div className='flex'>
                    <span className="mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </span>
                    <Tab as="Fragment">
  {({ selected }) => (
    <button className={selected ? "text-blue-500" : "text-gray-600"}>
     Who are you?
    </button>
  )}
</Tab>
                </div>
                <div className='flex'>
                    <span className="mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </span>
                    <Tab as="Fragment">
  {({ selected }) => (
    <button className={selected ? "text-blue-500" : "text-gray-600"}>
     Payment
    </button>
  )}
</Tab>
                </div>
            </Tab.List>
            <Tab.Panels className='ml-6 mt-8'>
                <Tab.Panel>
                    <ReviewHouse/>
                </Tab.Panel>
                <Tab.Panel>Ra mohin</Tab.Panel>
                <Tab.Panel>taka de</Tab.Panel>
            </Tab.Panels>
        </Tab.Group>
    </div>
</div>

        </div>
    );
};

export default ChekOut;