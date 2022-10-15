import React, { useEffect, useState,} from 'react';
import axios from 'axios'
import { BarChart, Bar, XAxis, YAxis, Tooltip,} from 'recharts';


const Statics = () => {
    const [url, setUrl] = useState([]);

    useEffect(() => {

        axios.get('https://openapi.programming-hero.com/api/quiz/')
        .then(data => {
            const urlLoader= data.data.data;
            // console.log(urlLoader)

            const urldata = urlLoader.map(u =>{
                const course = u.name;
                const quizTotal = u.total;
                // console.log(course);
                // console.log(quizTotal);
                const competecourse = {
                    
                    courseName: course,
                    courseQuiz:quizTotal

                }
                return competecourse;

            })
            // console.log(urldata);
            setUrl(urldata);

        });

    }, [])
    
    return (
        // <ResponsiveContainer width="100%" height="100%">
            <BarChart width={500} height={200} data={url}>
                <Bar dataKey="courseQuiz" fill="#8884d8" />
                <XAxis dataKey="courseName"/>
                <YAxis/>
                <Tooltip></Tooltip>
            </BarChart>
        // </ResponsiveContainer>
    );
};

export default Statics;