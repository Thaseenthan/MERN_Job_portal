import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import PageHeader from '../components/PageHeader';

import RegistrationForm from '../components/RegistrationForm';



const JobDetails = () => {
    const {id} = useParams();
    const [job, setJob] = useState([]);

    const [showRegistration, setShowRegistration] = useState(false); 
    
    useEffect(() => {
        fetch("http://localhost:3000/all-jobs/"+id).then(res => res.json()).then(data => setJob(data))
    } ,[id]);

    const handleApply = () => {
      setShowRegistration(true);
  };

    // Apply now function
    // const handleApply = async() => {
    //     const { value: url } = await Swal.fire({
    //         input: "url",
    //         inputLabel: "URL address",
    //         inputPlaceholder: "Enter the URL"
    //       });
    //       if (url) {
    //         Swal.fire(`Entered URL: ${url}`);
    //       }

    // }

    
  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 m-10'>
        <PageHeader title={"Job Details"}/>
        <div className='m-10 font-semibold text-white bg-slate-900 backdrop-blur-sm bg-opacity-40'>
            
            {/* Each job details */}
            
            <table className='m-10 mt-10'>
              <tbody  >
              <h1 className='text-center text-2xl underline mt-10'>{job.jobTitle}</h1>
                <tr >
                  <td style={{ padding: '10px 0px ' }}>Company Name </td>
                  <td style={{ padding: '10px 0px' }}>{job.companyName}</td>
                </tr>
                <tr>
                  <td style={{ padding: '10px 0px ' }}>Location</td>
                  <td style={{ padding: '10px 0px ' }}>{job.jobLocation}</td>
                </tr>
                <tr>
                  <td style={{ padding: '10px 0px ' }}>Minumum Salary</td>
                  <td style={{ padding: '10px 0px ' }}>${job.minPrice}</td>
                </tr>
                <tr>
                  <td style={{ padding: '10px 0px ' }}>Maximum Salary</td>
                  <td style={{ padding: '10px 0px ' }}>${job.maxPrice}</td>
                </tr>
                <tr>
                  <td style={{ padding: '10px 0px ' }}>Employment Type</td>
                  <td style={{ padding: '10px 0px ' }}>{job.employmentType}</td>
                </tr>
                <tr>
                  <td style={{ padding: '10px 0px ' }}>Experience Level</td>
                  <td style={{ padding: '10px 0px ' }}>{job.experienceLevel}</td>
                </tr>
                <tr>
                  <td style={{ padding: '10px 0px 100px' }}> Required Skills</td>
                  <td style={{ padding: '10px 0px ' }}>
                    {job && job.skills && job.skills.map((skill, index) => (
                        <div key={index}>{skill.label}</div>
                    ))}
                  </td>
                </tr>
                
              </tbody>
            </table>
            <h1 style={{ padding: '10px 0px ' }} className='ml-10' >{job.description}</h1>
        </div>

        {/* <div style={{ textAlign: 'center' }}>
           <button className='font-semibold w-48 mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-900 hover:bg-emerald-800 hover:text-white  py-2' onClick={handleApply}>Apply Now</button>
        </div> */}
        {showRegistration ? (
                <RegistrationForm jobId={id} onClose={() => setShowRegistration(false)} />
            ) : (
                <div style={{ textAlign: 'center' }}>
                    <button className='font-semibold w-48 mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-900 hover:bg-emerald-800 hover:text-white py-2' onClick={handleApply}>Apply Now</button>
                </div>
            )}
    </div>
  )
}

export default JobDetails