function WordCount({ count }) {
    return (
        <>
            <div className="mb-3 word-count" style={{ "width": "13%", "display": "flex", "alignItems": "center" }}>
                <label id="basic-addon1" for="wcount" style={{ "fontSize": "1rem", "marginRight": "0.5rem" }}>Count</label>
                <input
                    placeholder="count"
                    type={"text"}
                    value={count}
                    className="form-control"
                    size="sm"
                    id="wcount"
                />
            </div>
        </>
    )
}

export default WordCount