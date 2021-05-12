import { addManyCustomersAction } from '../store/customerReducer'

export const fetchCustomers = () => {
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => dispatch(addManyCustomersAction(data)))
    }
}