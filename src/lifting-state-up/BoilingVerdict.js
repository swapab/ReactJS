function BoilingVerdict(props) {
    if(props.celsius >= 100) {
        return <p>It's boiling!!!</p>
    }
    return <p>Not boiling...</p>
}
