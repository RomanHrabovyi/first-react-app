import { Component } from 'react/cjs/react.production.min';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-fiter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'John', salary: 200, increase: false, rise: true, id: 1},
                {name: 'Alex', salary: 4200, increase: true, rise: false, id: 2},
                {name: 'Kim', salary: 2200, increase: false, rise: false, id: 3}, 
            ],

            term: '',
            filter: 'all'
        }
        this.maxId = 6
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }

        this.setState(({data}) => {
            const newArr = [...data, newItem] //...data -дані що були раніше, newItem - новий елемент.
            return {
                data: newArr
            }
        })
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item
            })
        }))
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1;
        })

    }

    onUpdateSearch = (term) => {
        this.setState({term: term})
    }

    filterPost = (items, filter) => {
        switch (filter){
            case 'rise':
                return items.filter(item => item.rise);
            case 'moreThen1000':
                return items.filter(item => item.salary > 1000);
            default:
                return items;
        }
           
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    onChangeSalary = (name, salary) => {
        this.setState((state) => ({
            data: state.data.map(item => {
                if(item.name === name) {
                    return {...item, salary}
                }
                return item
            })
        }))
    }

    render () {
        const {data, term, filter} = this.state;
        const employees = this.state.data.length;
        const increaseD = this.state.data.filter(item => item.increase).length;
        const visibleData = this.filterPost(this.searchEmp(data, term), filter);

        return (
            <div className="app">
                <AppInfo employees={employees} increaseD={increaseD}/>
    
                <div className="search-panel">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}/>
                </div>
                <EmployersList 
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                    onToggleRise={this.onToggleRise}
                    onChangeSalary={this.onChangeSalary}/>
                <EmployersAddForm onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;


