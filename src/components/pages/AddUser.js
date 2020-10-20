import React from 'react'

export const AddUser = () => {
    return (
        <div>
            <h1>Lisää nosto</h1>

            <form>
                <input type="select" name="move" placeholder="Valitse liike (mave, kyykky...)" />
                <input type="select" name="amount" placeholder="Toistojen määrä" />
                <input type="select" name="amount" placeholder="Käytetty paino" />
                <input type="text" name="amount" placeholder="Päivän fiilis" />
                <input type="select" name="amount" placeholder="Video nostosta" />
            </form>
        </div>
    )
}
