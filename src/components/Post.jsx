import style from './Post.module.css'
import { Comment } from './Comment';
import { Avatar } from './Avatar';
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react';

export function Post({author, publishedAt, content}) {
    const [comments, setComments] = useState([
        'Que tooop!'
    ])

    const [newCommentText, setNewCommentText] = useState('')

    

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'as' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    const handleCreateNewComment = () => {
        event.preventDefault()
        setComments([...comments, newCommentText])
        setNewCommentText('')
    }

    function handleNewCommentChange () {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }

    function handleNewCommentInvalid () {
        event.target.setCustomValidity('Esse campo e obrigatorio')
    }

    function deleteComment(commentToDelete){
        const commenstWithoutDeleteOne = comments.filter(comment => {
            return comment !== commentToDelete
        })
        setComments(commenstWithoutDeleteOne);
    }

    return (
        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={style.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time 
                    title={publishedDateFormatted} 
                    dateTime={publishedAt.toISOString()}
                >
                    {publishedDateRelativeToNow}
                </time>
            </header>
            <div className={style.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    }else if (line.type === 'link') {
                        return <p key={line.content}><a href='#'>{line.content}</a></p>
                    }
                })}
            </div>
            <form
                onSubmit={handleCreateNewComment}  
                className={style.commentForm}
            >
                <strong>Deixe eu feedback</strong>
                <textarea
                    name='comment'
                    placeholder='Deixe um comentario'
                    onChange={handleNewCommentChange}
                    value={newCommentText}
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <footer>
                    <button 
                        type='submit' 
                        disabled={newCommentText.length === 0}
                    >
                        Publicar
                    </button>
                </footer>
            </form>
            <div className={style.commentList}>
                {comments.map(comment => { 
                    return (
                        <Comment 
                            key={comment} 
                            content={comment} 
                            onDeleteComment={deleteComment}
                        />
                    )
                })}
            </div>
        </article>
    )
}