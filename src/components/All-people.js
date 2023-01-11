import React from 'react';



class AllPeople extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            people: null
        }
    }

    componentDidMount() {
        this.GetAllPeople();
    }

    GetAllPeople() {
        fetch("https://kanganphonebookapi.azurewebsites.net/contacts")
            .then((result) => result.json())
            //.then((res) => console.log(res));
            //.then((res) => res !== null ? this.setState({ people: res }) : this.setState({ people: null }))
            .then((res)=> this.setState({people: res}))
            
    }
    
    renderPerson(id, name, contactNumber) {
        return <Person id={id} name={name} contactNumber={contactNumber} key={id}/>
    }
    render() {
        return (
            <div className="Allpeople">
                <h2>All Contacts</h2>
                <button onClick={() => this.GetAllPeople()}>Get All</button>
                {
                    this.state.people !== null ? 
                    this.state.people.map((person) => this.renderPerson(person.id, person.name, person.contactNumber)) 
                        : <div></div>
                    }


            </div>
        )
    }
}
class Person extends React.Component {
    render() {
        return <li> {this.props.id} {this.props.name} {this.props.contactNumber} </li>
    }
}

export { AllPeople, Person }
