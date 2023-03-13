import './index.css'

const Form = ({ submit }) => {
    return (
        <form className='Form' action="submit" onSubmit={submit}>
            <input type="text" name="appuntamento" placeholder='Inserisci appuntamento' required />
            <input type="date" name="data" placeholder='Data (gg-mm-aaaa)' required />
            <button type='submit'>Aggiungi appuntamento</button>
        </form>
    )
}

export default Form