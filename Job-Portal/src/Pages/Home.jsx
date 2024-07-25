import {useEffect, useState} from 'react'
import Banner from '../components/Banner'
import Card from '../components/Card';
import Jobs from './Jobs';
import Sidebar from '../Sidebar/Sidebar';


const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
 
  const itemsPerPage = 5;
  
  useEffect(() => {
    setIsLoading(true);

    fetch("http://localhost:3000/all-jobs").then(res => res.json()).then(data => {
      setJobs(data)
      setIsLoading(false);
    })
  },[])
  //console.log(jobs)

  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
      setQuery(event.target.value)
  }
  const [query1, setQuery1] = useState("");
  const handleInputChange1 = (event) => {
      setQuery1(event.target.value)
  }


// filter jobs by title
  const filteredItems = jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  const filteredItems1 = jobs.filter((job) => job.jobLocation.toLowerCase().indexOf(query1.toLowerCase()) !== -1);
  
  // -----radio filtering---
  const handleChange = (event) => {
    setSelectedCategory(event.target.value)
  }

  //----btn filtering--
  const handleClick = (event) =>{
    setSelectedCategory(event.target.value)
  }

  // calculate the index range
  const calculatePageRange = () => {
    const startIndex = (currentPage -1)* itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return{startIndex, endIndex}
  }

  // function for next page
  const nextPage = () => {
    if(currentPage < Math.ceil(filteredItems.length / itemsPerPage)){
      setCurrentPage(currentPage+1);
    }
  }

    // function for prev page
    const prevPage = () => {
      if(currentPage > 1){
        setCurrentPage(currentPage-1);
      }
    }

  // main functions
    const filteredData = (jobs, selected, query) => {
      let filteredjobs = jobs;
      
      // filtering input items
      if(query){
        filteredjobs =filteredItems;
      }
      if(query1){
        filteredjobs =filteredItems1;
      }


      // category filterin
      if(selected){
        filteredjobs = filteredjobs.filter(({jobLocation,maxPrice,employmentType,experienceLevel,salaryType}) => {
          return jobLocation.toLowerCase() === selected.toLowerCase() ||
                parseInt(maxPrice) <= parseInt(selected) ||
                salaryType.toLowerCase() === selected.toLowerCase() ||
                employmentType.toLowerCase() === selected.toLowerCase() ||
                experienceLevel.toLowerCase() === selected.toLowerCase()

        });
        //console.log(filteredjobs);
      }

      // slice the data based on current page
      const {startIndex, endIndex} = calculatePageRange();
      filteredjobs = filteredjobs.slice(startIndex,endIndex)

      return filteredjobs.map((data, i) => <Card key={i} data={data} />)
    }

    const result = filteredData(jobs, selectedCategory, query);

  return (
    <div className=''>
      <Banner query={query} handleInputChange={handleInputChange} handleInputChange1={handleInputChange1}/>
      {/* <Banner query={query1} handleInputChange1={handleInputChange1} /> */}
      

      {/* main content */}
      <div className=' md:grid grid-cols-3 gap-8 lg:px-24 py-12 '>

        {/* left side */}
        <div className=' p-6 rounded-2xl custom-radial ' >
          <Sidebar handleChange={handleChange} handleClick={handleClick}/>
        </div>
        

        {/* job cards */}
        <div className='col-span-2  custom-radial p-6 rounded-2xl '>
          <div className='p-5'>
            
          {
            isLoading ? (<p className='font-medium'>Loading...</p>) : result.length > 0 ? (<Jobs result={result} />) : <>
            <h3 className='text-lg font-bold mb-2'>{result.length} Jobs</h3>
            <p>No data found</p>
            </>
          }
          </div>
         

          {/* pagination here */}
          {
            result.length > 0 ? (
              <div className='flex justify-center mt-4 space-x-8'>
                <button className='hover:underline' onClick={prevPage} disabled={currentPage === 1}>Previous</button>
                <span>Page {currentPage} of {Math.ceil(filteredItems.length/itemsPerPage)}</span>
                <button onClick={nextPage} className='hover:underline'
                  disabled={currentPage === Math.ceil(filteredItems.length/itemsPerPage > itemsPerPage)}>Next</button>
              </div>  

            ) : ""
          }
        </div> 
      </div>
    </div>
  )
}

export default Home