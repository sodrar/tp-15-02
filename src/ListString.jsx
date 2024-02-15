export function ListString() {

    const ordis = [
        "Lenovo",
        "asus",
        "apple",
        "atari"
    ]

    /* const ordisElements = []
    ordis.forEach((ordi,i) => {
        ordisElements.push(<p key={i}>{ordi}</p>)
    }) */
    const ordisElements = ordis.map((ordi,i) => {
        return <p key={i}>{ordi}</p>
    })

    return (
        <div>
            <h2>Liste de strings !</h2>
            {ordisElements}
        </div>
    )
}