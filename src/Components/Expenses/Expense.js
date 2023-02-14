import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { Fragment, useEffect, useRef, useState } from 'react';
import classes from './Expense.module.css';
import { ThemeAction } from '../../store/theme-reducer';
import { expensAction } from '../../store/expense-reducer';


const Expense = () => {
    const expenseRef = useRef(null);
    const descriptionRef = useRef('');
    const categoryRef = useRef('');
    const [totalExpense, setTotalExpense] = useState(0);
    const dispatch = useDispatch();

    const expensesDispatched = useSelector((state) => state.expenses);
    console.log(expensesDispatched.expenses);

    const getExpenseData = () => {
        axios.get(
            'https://expense-tracker-7d5cb-default-rtdb.firebaseio.com/expense.json'
            ).then((res) => {
                const data = res.data;
                let sumOfExpenses = 0;
                Object.values(data).forEach((item) => {
                    sumOfExpenses += Number(item.amount)
                })
                setTotalExpense(sumOfExpenses);
                dispatch(expensAction.onAddOrGetExpense(data))
            }).catch((err) => {
                console.log(err);
            })
    };

    useEffect(getExpenseData, [dispatch]);

    const addExpenseHandler = async(event) => {
        event.preventDefault();

        const enteredExpense = expenseRef.current.value;
        const enteredDescription = descriptionRef.current.value;
        const enteredCategory = categoryRef.current.value;

        const expenseObj = {
            amount: enteredExpense,
            description: enteredDescription,
            category: enteredCategory
        };

        try {
            const res = await axios.post('https://expense-tracker-7d5cb-default-rtdb.firebaseio.com/expense.json',
            expenseObj );
            console.log(res);
            getExpenseData();
        } catch (err) {
            console.log(err);
        }
    };
    const deleteExpenseHandler = (expenseId) => {
        axios.delete(
            `https://expense-tracker-7d5cb-default-rtdb.firebaseio.com/expense/${expenseId}.json`
        ).then((res) => {
            console.log(res);
            getExpenseData();
        }).catch((err) => {
            console.log(err);
        })
    };

    const editExpenseHandler = (expenseId) => {
        expenseRef.current.value = expensesDispatched.expenses[expenseId].amount;
        descriptionRef.current.value = expensesDispatched.expenses[expenseId].description;
        categoryRef.current.value = expensesDispatched.expenses[expenseId].category;
        deleteExpenseHandler(expenseId);
    };

    
    return (
        <Fragment>
            <form className={classes.expense}onSubmit={addExpenseHandler}>
                <h1>Add Expense</h1>
                <div className={classes.amount}>
                <input
                    name='expense'
                    type='number'
                    placeholder='Enter your Expense'
                    ref={expenseRef}
                    required
                />
                </div>
                <div className={classes.desc}>
                <input
                    name='description'
                    type='description'
                    placeholder='Description'
                    ref={descriptionRef}
                    required
                />
                </div>
                <div className={classes.select}>
                <select
                    placeholder='Category'
                    ref={categoryRef}
                    required >
                    <option selected>Select Category</option>
                    <option>Food</option>
                    <option>Petrol</option>
                    <option>Movie</option>
                    <option>Vacation</option>
                    <option>Shopping</option>
                    <option>Others</option>
                    </select>
                </div><div>
                <button>Add Expense</button></div><hr className={classes.hr}/>
                <div className={classes.details}>
                    <div className={classes.Am}>Amount(Rs)</div>
                    <div className={classes.Des}>Description</div>
                    <div className={classes.Cat}>Category</div>
                </div>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </form>
            {totalExpense > 10000 && (
                <button className={classes.btn}onClick={() => 
                    dispatch(ThemeAction.onThemeChange())}>
                    Active Premium
                </button>
            )}
            <div>
                <ul>
                    {Object.keys(expensesDispatched.expenses).map((expense) => {
                    return (
                            <li className={classes.list} key={expense}>
                                <span style={{fontWeight: 'bold', 
                                              marginLeft:'5%'}}>
                                   Rs: {expensesDispatched.expenses[expense].amount}  
                                </span>

                                <span style={{
                                    marginLeft:'15%'
                                }}> 
                                    {expensesDispatched.expenses[expense].description}
                                </span>

                                <span style={{
                                    marginLeft:'25%'
                                }}>  
                                    { expensesDispatched.expenses[expense].category }  
                                </span>
                                <button  
                                        style={{
                                            backgroundColor: 'green',
                                            color:'white',
                                            border:'1px solid green',
                                            marginLeft:'20%'
                                        }} 
                                        onClick={() => editExpenseHandler(expense)}>Edit
                                    </button>
                                    <button
                                        style={{
                                            backgroundColor: 'red',
                                            marginLeft:'10px',
                                            color:'white',
                                            border: '1px solid red'
                                        }} 
                                        onClick={() => deleteExpenseHandler(expense)}>Delete
                                    </button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </Fragment>
    );

};

export default Expense;