import { memo } from 'react';
function EmployeeContent() {
    return (
        <div>
            <div className="flex">
                <h2 className="w-8/12 ml-20 mt-40 font-bold text-6xl">Zaposleni</h2>
                <button className="w-2/12 mt-60 h-32 pl-20 bg-black text-white inline-flex items-center">
                    <svg className="h-24 w-24 text-white-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg><span>Dodaj novog zaposlenog</span>
                </button>
            </div>
            <ul className="flex px-20 text-sm mt-10 mb-20 font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                <li className="mr-2" role="presentation">
                    <button className="inline-block border-b-4 border-black border-black-500" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false"><b>SVI ZAPOSLENI</b></button>
                </li>
                <li className="mr-2" role="presentation">
                    <button className="inline-block ml-40 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">ARHIVIRANI NALOZI</button>
                </li>
                <li className="mr-2" role="presentation">
                    <button className="inline-block ml-40 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">PAUZIRANI NALOZI</button>
                </li>
            </ul>
            <div>
                <form method="GET">
                    <div className="ml-20 relative text-gray-600">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <button type="submit" className="p-1">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" className="w-12 h-12"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </button>
                        </span>
                        <input type="search" name="q" className="py-10 w-1/3 text-sm text-black-600 bg-gray-200 font-bold pl-16" placeholder="Pretrazi zaposlene" autoComplete="off" />
                        <button className="mx-16 bg-gray-200 text-gray-500 font-bold py-10 px-6">FILTER</button>
                    </div>
                </form>
            </div>
            <div>
                <span className='p-20 text-gray-600 text-lg font-bold'>ZAHTEV ZA IZMENE</span>
            </div>
            <div className="flex">
                <table className="w-9/12 mt-10 ml-20">
                    <thead className="border-b dark:border-neutral-500">
                        <tr>
                            <th className="text-gray-500 text-left p-5 font-bold">IME PREZIME</th>
                            <th className="text-gray-500 text-left p-5 font-bold">SEKTOR</th>
                            <th className="text-gray-500 text-left p-5 font-bold">POZICIJA</th>
                            <th className="text-gray-500 text-left p-5 font-bold">EMAIL</th>
                            <th className="text-gray-500 text-left p-5 font-bold">BROJ TELEFONA</th>
                            <th className="text-gray-500 text-left p-5 font-bold">POL</th>
                            <th className="text-gray-500 text-left p-5 font-bold">GODINE STAZA</th>
                            <th className="text-gray-500 text-left p-5 font-bold">DATUM RODJENJA</th>
                            <th className="text-gray-500 text-left p-5 font-bold">ZADNJA PRIJAVA</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        <tr className="border-b dark:border-neutral-500">
                            <td scope="col" className="text-gray-500 px-5 text-right py-10">
                                <svg className="absolute ml-20 w-32 h-16 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                                </svg>Ime Prezime
                            </td>
                            <td className="text-gray-500 px-5 py-10">Sektor</td>
                            <td className="text-gray-500 px-5 py-10">Pozicija</td>
                            <td className="text-gray-500 px-5 py-10">ime.prezime@gmail.com</td>
                            <td className="text-gray-500 px-5 py-10">062 8865 717</td>
                            <td className="text-gray-500 px-5 py-10">M</td>
                            <td className="text-gray-500 px-5 py-10">4 god</td>
                            <td className="text-gray-500 px-5 py-10">26.12.2000</td>
                            <td className="text-gray-500 px-5 py-10">24.02.2023 14:33</td>
                            <td scope="col" className="border-b whitespace-nowrap px-1 py-6 text-gray-500 text-xs font-bold py-10">
                                <svg className="h-16 w-16 text-black-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </td>
                        </tr>
                        <tr className="border-b dark:border-neutral-500">
                            <td scope="col" className="text-gray-500 px-5 text-right py-10">
                                <svg className="absolute ml-20 w-32 h-16 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                                </svg>Ime Prezime
                            </td>
                            <td className="text-gray-500 px-5 py-10">Sektor</td>
                            <td className="text-gray-500 px-5 py-10">Pozicija</td>
                            <td className="text-gray-500 px-5 py-10">ime.prezime@gmail.com</td>
                            <td className="text-gray-500 px-5 py-10">062 8865 717</td>
                            <td className="text-gray-500 px-5 py-10">M</td>
                            <td className="text-gray-500 px-5 py-10">4 god</td>
                            <td className="text-gray-500 px-5 py-10">26.12.2000</td>
                            <td className="text-gray-500 px-5 py-10">24.02.2023 14:33</td>
                            <td scope="col" className="border-b whitespace-nowrap px-1 py-6 text-gray-500 text-xs font-bold py-10">
                                <svg className="h-16 w-16 text-black-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </td>
                        </tr>
                        <tr className="border-b dark:border-neutral-500">
                            <td scope="col" className="text-gray-500 px-5 text-right py-10">
                                <svg className="absolute ml-20 w-32 h-16 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                                </svg>Ime Prezime
                            </td>
                            <td className="text-gray-500 px-5 py-10">Sektor</td>
                            <td className="text-gray-500 px-5 py-10">Pozicija</td>
                            <td className="text-gray-500 px-5 py-10">ime.prezime@gmail.com</td>
                            <td className="text-gray-500 px-5 py-10">062 8865 717</td>
                            <td className="text-gray-500 px-5 py-10">M</td>
                            <td className="text-gray-500 px-5 py-10">4 god</td>
                            <td className="text-gray-500 px-5 py-10">26.12.2000</td>
                            <td className="text-gray-500 px-5 py-10">24.02.2023 14:33</td>
                            <td scope="col" className="border-b whitespace-nowrap px-1 py-6 text-gray-500 text-xs font-bold py-10">
                                <svg className="h-16 w-16 text-black-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={9} className='pt-16 text-left text-gray-600 text-lg font-bold border-b'>SVI ZAPOSLENI</td>
                        </tr>
                        <tr className="border-b dark:border-neutral-500">
                            <td scope="col" className="text-gray-500 px-5 text-right py-10">
                                <svg className="absolute ml-20 w-32 h-16 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                                </svg>Ime Prezime
                            </td>
                            <td className="text-gray-500 px-5 py-10">Sektor</td>
                            <td className="text-gray-500 px-5 py-10">Pozicija</td>
                            <td className="text-gray-500 px-5 py-10">ime.prezime@gmail.com</td>
                            <td className="text-gray-500 px-5 py-10">062 8865 717</td>
                            <td className="text-gray-500 px-5 py-10">M</td>
                            <td className="text-gray-500 px-5 py-10">4 god</td>
                            <td className="text-gray-500 px-5 py-10">26.12.2000</td>
                            <td className="text-gray-500 px-5 py-10">24.02.2023 14:33</td>
                        </tr>
                        <tr className="border-b dark:border-neutral-500">
                            <td scope="col" className="text-gray-500 px-5 text-right py-10">
                                <svg className="absolute ml-20 w-32 h-16 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                                </svg>Ime Prezime
                            </td>
                            <td className="text-gray-500 px-5 py-10">Sektor</td>
                            <td className="text-gray-500 px-5 py-10">Pozicija</td>
                            <td className="text-gray-500 px-5 py-10">ime.prezime@gmail.com</td>
                            <td className="text-gray-500 px-5 py-10">062 8865 717</td>
                            <td className="text-gray-500 px-5 py-10">M</td>
                            <td className="text-gray-500 px-5 py-10">4 god</td>
                            <td className="text-gray-500 px-5 py-10">26.12.2000</td>
                            <td className="text-gray-500 px-5 py-10">24.02.2023 14:33</td>
                        </tr>
                        <tr className="border-b dark:border-neutral-500">
                            <td scope="col" className="text-gray-500 px-5 text-right py-10">
                                <svg className="absolute ml-20 w-32 h-16 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                                </svg>Ime Prezime
                            </td>
                            <td className="text-gray-500 px-5 py-10">Sektor</td>
                            <td className="text-gray-500 px-5 py-10">Pozicija</td>
                            <td className="text-gray-500 px-5 py-10">ime.prezime@gmail.com</td>
                            <td className="text-gray-500 px-5 py-10">062 8865 717</td>
                            <td className="text-gray-500 px-5 py-10">M</td>
                            <td className="text-gray-500 px-5 py-10">4 god</td>
                            <td className="text-gray-500 px-5 py-10">26.12.2000</td>
                            <td className="text-gray-500 px-5 py-10">24.02.2023 14:33</td>
                            <td scope="col" className="whitespace-nowrap px-1 py-6 text-gray-500 text-xs font-bold py-10">
                                <svg className="h-16 w-16 text-black-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                                </svg>
                            </td>
                        </tr>
                        <tr className="border-b dark:border-neutral-500">
                            <td scope="col" className="text-gray-500 px-5 text-right py-10">
                                <svg className="absolute ml-20 w-32 h-16 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                                </svg>Ime Prezime
                            </td>
                            <td className="text-gray-500 px-5 py-10">Sektor</td>
                            <td className="text-gray-500 px-5 py-10">Pozicija</td>
                            <td className="text-gray-500 px-5 py-10">ime.prezime@gmail.com</td>
                            <td className="text-gray-500 px-5 py-10">062 8865 717</td>
                            <td className="text-gray-500 px-5 py-10">M</td>
                            <td className="text-gray-500 px-5 py-10">4 god</td>
                            <td className="text-gray-500 px-5 py-10">26.12.2000</td>
                            <td className="text-gray-500 px-5 py-10">24.02.2023 14:33</td>
                        </tr>
                        <tr className="border-b dark:border-neutral-500">
                            <td scope="col" className="text-gray-500 px-5 text-right py-10">
                                <svg className="absolute ml-20 w-32 h-16 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                                </svg>Ime Prezime
                            </td>
                            <td className="text-gray-500 px-5 py-10">Sektor</td>
                            <td className="text-gray-500 px-5 py-10">Pozicija</td>
                            <td className="text-gray-500 px-5 py-10">ime.prezime@gmail.com</td>
                            <td className="text-gray-500 px-5 py-10">062 8865 717</td>
                            <td className="text-gray-500 px-5 py-10">M</td>
                            <td className="text-gray-500 px-5 py-10">4 god</td>
                            <td className="text-gray-500 px-5 py-10">26.12.2000</td>
                            <td className="text-gray-500 px-5 py-10">24.02.2023 14:33</td>
                        </tr>
                    </tbody>
                </table>
                <div className="w-3/12 flex justify-center items-end">
                    <p className="w-96 h-96 translate-y-6 translate-x-26 rounded-full bg-gray-400 flex justify-end items-center text-center text-sm font-bold">ASISTENT GIRKO</p>
                </div>
            </div>


            <div>
            </div>

        </div>


    );
}

export default memo(EmployeeContent);
