import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import './Status.css'
import { PaperPlaneRight } from "phosphor-react"

export function Status(){
    const [newAnswer, setNewAnswer] = useState('')
    const [answers, setAnswers] = useState([
        'Concordo',
        'Faz sentido',
        'Verdade',
    ])

    function createNewAnswer(event: FormEvent) {
        event.preventDefault()
    
        setAnswers([newAnswer, ...answers])
        setNewAnswer('')
      }
    
      function handleHotkeySubmit(event: KeyboardEvent) {
        if (event.key === 'Enter') {
          setAnswers([newAnswer, ...answers])
          setNewAnswer('')
        }
      }

    return(
        <main className="status">

            <Header title='Tweet' />

            <Tweet content="Olá passarinhos azuis, me chamo Luan Fernando e sou fascinado por programação e gosto muito de tecnologia, quero muito me tornar dev front-end, alguém tem uma dica ai hein hein? " />

            <Separator />

            <form onSubmit={createNewAnswer} className="answer-tweet-form">
                <label htmlFor="tweet">
                    <img src="https://pbs.twimg.com/profile_images/1456733134909841419/nWGCp-SS_400x400.jpg" alt="Luan Fernando" />
                    <textarea 
                    id="tweet" 
                    placeholder="Tweet your answer"
                    value={newAnswer}
                    onKeyDown={handleHotkeySubmit}
                    onChange={(event) =>[
                        setNewAnswer(event.target.value)
                    ]}
                     />
                </label>

                <button type="submit">
                    <PaperPlaneRight />
                    <span>Answer</span> 
                </button>
            </form>

            {answers.map(answers => {
                return <Tweet key={answers} content={answers} />
            })}
          </main>
    )
}