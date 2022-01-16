import EmployersListItem from "../employers-list-item/emloyers-list-item"
import './employers-list.css'

const EmployersList = ({data}) => {

    const elements = data.map(item => {

        const {id, ...itemProps} = item;
        return (
            <EmployersListItem key={id} {...itemProps}/> //name={item.name} salary={item.salary}
        )
    })

    console.log(elements)

    return(
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployersList;