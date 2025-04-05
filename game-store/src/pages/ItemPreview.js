import "./ItemPreview.css";
import product from "../images/Product.png";

const ItemPreview = () => {
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
                    <li><a href="./Events">Events</a></li>
                </ul>
            </nav>
            <h1 id="title">CrowPing Games</h1>

            <main class="main">
            <section class="flexbox box1">
                <img src={product} height="500px" width="360px" alt="200x100"></img>
                <div class="text">
                    <h3>Generic Product</h3>
                    <h2>$20.00</h2>
                    <h1>Contains:</h1>
                    <p>One generic product from CrowPing Games, 20 game pieces, 40 game cards,
                        16 minifigures, 1d20, 1d12, 1d10, 1d8, 4d6, 1d4
                    </p>
                    <h1>Description:</h1>
                    <p>This is a product description for a generic product from CrowPing Games. The box dimensions are 10" by 8" by 4". This game is very fun to play
                        for a wide variety of reasons, including but not limited to: card gameplay, adorable minifigures, an epic dice set, interactive gameplay, and more! </p>
                </div>
                <h5>Add To Your Cart</h5>
            </section>
        </main>
        </body>
        </>
    )
};

export default ItemPreview;