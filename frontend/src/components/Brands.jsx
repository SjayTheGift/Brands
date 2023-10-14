import { useEffect, useState } from "react";
import axios from 'axios';
import Line from "./Line";

const Brands = () => {

  const [brands, setBrands] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');
  const [filter, setFilter] = useState('');

  const handleSortChange = (event) => {
    const sortBy = event.target.value;
    console.log(sortBy)
    setSortOrder(sortBy);
  };

  const handleFilterChange = (event) => {
    const filterBy = event.target.value;
    console.log(filterBy)
    setFilter(filterBy);
  };

  useEffect(() =>{
    fetchBrands();
    
  },[sortOrder, filter])

  // http://localhost:5000/api/brands?sort=name:desc&filter=published:true

  const fetchBrands = () =>{
    axios.get(`http://localhost:5000/api/brands?sort=name:${sortOrder}&filter=published:${filter}`)
    .then(response => {
      // Handle the response data
      setBrands(response.data)
      console.log(response.data);
  
    })
    .catch(error => {
      // Handle any errors
      console.error('Error:', error);
    });
  }
 

  return (
    <section className='bg-white text-black z[2] py-12 px-6'> 
        <div className='max-w-[1440px] mx-auto'>  
            <div className='flex flex-row items-center text-center gap-3 mb-8'>
                <Line/>
                <p>You'll be in good company</p>
            </div>

            <h3 className='text-2xl md:text-4xl font-semibold mt-6 mb-[40px] text-gray-700'>Trusted by leading brands</h3>
          
              <h2>Filter Brands</h2>
              <div className="flex flex-col md:flex-row gap-2 md:gap-5">
                <div>
                  <label htmlFor="sort">Sort By:</label>
                  <select id="sort"  onChange={handleSortChange}>
                    <option value="asc">Ascending </option>
                    <option value="desc">Descending </option>
                  </select>
                </div>
                <div>
                  <label htmlFor="filter">Filter By:</label>
                  <select id="filter" onChange={handleFilterChange}>
                    <option value="">All</option>
                    <option value="true">Published</option>
                  </select>
                </div>
            </div>
            <div className="grid grid-cols-5 gap-4">
              {brands?.map((brand) => 
                <div key={brand.id} className="flex items-center justify-center">
                  <img  src={`data:image/jpeg;base64,${brand.image_url}`} alt={brand.name} className="max-w-full h-auto" />
                </div>
              )}
            </div>
            

        </div>
    </section>
  )
}

export default Brands
