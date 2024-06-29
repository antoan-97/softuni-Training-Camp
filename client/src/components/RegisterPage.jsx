export default function RegisterPage() {
    return (
        <section id="register-page">
            <div class="signupSection">

                <form class="signupForm">
                    <h2>Sign Up</h2>
                    <ul class="noBullet">

                        <li>
                            <label for="email">Email:</label>
                            <input type="text" class="inputFields" id="email" name="email" />
                        </li>
                        <li>
                            <label for="password">Password:</label>
                            <input type="password" class="inputFields" id="password" name="password" />
                        </li>
                        <li>
                            <label for="repeat-password">Repeat-Password:</label>
                            <input type="password" class="inputFields" id="repeat-password" name="repeatPassword" />
                        </li>
                        <li id="center-btn">
                            <button id="join-btn">JOIN</button>
                        </li>
                    </ul>
                </form>
            </div>
        </section>
    );
}