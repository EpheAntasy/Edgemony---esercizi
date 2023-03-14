import './index.css'

const Form = ({ submit }) => {
    return (
        <form className='Form' action="submit" onSubmit={submit}>
            <input type="text" name="prodotto" placeholder='Nuovo prodotto' required />
            <button type='submit'>Aggiungi</button>
        </form>
    )
}

export default Form