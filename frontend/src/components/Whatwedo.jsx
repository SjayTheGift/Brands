import Line from './Line'

import ux_icon from '../assets/ux_icon.png'
import app_dev_icon from '../assets/app_dev_icon.png'
import blockchain_icon from '../assets/blockchain_icon.png'
import web_dev_icon from '../assets/web_dev_icon.png'


const Whatwedo = () => {
  return (
    <section className='bg-white text-black z[2] py-12 px-6'> 
        <div className='max-w-[1440px] mx-auto flex flex-col'>  
            <div className='flex flex-row items-center gap-3 mb-8'>
                <Line/>
                <p>What we do</p>
            </div>
            <h2 className='text-gray-700 md:text-6xl mb-8'>
                We offer a complete range of bespoke design and development services to help you turn your ideas into digital masterpieces
            </h2>
            <div className='flex flex-col md:flex-row gap-8 justify-between items-center'>
                <div className='md:w-[300px] flex flex-col items-center'>
                    <img src={web_dev_icon}/>
                    <p className='my-8 font-bold'>Web development</p>
                    <p>We use cutting-edge web development technologies to help our clients fulfill their business goals through functional, reliable solutions.</p>
                </div>
                <div className='md:w-[300px] flex flex-col items-center'>
                    <img src={ux_icon}/>
                    <p className='my-8 font-bold'>User experience & design</p>
                    <p>Our complete web design services will bring your ideas to life and provide you with a sleek, high-performing product that elevates your business.</p>
                </div>
                <div className='md:w-[300px] flex flex-col items-center'>
                    <img src={app_dev_icon}/>
                    <p className='my-8 font-bold'>Mobile app development</p>
                    <p>Our extensive mobile development experience allows us to create custom native and cross-platform iOS and Android mobile solutions for our clients.</p>
                </div>
                <div className='md:w-[300px] flex flex-col items-center'>
                    <img src={blockchain_icon}/>
                    <p className='my-8 font-bold'>Blockchain solutions</p>
                    <p>We conduct market research to determine the optimal blockchain-based solutions to help you grow your company and achieve your business goals.</p>
                </div>

            </div>
        </div>
 
    </section>
  )
}

export default Whatwedo
