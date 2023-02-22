import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";

import './Timeline.css';

const tweets = [
    'Meu primeiro tweet',
    'Teste',
    'Deu certo'
]

export function Timeline(){
    return(
        <main className="timeline">

            <Header title='Home' />

            <form className="new-tweet-form">
                <label htmlFor="tweet">
                <img src="https://pbs.twimg.com/profile_images/1456733134909841419/nWGCp-SS_400x400.jpg" alt="Luan Fernando" />
                <textarea id="tweet" placeholder="What's happening? "></textarea>
                </label>

                <button type="submit">Tweet</button>
            </form>

            <Separator />

            {tweets.map(tweet => {
                return <Tweet key={tweet} content={tweet} />
            })}

          </main>
    )
}