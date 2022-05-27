import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Password extends Component {
    state = {
        passwords: getMovies()
    }

    handleDelete = password => {
        const passwords = this.state.passwords.filter(p => p._id !== password._id);
        this.setState({ passwords: passwords});
    }

    render() {
        const { length: count } = this.state.passwords;

        if (count === 0)
            return <p>There are no passwords in the database.</p>;

        return (
            <React.Fragment>
                <p>Showing {count} passwords in the database.</p>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Password</th>
                            <th>Strength</th>
                            <th>Rate</th>
                            <th />
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.passwords.map(password => (
                            <tr key={password._id}>
                                <td>{password.title}</td>
                                <td>{password.genre.name}</td>
                                <td>{password.numberInStock}</td>
                                <td>{password.dailyRentalRate}</td>
                                <td>
                                    <Like liked={password.liked} onClick={() => this.handleLike(password)}/>
                                </td>
                                <td><button onClick={() => this.handleDelete(password)} className="btn btn-danger btn-sm">Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
}

export default Password;