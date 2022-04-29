import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {addCustomerAction, removeCustomerAction} from "./store/customerReducer";

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customers.customers)
    const addCash = (cash) => {
      dispatch({type:'ADD_CASH',payload:cash})
    }
    const getCash = (cash) => {
        dispatch({type:'GET_CASH',payload:cash})
    }
    const addCustomer = (name) => {
      let customer = {
          id:Date.now(),
          name:name,
      }
      dispatch(addCustomerAction(customer))
    }
    const removeCustomer = (customer) => {
        dispatch(removeCustomerAction(customer))
    }
  return (
    <div className="App">
      <div>{cash}</div>
      <div style={{display:'flex',}}>
        <button onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
        <button onClick={() => getCash(Number(prompt()))}>Снять счет</button>
        <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
        <button onClick={() => getCash(Number(prompt()))}>Удалить клиента</button>
      </div>
        <div>
            {customers.length > 0
                ?
                <div>
                    {customers.map(customer =>
                        <div onClick={() => removeCustomer(customer)}>
                            {customer.name}
                        </div>
                    )}
                </div>
                :
                <div style={{fontsize: '2rem',margin:10}}>
                    Клиенты отсутствуют.
                </div>
            }
        </div>
    </div>
  );
}

export default App;
