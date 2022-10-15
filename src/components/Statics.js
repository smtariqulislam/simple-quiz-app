import React, { useEffect, useState,} from 'react';
import axios from 'axios'
// import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip,} from 'recharts';


const Statics = () => {
    const [url, setUrl] = useState([]);

    useEffect(() => {

        axios.get('https://openapi.programming-hero.com/api/quiz/')
        .then(data => {
            const urlLoader= data.data.data;
            const urldata = urlLoader.map(u =>{
                const course = u.name;
                const quizTotal = u.total;
                const allCourse = {
                    courseName: course,
                    courseQuiz:quizTotal
                }
                return allCourse;

            })
            // console.log(urldata);
            setUrl(urldata);

        });

    }, [])
    
    return (
         <div>

            <BarChart  width={500} height={200} data={url}>
                <Bar dataKey="courseQuiz" fill="#8884d8" />
                <XAxis dataKey="courseName" />
                <YAxis />
                <Tooltip></Tooltip>
            </BarChart>

         </div>
            
    );
};

export default Statics;