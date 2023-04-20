import React from 'react'
function HomeDashboard() {
    return (
        <div>
            <div className="w-9/12 mt-20 ml-20 p-20">
                <div className="w-6/12 text-5xl font-bold">Cao</div>
                <div className="w-6/12 text-5xl font-bold">Gordana</div>
            </div>
            <div className='w-9/12 h-8/10 flex ml-20 justify-around'>
                <div className="w-9/12 h-4/6 ml-20 bg-gray-300">
                    <div className="flex items-center justify-around">
                        <div className="w-5/6 p-20 font-bold">
                            Nadolazece obavestenje
                        </div>
                        <div className="w-2/5 font-bold grid justify-items-end pr-20">
                            <svg className="h-24 w-24 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                    </div>
                    <div className="w-5/12 font-bold text-gray-500 pl-20">
                        09/02/23
                    </div>
                    <div className="w-9/12 font-bold pl-20">
                        Ovde ide naslov obavestenja moze biti duzi
                    </div>
                    <div className="w-3/12 font-bold pb-20 pl-20">
                        Izmeni
                    </div>
                </div>
                <div className="w-2/12 h-4/6 ml-20 bg-gray-300">
                    <div className="p-20 text-gray-600 font-bold text-center">
                        UKUPAN BROJ ZAPOSLENIH
                    </div>
                    <div className="text-center pb-10 text-5xl text-gray-700 font-bold">
                        84%
                    </div>
                </div>
                <div className="w-2/12 h-4/6  ml-20 bg-gray-300">
                    <div className="p-20 text-center text-gray-600 font-bold">
                        UKUPAN BROJ PRIJAVLJENIH
                    </div>
                    <div className="text-center  pb-10  text-5xl text-gray-700 font-bold">
                        8
                    </div>
                </div>
            </div>

            <div className='w-9/12 ml-20 pl-20 pt-20 flex justify-around gap-20'>
                <div className="w-4/12 h-4/6 bg-gray-300">
                    <div className="flex flex-row justify-around">
                        <div className="w-9/12 pt-20 text-2xl font-bold">
                            Predlozi
                        </div>
                        <div className="w-1/12 pt-20 pr-10 font-bold">
                            <svg className="h-24 w-24 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                    </div>

                    <div className="w-9/12  pb-20 font-bold">
                        <span className="font-bold text-3xl pl-20">8</span>
                        <span className="pl-10 text-gray-400">NOVIH PREDLOGA</span>
                    </div>
                </div>
                <div className="w-4/12 h-4/6 bg-gray-300">
                    <div className="flex flex-row justify-around">
                        <div className="w-9/12 pt-20 text-2xl font-bold">
                            Ankete
                        </div>
                        <div className="w-1/12 pt-20 pr-10 font-bold">
                            <svg className="h-24 w-24 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                    </div>

                    <div className="w-9/12  pb-20 font-bold">
                        <span className="font-bold text-3xl pl-20">4</span>
                        <span className="pl-10 text-gray-400">TRENUTNO AKTUELNE ANKETE</span>
                    </div>
                </div>
                <div className="w-4/12 h-4/6 bg-gray-300">
                    <div className="flex flex-row justify-around">
                        <div className="w-9/12 pt-20 text-2xl font-bold">
                            Predlozi
                        </div>
                        <div className="w-1/12 pt-20 pr-10 font-bold">
                            <svg className="h-24 w-24 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                    </div>

                    <div className="w-9/12  pb-20 font-bold flex flex-row">
                        <div className="font-bold text-3xl pl-20">3</div>
                        <div className="pl-10 text-sm text-gray-400">DANA DO OBJAVE PROLECNE NAGRADNE IGRE</div>
                    </div>
                </div>
            </div>
            <div className='w-9/12 flex flex-row ml-20 '>
                <div className='w-4/12 pt-20 pl-20 grid grid-flow-row-dense grid-cols-2 grid-rows-2 gap-10 grid-cols-2'>
                    <div className="flex flex-col">
                        <div className="pt-10 text-center text-sm text-gray-600 font-bold bg-gray-300">
                            KPI 1 SVIH ZAPOSLENIH
                        </div>
                        <div className="pt-10 pl-10 text-5xl text-center bg-gray-300 font-bold">
                            84%
                        </div>
                        <div className="pl-20 pb-10 pt-10 pr-10 text-gray-600 font-bold text-center bg-gray-300">
                            Lorem ipsum dolor
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="pt-10 text-center text-sm text-gray-600 font-bold bg-gray-300">
                            KPI 2 SVIH ZAPOSLENIH
                        </div>
                        <div className="pt-10 pl-10 text-5xl text-center bg-gray-300 font-bold">
                            8
                        </div>
                        <div className="pl-20 pb-10 pt-10 pr-10 text-gray-600 font-bold text-center bg-gray-300">
                            Lorem ipsum dolor
                        </div>
                    </div>
                    <div className="flex flex-col bg-gray-300 col-span-2">
                    <div className="text-center bg-gray-300 p-20">
                        KPI 3 SVIH ZAPOSLENIH
                    </div>
                    <div className="text-5xl text-center bg-gray-300 font-bold">
                        8
                    </div>
                    <div className="pl-20 pt-20 text-center bg-gray-300">
                        Lorem ipsum dolor
                    </div>
                </div> 
                </div>
               
                <div className='ml-20 w-8/12 pt-20'>
                    <div className="p-20 text-justify bg-gray-300">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe et culpa iusto tenetur molestias animi odio, perspiciatis, nulla voluptatum maiores dolores pariatur quae nihil magni temporibus corrupti quam, labore ab!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe et culpa iusto tenetur molestias animi odio, perspiciatis, nulla voluptatum maiores dolores pariatur quae nihil magni temporibus corrupti quam, labore ab!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe et culpa iusto tenetur molestias animi odio, perspiciatis, nulla voluptatum maiores dolores pariatur quae nihil magni temporibus corrupti quam, labore ab!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe et culpa iusto tenetur molestias animi odio, perspiciatis, nulla voluptatum maiores dolores pariatur quae nihil magni temporibus corrupti quam, labore ab!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe et culpa iusto tenetur molestias animi odio, perspiciatis, nulla voluptatum maiores dolores pariatur quae nihil magni temporibus corrupti quam, labore ab!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe et culpa iusto tenetur molestias animi odio, perspiciatis, nulla voluptatum maiores dolores pariatur quae nihil magni temporibus corrupti quam, labore ab!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe et culpa iusto tenetur molestias animi odio, perspiciatis, nulla voluptatum maiores dolores pariatur quae nihil magni temporibus corrupti quam, labore ab!
                    </div> 
                </div>
            </div>
           
        </div>
    )
}

export default HomeDashboard;