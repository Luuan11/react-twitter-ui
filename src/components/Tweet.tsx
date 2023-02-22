
import './Tweet.css';
import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react';

interface TweetProps{
    content: string;
}

export function Tweet(props: TweetProps) {
    return(
        <a href="#" className="tweet">
            <img src="https://pbs.twimg.com/profile_images/1456733134909841419/nWGCp-SS_400x400.jpg" alt="Foto do usuário"/>

            <div className="tweet-content">
                <div className="tweet-content-header">
                    <strong>Luuan</strong>
                    <span>@Luuan011</span>
                </div>

                <p>
                    {props.content}
                </p>

                <div className="tweet-content-footer">
                    <button type="button">
                        <ChatCircle />
                        20
                    </button>

                    <button type="button">
                        <ArrowsClockwise />
                        20
                    </button>

                    <button type="button">
                        <Heart />
                        20
                    </button>
                </div>

            </div>
        </a>
    )
}