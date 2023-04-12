import { Link } from "react-router-dom"

export const Employee = ({ id, fullName, email }) => {
    return <section className="employee">
        <div className="employee_header">
            <Link to={`/employees/${id}`}>{fullName}</Link>
        </div>
        <div>Email: {email}</div>
    </section>
}