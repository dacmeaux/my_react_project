import React, {Component} from 'react';

class CodeExamples extends Component{
    constructor(props){
        super(props);

        this.initialState = {
            example_types: [
                {name: 'ReactJS', value: 'react-example.js'},
                {name: 'PHP', value: 'php-example.php'},
                {name: 'MySql', value: 'mysql-example.sql'},
                {name: 'JavaScript', value: 'javascript-example.js'}
            ],
            current_example: ''
        };

        this.state = this.initialState;
    }

    renderExampleTypes(){
        return(
            <React.Fragment>
                {this.state.example_types.map((example, i) => (
                    <div className="example" key={i} >{example.name +' - '+ example.value}</div>
                ))}
            </React.Fragment>
        )
    }

    render(){
        return(
            <div className="page code-examples-page">
                <div className="code-examples">Examples: {this.renderExampleTypes()}</div>
            </div>
        );
    }
}

export default CodeExamples;