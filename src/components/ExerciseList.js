import React from 'react'

export const ExerciseList = ({ lift, amount, reps }) => {
    return (
        <>
            <div className="lifts__single">
                <h3>{lift}</h3>
                <span className="maksimi">{amount}</span>
                <p>{reps} reps</p>
            </div>
        </>
    )
}
