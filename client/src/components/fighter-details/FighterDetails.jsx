import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as fighterService from '../../services/fighterService'

export default function FighterDetails() {
    const [fighter, setFighter] = useState({});
    const { fighterId } = useParams();

    useEffect(() => {
        fighterService.getOne(fighterId)
        .then(setFighter)
    }, [fighterId]);

    return (


        <section id="details-page">

            <div className="main_card">
                <div className="card_left">
                    <div className="card_datails">

                        <h1>Name:{fighter.title}</h1>
                        <div className="card_fighter">
                            <p className="wins">Wins: </p>
                            <p className="loses">Loses: </p>
                            <p className="weight">Weight: </p>
                        </div>

                        <p className="disc">Description: {fighter.description} </p>
                        {/* {{ #if user }} */}
                        <div className="social-btn">
                            {/* {{ #if isOwner }} */}
                            {/* <!-- Only for registered user and author of the post --> */}
                            <a href="/fighters-list/${fighterId}/edit" className="edit-btn">Edit</a>
                            <a href="/fighter-list/${fighterId}/delete" className="del-btn">Delete</a>
                            {/* {{ else}}
                                {{ #if hasSign }}
                                <!-- logged in user who has already voted--> */}
                            <p className="thanks-for-sign">Thanks For Signing</p>
                            {/* {{ else}}
                                <!-- logged in users, who have not yet voted--> */}
                            <a href="/fighters-list/${figterId}/signUp" className="sign-up">Sign</a>
                            {/* {{/if}}
                                {{/if}} */}
                        </div>
                        {/* {{/if}} */}
                    </div>
                </div>
                <div className="card_right">
                    <img src={fighter.imageUrl} alt={fighter.title} />
                </div>
            </div>



        </section>
    );
}