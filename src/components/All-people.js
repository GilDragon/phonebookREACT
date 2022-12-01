import React from 'react';



class AllPeople extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            people: null
        }
    }
    GetAllPeople() {
        fetch("http://localhost:5178/GetAll")
            .then((result) => result.json())
            //.then((res) => console.log(res));
            //.then((res) => res !== null ? this.setState({ people: res }) : this.setState({ people: null }))
            .then((res)=> this.setState({people: res}))
            
    }
    
    renderPerson(name, phonenumber) {
        return <Person name={name} number={phonenumber} key={phonenumber}/>
    }
    render() {
        return (
            <div className="Allpeople">
                <h2>All Contacts</h2>
                <button onClick={() => this.GetAllPeople()}>Get All</button>
                {
                    this.state.people !== null ? 
                    this.state.people.map((person) => this.renderPerson(person.name, person.phonenumber)) 
                        : <div></div>
                    
                
                    }


            </div>
        )
    }
}
class Person extends React.Component {
    render() {
        return <li>{this.props.name} {this.props.number}</li>
    }
}

export { AllPeople, Person }
