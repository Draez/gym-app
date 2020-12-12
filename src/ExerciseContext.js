import React, { useState, createContext } from 'react';

export const ExerciseContext = createContext();

export const ExerciseProvider = props => {

    const [data, setData] = useState([
        {
            lift: "Deadlifst",
            amount: '105kg',
            reps: 8,
            id: 1
        },
        {
            lift: "Bench press",
            amount: '80kg',
            reps: 6,
            id: 2
        },
        {
            lift: "Squat",
            amount: '110kg',
            reps: 4,
            id: 3
        }
    ]);

    return (
        <ExerciseContext.Provider value={[data, setData]}>
            {props.children}
        </ExerciseContext.Provider>
    );
}