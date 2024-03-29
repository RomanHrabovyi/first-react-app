import EmployersListItem from "../employers-list-item/emloyers-list-item"
import './employers-list.css'

const EmployersList = ({data, onDelete, onToggleProp, onChangeSalary}) => {

    const elements = data.map(item => {

        const {id, ...itemProps} = item;
        
        return (
            <EmployersListItem 
            key={id} {...itemProps}//name={item.name} salary={item.salary}
            onDelete={() => onDelete(id)}
            onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
            onChangeSalary={onChangeSalary}
            {...itemProps}
            /> 
        )
    })

    return(
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployersList;