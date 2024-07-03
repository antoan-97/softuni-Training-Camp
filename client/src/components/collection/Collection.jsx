export default function Collection() {
    return (
        <div className="flip flip-vertical">
            <div className="front">
                <img src="" alt="fighter" />
            </div>
            <div className="back">
                <h1>Fighter Name</h1>
                <h2>Category: </h2>
                <p>Description:  </p>
                <a href="/fighters/{{_id}}/details" className="details">Details</a>
            </div>
        </div>
    );
}