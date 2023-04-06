import Image from "next/image";
import Link from "next/link";
import styles from './toDoCard.module.scss'


const ToDoCard = ({ todo }) => {
    return (
        <Link className={styles.ToDoCard} href={"/eventi/" + todo?.id}>
            <h2 className={styles.title}>{todo.username}</h2>
            <p className={styles.todo}>{todo.todo}</p>
            <Image className={styles.image} src={todo.image} width={200}
                height={200} alt={todo.username} />
        </Link>
    )
}

export default ToDoCard;