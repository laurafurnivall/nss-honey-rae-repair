import { Link } from "react-router-dom"

export const Customer = ({ id, fullName, email }) => {
    return <section className="customer">
        <div className="customer_header">
            <Link to={`/customers/${id}`}>{fullName}</Link>
        </div>
        <div>Email: {email}</div>
    </section>
}