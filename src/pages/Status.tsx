import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

const answers = [
    'Concordo',
    'Faz sentido',
    'Verdade'
]

import './Status.css'

export function Status(){
    return(
        <main className="status">

            <Header title='Tweet' />

            <Tweet content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid perspiciatis soluta voluptatum ratione veniam repellat enim impedit natus quae voluptate autem, itaque quia dicta iusto delectus dolorum ipsam sequi quidem!" />

            <Separator />

            <form className="answer-tweet-form">
                <label htmlFor="tweet">
                    <img src="https://pbs.twimg.com/profile_images/1456733134909841419/nWGCp-SS_400x400.jpg" alt="Luan Fernando" />
                    <textarea id="tweet" placeholder="Tweet your answer" ></textarea>
                </label>

                <button type="submit">Answer</button>
            </form>

            {answers.map(answers => {
                return <Tweet key={answers} content={answers} />
            })}
          </main>
    )
}