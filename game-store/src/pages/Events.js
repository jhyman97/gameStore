import "./Events.css";
import cardGameGroup from "../images/CardGameGroup.png";
import diceGames from "../images/DiceGames.jpeg";

const Events = () => {
    return (
        <>
        <head>
            <title>CrowPing Games</title>
        </head>
        <body>
            <section class="header">
                <section class="login">
                    <h2>Sign In</h2>
                    <h3 id="input">Enter Username</h3>
                    <h3 id="input">Enter Password</h3>
                </section>
                <section id="cart">
                    <h4>Your Cart</h4>
                </section>
            </section>
            <nav id="main-nav">
                <ul>
                    <li><a href="./Home">Home</a></li>
                    <li><a href="./About">About</a></li>
                    <li><a href="./Store">Store</a></li>
                    <li><a id="events" href="./Events">Events</a></li>
                </ul>
            </nav>
            <h1 id="title">CrowPing Games</h1>
            <main class="main">
                <section class="flexbox box1">
                    <img src={cardGameGroup} height="400px" width="270px" alt="200x100"></img>
                    <div class="text">
                        <h3>Games Night!</h3>
                        <p>CrowPing Games is delighted to present our first ever weekly game night! This week’s game night comes up on February 22nd, 2025. There will be sections for board games, TTRPGs, and card games, as well as free pizza and drinks. Swing by at 7 P.M. this Saturday to meet the CrowPing community and game. </p>
                    </div>
                </section>
                <section class="flexbox box2">
                    <div class="text">
                        <h3>TTRPG Giveaway</h3>
                        <p>With the economy we live in, not everyone can afford the games we list here, even with our excellent deals. This is why CrowPing Games is implementing a monthly TTRPG Giveaway, where we provide a free dice set, card set, or TTRPG book to a loyal customer on our CrowVIP list! Sign up today for a 10% discount on all store items and event bookings as well as a chance to win this month’s TTRPG Giveaway!</p>
                    </div>
                    <img src={diceGames} height="500px" width="500px" alt="200x100"></img>
                </section>
        </main>
        </body>
        </>
    )
};

export default Events;