import React from 'react'

class AddContact extends React.Component {
    state = {
        name: '',
        email: ''
    }

    add = (e) => {
        e.preventDefault();
        if (this.state.name === '' || this.state.name === '') {
            alert("All the fields are mandatory!");
            return;
        }
        this.props.addContactHandler(this.state);
        this.state = { name: '', email: '' };
        this.props.history.push("/");
    }

    render() {
        return (
            <div className="ui main">
                <h2 className="row center">Add Contact</h2>
                <form className="ui form" action="" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={this.state.name}
                            onChange={(e) => this.setState({ name: e.target.value })} />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={(e) => this.setState({ email: e.target.value })} />
                    </div>
                    <button className="ui button blue">Add</button>
                    {/* <Link to="/">
                        <button className="ui button blue right">Cancel</button>
                    </Link> */}
                </form>
            </div>
        )
    }
}

export default AddContact;