import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCustomerAction } from './store/customerReducer'
import { removeCustomerAction } from './store/customerReducer'
import { fetchCustomers } from './asyncActions/customers'

function App(props) {

    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash.cash)
    const customers = useSelector(state => state.customers.customers)

    const addCash = (cash) => {
        dispatch({type: 'ADD_CASH', payload: cash})
    }

    const getCash = (cash) => {
        dispatch({type: 'GET_CASH', payload: cash})
    }

    const addCustomer = (name) => {
        const customer = {
            id: Date.now(),
            name
        }
        dispatch(addCustomerAction(customer))
    }

    const removeCustomer = (customer) => {
        dispatch(removeCustomerAction(customer.id))
    }

    return (
        <>
            <div>
                <a href='https://the-lensky.github.io/redux/' target='_blank' rel="noreferrer" >Репо</a>
            </div>
        <div className='app'>
            <div className='cash'>{cash}</div>
            <div className='btn-container'>
                <button onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
                <button onClick={() => getCash(Number(prompt()))}>Снять со счета</button>
                <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
                <button onClick={() => dispatch(fetchCustomers())}>Добавить клиентов из базы</button>
            </div>
            {
                customers.length > 0
                    ? <div className='customers'>
                        {customers.map(customer =>
                            <div className='hover' key={customer.id} onClick={() => removeCustomer(customer)}>{customer.name}</div>
                        )}
                    </div>
                    : <div className='err'>Клиенты отсутствуют!</div>
            }
        </div>
            </>
    )
}

export default App