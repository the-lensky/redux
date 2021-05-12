import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function App(props) {

    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash.cash)

    const addCash = (cash) => {
        dispatch({type: 'ADD_CASH', payload: cash})
    }

    const getCash = (cash) => {
        dispatch({type: 'GET_CASH', payload: cash})
    }

    return (
        <div className='app'>
            <div className='cash'>{cash}</div>
            <div className='btn-container'>
                <button onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
                <button onClick={() => getCash(Number(prompt()))}>Снять со счета</button>
            </div>
        </div>
    )
}

export default App