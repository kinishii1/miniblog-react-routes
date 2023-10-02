import styles from './PageModel.module.css';

type PostModeloProps = {
  children: React.ReactNode;
  imgSource: string;
  title: string;
}

export default function PostModelo({ children, imgSource, title }: PostModeloProps): JSX.Element {
  return (
    <article className={styles.postModeloContainer}>
      <div
                className={styles.fotoCapa}
                style={{ backgroundImage: `url(${imgSource})` }}
            ></div>
      <h2 className={styles.titulo}>
        {title}
      </h2>
      <div className={styles.postConteudoContainer}>
        {children}
      </div>
    </article>
  )
}