import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {addCustomerAction, removeCustomerAction} from "./store/customerReducer";
import {fetchCustomers} from "./asyncActions/customers";
import {decrementAction, incrementAction} from "./store/countReducer";

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customers.customers)
  const count = useSelector(state => state.count.count)
    const increment = () => {
      dispatch(incrementAction())
    }
    const decrement = () => {
        dispatch(decrementAction())
    }
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
        Наш счетчик:{count}
      <div>
          <button style={{background:'lightgoldenrodyellow'}}
                  onClick={() => increment()}>
              Увеличить счетчик
          </button>
          <button style={{background:'yellowgreen'}}
                  onClick={() => decrement()}>
              Уменьшить счетчик
          </button>
      </div>
        <div>{cash}</div>
        <div style={{display:'flex',}}>
        <button onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
        <button onClick={() => getCash(Number(prompt()))}>Снять счет</button>
        <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
        <button onClick={() => {dispatch(fetchCustomers())}}>Получить всех клиентов.</button>
      </div>
        <div>
            {customers.length > 0
                ?
                <div>
                    {customers.map(customer =>
                        <div>
                            {customer.name}
                            <div>
                                <button onClick={()=> removeCustomer(customer)}>удалить</button>
                            </div>
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
