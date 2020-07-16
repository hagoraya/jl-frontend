import React, { Component } from 'react'
import axios from 'axios';


function searchFor(filter) {
    return function (x) {
        return x.firstname.toLowerCase().includes(filter.toLowerCase()) ||
            x.lastname.toLowerCase().includes(filter.toLowerCase())
    }
}

export class SearchStudents extends Component {
    constructor(props) {
        super(props)

        this.state = {
            students: null,
            filter: ''
        }
    }

    async componentDidMount() {
        const students = (await axios.get('https://test-backend-jk.herokuapp.com/')).data;
        this.setState({ students });
    }

    onSearch(e) {
        console.log("on seach")
        let keyword = e.target.value;
        this.setState({ filter: keyword })
    }




    render() {
        const { students, filter } = this.state;

        if (students === null) return <p>Loading...</p>;



        return (
            <div className="container" style={{ marginTop: "1rem" }}>
                <div className="card">
                    <h3 className="card-header">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                            </div>
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Search Students"
                                aria-label="Sizing example input"
                                aria-describedby="inputGroup-sizing-default"
                                onChange={(e) => this.onSearch(e)} />
                        </div>
                    </h3>

                    <ul className="list-group list-group-flush" >
                        {
                            students.filter(searchFor(filter)).map((student) =>
                                <li className="list-group-item">{student.firstname}  {student.lastname}</li>
                            )
                        }
                    </ul>

                </div>
            </div>
        )
    }
}

export default SearchStudents
