function Card(props) {
    const data = typeof props.data != "object" ? [props.data] : props.data;
    return (
        <div className="card">
            {
                data.map((datum, i) =>
                    <div key={"cardItem-i"}>
                        {datum}
                    </div>
                )
            }
        </div>
    );
}

export default Card;