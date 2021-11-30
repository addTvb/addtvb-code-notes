import React from "react";
import styles from "./Bio.module.css";
import Photo from "../components/Bio/img/arslan-abayev.jpg";

function Bio(props) {
    return (
        <div
            className={`
      ${styles.Bio}
      ${props.className || ""}
    `}
        >
            <img
                src={Photo}
                alt="Abaev Arslan smiles in a blue shirt"
            />
            <p>
                Небольшой блог с заметками в виде применимых на практике
                кусочков кода для разных нужд, этакий блог шпаргалка <span role='img' aria-label="coder and smile emojis">👨‍💻😅</span>.
                <br />
                Блог был создан с помощью:{" "}
                <a href="https://github.com/jamesknelson/create-react-blog">
                    create-react-blog
                </a>
                <br />
                Автор:{" "}
                <a href="https://www.linkedin.com/in/arslan-abayev-addtvb/">
                    Abayev Arslan
                </a>{" "}
                aka{" "}
                <a href="https://www.linkedin.com/in/arslan-abayev-addtvb/">
                    addTvb
                </a>
                <br />
            </p>
        </div>
    );
}

export default Bio;
