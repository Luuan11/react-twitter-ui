import { FormEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import './Status.css'

export function Status(){
    const [newAnswer, setNewAnswer] = useState('')
    const [answers, setAnswers] = useState([
        'Concordo',
        'Faz sentido',
        'Verdade',
    ])

    function createNewAnswer(event: FormEvent){
        event.preventDefault()

        setAnswers([...answers, newAnswer])

        //deletando o value do textarea
        setNewAnswer('')
    }

    return(
        <main className="status">

            <Header title='Tweet' />

            <Tweet content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid perspiciatis soluta voluptatum ratione veniam repellat enim impedit natus quae voluptate autem, itaque quia dicta iusto delectus dolorum ipsam sequi quidem!" />

            <Separator />

            <form onSubmit={createNewAnswer} className="answer-tweet-form">
                <label htmlFor="tweet">
                    <img src="https://pbs.twimg.com/profile_images/1456733134909841419/nWGCp-SS_400x400.jpg" alt="Luan Fernando" />
                    <textarea 
                    id="tweet" 
                    placeholder="Tweet your answer"
                    onChange={(event) =>[
                        setNewAnswer(event.target.value)
                    ]}
                     />
                </label>

                <button type="submit">Answer</button>
            </form>

            {answers.map(answers => {
                return <Tweet key={answers} content={answers} />
            })}
          </main>
    )
}