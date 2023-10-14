import Line from './Line'

const Footer = () => {
  return (
    <section className='bg-colorDarkPurple text-white z[2] py-12 px-6'> 
        <div className='max-w-[1440px] mx-auto'>  
            <div className='flex flex-row items-center text-center gap-3 mb-8'>
                <Line/>
                <p>Contact us</p>
            </div>

            <div className='flex flex-col md:flex-row justify-between md:items-center my-5'>
                <h3 className='font-bold text-2xl md:text-3xl'>Have a project in mind ? <br/>Let's make it happen</h3>

                <div className='flex flex-col my-5 md:my-0'>
                    <p>22 Street Name, Suburb, 8000,</p>
                    <p>Cape Town, South Africa</p>
                    <p>+27 21 431 0001</p>
                    <p>enquirie@website.co.za</p>
                </div>
            </div>

            <div className='flex flex-wrap md:flex-row justify-between md:items-center mt-8 gap-4'>
                <ul className='flex flex-col'>
                    <li>Terms of service</li>
                    <li>Privacy policy</li>
                    <li>Impressum</li>
                </ul>
                <ul className='flex flex-col'>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Twitter</li>
                </ul>
                <ul className='flex flex-col'>
                    <li>Github</li>
                    <li>Linkedin</li>
                    <li>Teams</li>
                </ul>
                <ul className='flex flex-col'>
                    <li>Youtube</li>
                    <li>Behance</li>
                    <li>Dribbble</li>
                </ul>

                <div className='flex flex-col'>
                    <p>Explore open jobs</p>
                    <p className='my-4'>©2000—2023 Company Name</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer