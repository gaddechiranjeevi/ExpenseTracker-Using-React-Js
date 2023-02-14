import classes from './Expense.module.css';


const Expense = () => {


    
    return (
            <form className={classes.expense}>
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
                <button>Add Expense</button></div>
            </form>            
    );
};

export default Expense;