import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

const Answer = ({ ques }) => {
    const { correctAnswer, options, question } = ques;
    const notify = () => toast(`Answer is:  ` + correctAnswer);

    function han(id) {

        // console.log(correctAnswer);

        if (correctAnswer === options[id]) {
            // console.log(options[id]);
            toast("Right answer congratulations");

        } else {
            toast("sorry wrong answer");
        }


    }

    return (

        <div className="flex flex-col max-w-md gap-2 p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
            <h2 className=" items-center gap-2 text-x font-semibold leading-tight tracking-wide">Question: <span className=" items-center gap-2 text-xl font-semibold leading-tight tracking-wide  text-sky-500" dangerouslySetInnerHTML={{ __html: question }}>
            </span>
                <svg viewBox="0 0 512 512" className="w-6 h-6 fill-current shrink-0 dark:text-violet-400">
                    <FontAwesomeIcon onClick={notify} icon={faEye}></FontAwesomeIcon>

                </svg>
            </h2>
            <div className=" gap-2 mt-6 ">
                <p className="flex-1 dark:text-gray-400">Select Answer:</p>
                {
                    options.map((option, id) => (
                        <button
                            onClick={() => han(id)} className={`px-8 block w-full mt-4 py-3 font-semibold rounded-full  text-pink-100`}>{id}){option}</button>
                    ))}
                <ToastContainer />
              
            </div>
        </div>
    );
};

export default Answer;