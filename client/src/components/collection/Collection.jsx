export default function Collection() {
    return (
        <div className="flip flip-vertical">
            <div className="front">
                <img src="" alt="name" />
            </div>
            <div className="back">
                <h1></h1>
                <h2>Fighters: </h2>
                <p>Description:  </p>
                <a href="/creatures/{{_id}}/details" className="details">Details</a>
            </div>
        </div>
    );
}