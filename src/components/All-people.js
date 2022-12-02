import React from 'react';



class AllPeople extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            people: null
        }
    }
    GetAllPeople() {
        fetch("https://kanganphonebookapi.azurewebsites.net/contacts")
            .then((result) => result.json())
            //.then((res) => console.log(res));
            //.then((res) => res !== null ? this.setState({ people: res }) : this.setState({ people: null }))
            .then((res)=> this.setState({people: res}))
            
    }
    
    renderPerson(id, first_name, last_name) {
        return <Person id={id} first_name={first_name} last_name={last_name} key={id}/>
    }
    render() {
        return (
            <div className="Allpeople">
                <h2>All Contacts</h2>
                <button onClick={() => this.GetAllPeople()}>Get All</button>
                {
                    this.state.people !== null ? 
                    this.state.people.map((person) => this.renderPerson(person.id, person.first_name, person.last_name)) 
                        : <div></div>
                    
                
                    }


            </div>
        )
    }
}
class Person extends React.Component {
    render() {
        return <li>{this.props.Id} {this.props.FirstName} {this.props.LastName}</li>
    }
}

export { AllPeople, Person }
