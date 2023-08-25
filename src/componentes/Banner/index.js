import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/minha_foto.png'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Dev, Front-end
                </h1>

                <p className={styles.paragrafo}>            
                    Boas vindas ao meu espaço pessoal! Eu sou Gideon Alves, Estudante de Front-end.
                    </p>
                    <p className={styles.paragrafo}>            

                    Aqui compartilho vários conhecimentos, espero que aprenda algo novo :)
                    </p>

            </div>

            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                    alt=""
                />

                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Foto do Antônio Evaldo sorrindo"
                />
            </div>
        </div>
    )
}