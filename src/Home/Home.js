import React, { Component } from 'react'
import axios from 'axios';


export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            students: null
        }
    }

    async componentDidMount() {
        const students = (await axios.get('https://test-backend-jk.herokuapp.com/')).data;
        this.setState({ students });
    }

    render() {
        const { students } = this.state;

        if (students === null) return <p>Loading...</p>;

        return (
            <div className="container" style={{ marginTop: "1rem" }}>
                <div className="card">
                    <h3 className="card-header">
                        All Students
                    </h3>
                    <ul className="list-group list-group-flush" >
                        {
                            students && students.map((student) =>
                                <li className="list-group-item">{student.firstname}  {student.lastname}</li>
                            )
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
