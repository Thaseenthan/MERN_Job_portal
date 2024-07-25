import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const MyJobs = () => {
    //const email =  "sadanandanthaseenthanstn@gmail.com"
    const [jobs, setJobs] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [isLoading, setIsLoading] = useState(true);



    // set current page 
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    useEffect(() => {
        setIsLoading(true)
        //fetch("http://localhost:3000/myJobs/sadanandanthaseenthanstn@gmail.com")
        fetch("http://localhost:3000/all-jobs")
        // fetch("`http://localhost:3000/myJobs/${encodeURIComponent(email)}`")
        .then((res) => res.json())
        .then((data) => {
            setJobs(data)
            setIsLoading(false)
        })
    }, [searchText]);

    

    // pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirsttItem = indexOfLastItem - itemsPerPage;
    const currentJobs = jobs.slice(indexOfFirsttItem, indexOfLastItem)

    // next, prev btn
    const nextPage = () => {
        if(indexOfLastItem < jobs.length){
            setCurrentPage(currentPage + 1)
        }
    }

    const prevPage = () => {
        if(currentPage > 1){
            setCurrentPage(currentPage - 1)
        }

    }

    const handleSearch = () => {
        const filter = jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
        setJobs(filter);
        setIsLoading(false);
    };

    const handleDelete = (id) => {
        //console.log(id)
        fetch('http://localhost:3000/job/'+id,{
            method: "DELETE"
        }).then((res) => res.json()).then((data) => {
            if(data.acknowledged === true){
                alert("Job Deleted Successfully!!!")
            } else {
                alert(`Failed to delete job: ${data.error}`);
              }
        })
        .catch(error => {
            console.error("Error deleting job:", error);
            alert("Failed to delete job.");
        });
    }

   

  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
        <div className='my-jobs-container'>
            <h1 className='text-center p-4 font-bold text-2xl text-white'>All My Jobs</h1>
            <div className='search-box p-2 text-center mb-2'>
                <input
                    onChange={(e) => setSearchText(e.target.value)}
                    type="text" name='search' id='search' className='py-2 pl-3 border focus:outline-none lg:w-6/12 mb-4 w-full rounded-xl focus:ring-1 focus:ring-black bg-gray-300' />
                <button 
                    onClick={handleSearch} 
                    className='bg-[#130f69] text-white font-semibold px-8 py-2 rounded-xl mb-4' > Search </button>
            </div>

        </div>

        {/* table */}
        <section class="py-1 ">
            <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-5">
            <div class="relative flex flex-col min-w-0 break-words bg-[#22d9cd] w-full mb-6 shadow-lg rounded ">
                <div class="rounded-t mb-0 px-4 py-3 border-0">
                <div class="flex flex-wrap items-center">
                    <div class="relative w-full px-4 max-w-full flex-grow flex-1">
                    <h3 class="font-semibold  text-blueGray-700 text-xl">All Jobs</h3>
                    </div>
                    <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                        <Link to="/post-job"><button class="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Post A New Job</button></Link>

                    </div>
                </div>
                </div>

                <div class="block w-full overflow-x-auto">
                <table class="items-center bg-transparent w-full border-collapse ">
                    <thead>
                    <tr>
                        <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                             NO.</th>
                        <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            JOB TITLE</th>
                        <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            COMPANY NAME</th>
                        <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            SALARY</th>
                        <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            EDIT</th>
                        <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ">
                            DELETE</th>                                    
                    </tr>
                    </thead>

                    {
                        isLoading? (<div className='flex items-center justify-center h-20'><p>Loading...</p></div>) : (<tbody>
                            {
                                currentJobs.map((job, index) => (
                                    <tr key={index}>
                                        <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                        {index +1}
                                        </th>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                        {job.jobTitle}
                                        </td>
                                        <td class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        {job.companyName}
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        ${job.minPrice} - ${job.maxPrice}
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                        <button className='bg-yellow-400 py-2 px-6 text-black rounded-lg hover:underline'><Link to={"/edit-jobs/"+job?._id}>Edit</Link></button>
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                        <button onClick={() => handleDelete(job._id)} className='bg-red-700 py-2 px-6 text-white rounded-lg hover:underline' >Delete</button>
                                        </td>
                                    
                                </tr>
    
                                ))
                            }
    
                        </tbody>)
                    }

                    

                </table>
                </div>
            </div>
            </div>

            {/* pagination */}

            <div className='flex justify-center text-black space-x-8 mb-8'>
                {
                    currentPage > 1 && (
                        <button className='hover:underline text-white' onClick={prevPage}>Previous</button>
                    )
                }
                {
                    indexOfLastItem < jobs.length && (
                        <button className='hover:underline text-white' onClick={nextPage}>Next</button>
                    )
                }
            </div>
           
        </section>
    </div>
  )
}

export default MyJobs