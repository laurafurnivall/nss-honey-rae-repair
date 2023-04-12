import "./tickets.css"

export const TicketSearch = ({ setterFunction }) => {
    return (
        <div>
            <input className="search" onChange={
                (changeEvent) => {
                    setterFunction(changeEvent.target.value)
                }
            }
            type="text" placeholder="Enter search terms here" />
        </div>
    )
}