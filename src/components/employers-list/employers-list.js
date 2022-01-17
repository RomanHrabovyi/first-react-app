import EmployersListItem from "../employers-list-item/emloyers-list-item"
import './employers-list.css'

const EmployersList = ({data, onDelete, onToggleIncrease, onToggleRise}) => {

    const elements = data.map(item => {

        const {id, ...itemProps} = item;
        return (
            <EmployersListItem 
            key={id} {...itemProps}//name={item.name} salary={item.salary}
            onDelete={() => onDelete(id)}
            onToggleIncrease={() => onToggleIncrease(id)}
            onToggleRise={() => onToggleRise(id)}/> 
        )
    })

    return(
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployersList;