export default function ClickEvent() {
    const Hello = () => {
        alert("Hello World!");
    }

    const lifeIs = (good: String) => {
        alert(`Life is ${good}`);
    }
    
    return(
        <div id="wd-click-event">
            <hr />
            <h2>Click Event</h2>
            <div className="d-flex gap-2"> 
                <button onClick={Hello} id="wd-hello-world-click" className="p-1 px-2 border-1 rounded-1 btn btn-secondary">
                    Hello World!
                </button>
                <button id="wd-life-is-good-click" onClick={() => lifeIs("Good!")} className="p-1 px-2 border-1 rounded-1 btn btn-primary">Life is Good!</button>
                <button id="wd-life-is-great-click" onClick={
                    () => {
                        Hello();
                        lifeIs("Great!");
                    }
                } className="p-1 px-2 border-1 rounded-1 btn btn-success">Life is Great!</button>
            </div>
            <hr />
        </div>
    )
}