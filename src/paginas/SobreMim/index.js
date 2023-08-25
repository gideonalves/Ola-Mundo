import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Gideon!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Antônio Evaldo sorrindo"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Oi, tudo bem? Eu sou estudante de Front-end na Alura e estou feliz de te ver por aqui.
            </p>
            <p className={styles.paragrafo}>
                Minha história com programação começou com um curso de arduino, quando fiz o primeiro projeto com um carrinho controlado com bluetooth. Eu aprendi lógica de programação na pratica controlando leds. Depois fiz um bootcamp, Rocketseat com as linguagem de programação HTML, CSS, Javascript e SQL, e dpois fui me aprofundar busquei novas linguagem com React.js e Typescript.
            </p>
            <p className={styles.paragrafo}>
                Nom momento trabalho de motoboy e na parte da manha estudo das 7:00 as 11:00 para buscar minha primeira oportunidade de Front-end 
            </p>
            <p className={styles.paragrafo}>
                Tive a oportunidade de ajudar uma associação fazendo um site e procuro novas oportunidade
            </p>
         
        </PostModelo>
    )
}