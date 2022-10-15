import React from 'react';
import { Link } from 'react-router-dom';

const QuizDetails = ({ quizDetails }) => {
    const { id, name, logo, total } = quizDetails;
    return (
        <Link href={`https://openapi.programming-hero.com/api/quiz/${id}`}>
            <div>

                <div className='bg-gray-100 p-6 rounded shadow-lg'>
                    <img
                        className='object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80'
                        src={logo}
                        alt=''
                    />
                    <p className='mb-2 text-xl font-bold leading-none sm:text-2xl'>{name}</p>
                    <p className='text-gray-700 '>Total: {total}</p>

                    <p

                    >
                        <Link to={`/quiz/${id}`}><button className='px-8 block w-full mt-4 py-3 font-semibold rounded-full bg-cyan-200 text-gray-800 hover:bg-cyan-400'>{name}</button></Link>
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default QuizDetails;