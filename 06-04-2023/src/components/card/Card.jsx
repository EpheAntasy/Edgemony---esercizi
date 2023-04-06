import Image from "next/image";
import Link from "next/link";
import styles from './card.module.scss'

const Card = (props) => {
    const { post } = props;
    return (
        <Link href={"/blog/" + post?.slug}>
            <div className={styles.Card}>
                <Image
                    src={post.image}
                    width={300}
                    height={300}
                    alt={post?.title}
                />
                <p>{post.date}</p>
                <h3>{post.title}</h3>
            </div>
        </Link>
    )
}

export default Card;