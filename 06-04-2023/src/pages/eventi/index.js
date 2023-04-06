import { todos } from '@/pages/api/todos'
import ToDoCard from '@/components/toDoCard'
import styles from '@/styles/Eventi.module.scss'
import Layout from '@/components/layout'

export default function Eventi() {
    return (
        <Layout>
            <div className={styles.Eventi}>
                <h1>Tutti gli eventi in programma</h1>
                <div className={styles.wrapper}>
                    {todos.map((todo) => <ToDoCard todo={todo} />)}
                </div>
            </div>
        </Layout>
    )
}

