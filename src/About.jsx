import React from "react";
import Header from "./NavBar";

import "./planner.css";

const About = () => {
    return(
        <>
            <Header/>
            <h1>About this site</h1>
            <p>If you found this website, you most likely were told about it by me!(Tristan)</p>
            <p>Current version is Beta 1.0 and subject to change a bit over time</p>
            <p>Soon to be open-sourced if not already</p>
            <p>How to use:</p>
            <ol>
                <li>After creating account and logging in, you'll be brought to the home dashboard showing one example meal.</li>
                <li>You can click on the meal to see that you can update the contents of the meal or remove it entirely</li>
                <li>Click on the add meal button at the top to create a whole new meal </li>
                <li>Click on meal planner to confirm your phone number and set how many meals you want texted to you each week. Default is set at 7. Set to zero if you don't want meals sent to you</li>
                <li>Nothing more needs to be done on your end as the server will take your settings and randomly select meals for you and text you the compiled grocery list every Sunday! </li>
                <li>Message me for any questions or to report bugs!</li>
            </ol>
            <p>Have fun!</p>

        </>
    )
}

export default About;