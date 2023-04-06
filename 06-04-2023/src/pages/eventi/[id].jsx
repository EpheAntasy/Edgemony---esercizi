import Image from 'next/image'
import Layout from '@/components/layout'
import { getAllIds, getTodoFromId } from '@/utils/todos'
import styles from '../../styles/Eventi.module.scss'

const ToDo = ({ toDoData }) => {
    return (
        <Layout>
            <div className={styles.ToDo}>
                <h2 className={styles.title}>{toDoData.username}</h2>
                <p className={styles.todo}>{toDoData.todo}</p>
                <Image className={styles.image} src={toDoData.image} width={200}
                    height={200} alt={toDoData.username} />
            </div>
        </Layout>
    )
}

export default ToDo

export const getStaticPaths = () => {
    const paths = getAllIds();
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = ({ params }) => {
    const toDoData = getTodoFromId(params.id)
    return {
        props: {
            toDoData
        }
    }
}

