import { Component } from 'react/cjs/react.production.min';

import './search-panel.css';


class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term: term});
        this.props.onUpdateSearch(term);
    }

    render() {
        return (
            <input 
                type="text" 
                className = "form-control serch-input"
                placeholder = "Знайти працівника"
                value={this.state.term}
                onChange={this.onUpdateSearch}/>
        )
    }
}

export default SearchPanel;