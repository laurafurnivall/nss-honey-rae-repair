import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import "./tickets.css"

export const TicketEdit = () => {

    //Get Data based on route parameter
    const [ticket, updateTicket] = useState({
        description: "",
        emergency: false
    })
    const navigate = useNavigate()
    const { ticketId } = useParams()

    useEffect(
        () => {
            fetch(`http://localhost:8088/serviceTickets/${ticketId}`)
                .then(response => response.json())
                .then((data) => {
                    updateTicket(data)
                })
        },
        [ticketId]
    )

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        return fetch(`http://localhost:8088/serviceTickets/${ticket.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ticket)
        })
            .then(response => response.json())
            .then(() => {
                navigate("/tickets")
            })
    }

    return (
        <form className="ticketForm">
            <h2 className="ticketForm__title">Edit Service Ticket</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea
                        required autoFocus
                        type="text"
                        style={{
                            height: "5rem"
                        }}
                        className="form-control"
                        placeholder="Brief description of problem"
                        value={ticket.description}
                        onChange={
                            (event) => {
                                const copy = { ...ticket }
                                copy.description = event.target.value
                                updateTicket(copy)
                            }
                        }>{ticket.description}</textarea>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Emergency:</label>
                    <input type="checkbox"
                        value={ticket.emergency}
                        onChange={
                            (event) => {
                                const copy = { ...ticket }
                                copy.emergency = event.target.checked
                                updateTicket(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary">
                Save Edit
            </button>
        </form>
    )
}