import React from 'react';
import { Link } from 'react-router-dom';
// import '/public/favio.jpg'
const pic = new URL("/public/favio.jpg",import.meta.url);

const Home = () => {
    return (
       <div>
            <section>
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row">
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72">
                        <img  src={pic} alt=""  className="object-contain h-72 sm:h-80" />
                    </div>

                    <h2 className="text-4xl text-center font-bold leading-none sm:text-5xl">Quiz is a game or competition in which someone tests your knowledge by asking you questions.
                        <br /><br/> <br/>
                        <span className="text-violet-600"> Let's start game click start button.</span>
                    </h2> 
                    <div className=" mt-5 invisible sm:visible lg:invisible flex flex-wrap justify-center">
                        <Link to='/quiz'><button className='px-8 block w-full mt-4 py-3 font-semibold rounded-full bg-green-500 text-gray-100 hover:bg-green-900'>start</button></Link>
                    </div>
                    <div className=" invisible lg:visible flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 ">
                        <img src={pic} alt="" className="object-contain h-72 " />
                    </div>
                </div>
                <div className="invisible lg:visible flex flex-wrap justify-center">
                    <Link to='/quiz'><button className='px-8 block w-full mt-4 py-3 font-semibold rounded-full bg-green-500 text-gray-100 hover:bg-green-900'>start</button></Link>
                </div>
            </section>


           
       </div>
    );
};

export default Home;