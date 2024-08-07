import { useState } from 'react'
import { useForm } from "react-hook-form"
import CreatableSelect from "react-select/creatable"

const CreateJob = () => {
    const [selectedOption, setSelectedOption ] = useState(null);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => {
       data.skills = selectedOption;
       
        fetch("http://localhost:3000/post-job", {
            method: "POST", 
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(data)

        }).then(res => res.json()).then((result) => {
            console.log(result);
            if(result.acknowledged === true){
                alert("Job Posted Successfully!!!")
                history("/")
            }
            reset()
        })
    };

    const options = [
        {value:"Javascript", label:"Javascript"},
        {value:"C++", label:"C++"},
        {value:"Communication Skills", label:"Communication Skills"},
        {value:" CAD software", label:"CAD software"},
        {value:"Prosthetics design", label:"Prosthetics design"},
        {value:"clinical engineering", label:"clinical engineering"},
        {value:"chemical reactions", label:"chemical reactions"},
        {value:"Circuit design", label:"Circuit design"},
        {value:"version control", label:"version control"},
        {value:"Cloud platforms", label:"Cloud platforms"},
        {value:"Java", label:"Java"},
        
    ]
    
     
  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 '>
        {/* form */}
        <div className=' py-10 px-4 lg:px-16 rounded-2xl post-job-bg'>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
                {/* 1st row */}
                <div className='create-job-flex'>
                    <div className='lg:w-1/2 w-full'>
                        <label className='block mb-2 text-lg text-white'>Job Title</label>
                        <input type="text" placeholder='Ex: Electrical Engineer' {...register("jobTitle" ) } className='create-job-input'/>
                    </div>
                    <div className='lg:w-1/2 w-full'>
                        <label className='block mb-2 text-lg text-white'>Company Name</label>
                        <input type="text" placeholder='Ex: Microsoft' {...register("companyName" ) } className='create-job-input'/>
                    </div>

                </div>

                {/* 2nd row */}
                <div className='create-job-flex'>
                    <div className='lg:w-1/2 w-full'>
                        <label className='block mb-2 text-lg text-white'>Minimum Salary</label>
                        <input type="text" placeholder='Ex: if $5k (Enter 5)' {...register("minPrice" ) } className='create-job-input'/>
                    </div>
                    <div className='lg:w-1/2 w-full'>
                        <label className='block mb-2 text-lg text-white'>Maximum Salary</label>
                        <input type="text" placeholder='Ex: if $25k (Enter 25)' {...register("maxPrice" ) } className='create-job-input'/>
                    </div>

                </div>

                {/* 3rd row */}
                <div className='create-job-flex'>
                    <div className='lg:w-1/2 w-full'>
                        <label className='block mb-2 text-lg text-white'>Salary Type</label>
                        <select {...register("salaryType")} className='create-job-input'>
                            <option value="">Choose your salary</option>
                            <option value="Hourly">Hourly</option>
                            <option value="Monthly">Monthly</option>
                            <option value="Yearly">Yearly</option>
                        </select>
                    </div>
                    <div className='lg:w-1/2 w-full'>
                        <label className='block mb-2 text-lg text-white'>Job Location</label>
                        <input type="text" placeholder='Ex: Colombo' {...register("jobLocation" ) } className='create-job-input'/>
                    </div>

                </div>

                {/* 4th row */}
                <div className='create-job-flex'>
                   
                    <div className='lg:w-1/2 w-full'>
                        <label className='block mb-2 text-lg text-white'>Job Posting Date</label>
                        <input type="date" placeholder='Ex: 12/08/2024' {...register("postingDate" ) } className='create-job-input'/>
                    </div>
                    <div className='lg:w-1/2 w-full'>
                        <label className='block mb-2 text-lg text-white'>Experience Level</label>
                        <select {...register("experienceLevel")} className='create-job-input'>
                            <option value="">Choose your experience</option>
                            <option value="NoExperience">No Experience</option>
                            <option value="Work remotely">Work remotely</option>
                            <option value="Internship">Internship</option>
                            <option value="1-3 years">1-3 years</option>
                            <option value="3-5 years">3-5 years</option>
                            
                        </select>
                    </div>

                </div>

                {/* 5th row */}
                <div >
                       <label className='block mb-2 text-lg text-white'>Required Skill Sets:</label>
                       <CreatableSelect className='create-job-input py-4' 
                        defaultValue={selectedOption} 
                        onChange={setSelectedOption} 
                        options={options}
                        isMulti/>
                      
                </div>

                {/* 6th row */}
                <div className='create-job-flex'>
                    <div className='lg:w-1/2 w-full'>
                        <label className='block mb-2 text-lg text-white'>Company Logo</label>
                        <input type="url" placeholder='Paste youe company logo URL:' {...register("companyLogo" ) } className='create-job-input'/>
                    </div>
                    <div className='lg:w-1/2 w-full'>
                        <label className='block mb-2 text-lg text-white'>Employment Type</label>
                        <select {...register("employmentType")} className='create-job-input'>
                            <option value="">Choose your job type</option>
                            <option value="Part-time">Part-time</option>
                            <option value="Full-time">Full-time</option>
                            <option value="Temporary">Temporary</option>
                        </select>
                    </div>

                </div>

                {/* 7th row */}
                <div className='w-full'>
                    <label className='block mb-2 text-lg text-white'>Job Description</label>
                    <textarea className='w-full pl-3 py-1.5 focus:outline-none  rounded-2xl placeholder:text-gray-700' placeholder='Job description'
                       rows={6} 
                       {...register("description" ) } />
                </div>

                {/* 8th row */}
                <div className='w-full'>
                    <label className='block mb-2 text-lg text-white'>Job Posted By</label>
                    <input type="email" placeholder='Your email address' {...register("postedBy" ) } className='create-job-input'/>
                </div>
                 
                <input type="submit" className='block mt-12 bg-[#211b89] text-white font-semibold px-8 py-2 rounded-2xl cursor-pointer hover:bg-black' />
            </form>

        </div>

    </div>
  )
}

export default CreateJob