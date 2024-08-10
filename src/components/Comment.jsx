import { Avatar } from './Avatar';
import style from './Comment.module.css';

import { ThumbsUp, Trash } from 'phosphor-react';

export function Comment() {
  return (
    <div className={style.comment}>
      <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/54380333?v=4" />
      <div className={style.commentBox}>
        <div className={style.commentContent}>
          <header>
            <div className={style.authorAndTime}>
              <strong>Rafael Souza</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">Cerca de 1h atrás</time>
            </div>

            <button title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}