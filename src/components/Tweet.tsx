
import './Tweet.css';
import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react';

export function Tweet() {
    return(
        <a href="#" className="tweet">
            <img src="https://pbs.twimg.com/profile_images/1456733134909841419/nWGCp-SS_400x400.jpg" alt="Foto do usuário"/>

            <div className="tweet-content">
                <div className="tweet-content-header">
                    <strong>Luuan</strong>
                    <span>@Luuan011</span>
                </div>

                <p>

                {/* <img src="https://pbs.twimg.com/media/EupM-VeWYAUvrOI?format=jpg&name=small" alt="" /> */}

                QUE EP FODA DE DEMON SLAYER

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