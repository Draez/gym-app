import React, { useState, useContext } from 'react'
import { ExerciseList } from '../ExerciseList';
import { ExerciseContext } from './../../ExerciseContext';

export const Home = () => {
    const [data, setData] = useContext(ExerciseContext)
    return (
        <div>
            <h1>Kehitys</h1>
            <div className="lifts">
                {data.map(exercise => (
                    <ExerciseList
                        lift={exercise.lift}
                        amount={exercise.amount}
                        reps={exercise.reps}
                        key={exercise.id} />
                ))}
            </div>

            <h1>Viimeisimmät nostot</h1>
            <iframe src="https://www.w3schools.com" title="W3Schools Free Online Web Tutorials"></iframe>

        </div>
    )
}
