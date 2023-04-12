import { useEffect, useState } from "react";
import "./customer.css"
import { Customer } from "./Customer";

export const CustomerList = () => {
    const [customers, setcustomers] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/users?isStaff=false`)
                .then(response => response.json())
                .then((customerArray) => {
                    setcustomers(customerArray)
                })
        },
        []
    )

    return <article className="customers">
        {
            customers.map(customer => <Customer key={`customer--${customer.id}`}
                id={customer.id} 
                fullName={customer.fullName} 
                email={customer.email} />)
        }
    </article>

}