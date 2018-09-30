import React, { Component } from "react";
import Heading from "../../components/Heading"
import List from "../../components/List"
import "./ToDos.css";
import API from "../../utils/API";


class ToDos extends Component {
    state = {
        _id: "",
        month12: [],
        month9: [],
        month6: [],
        month4: [],
        month2: [],
        completed: [],
        message: "All tasks for this month have been completed!"

    };

    handleCompleted(){

    }

    componentDidMount() {
        this.getTasks()
    };


    getTasks = () => {
        API.getUser(req.user._id)
            .then(res => {
                for (let i = 0; i < res.tasks.length; i++) {
                    if (!res.task[i].completed && res.tasks[i].timeCategory === 12) {
                        this.setState({ month12: this.state.month12.push(res.tasks[i].task) })
                    }
                    else if (!res.task[i].completed && res.tasks[i].timeCategory === 9) {
                        this.setState({ month9: this.state.month9.push(res.tasks[i].task) })
                    }
                    else if (!res.task[i].completed && res.tasks[i].timeCategory === 6) {
                        this.setState({ month6: this.state.month6.push(res.tasks[i].task) })
                    }
                    else if (!res.task[i].completed && res.tasks[i].timeCategory === 4) {
                        this.setState({ month4: this.state.month4.push(res.tasks[i].task) })
                    }
                    else if (!res.task[i].completed && res.tasks[i].timeCategory === 2) {
                        this.setState({ month6: this.state.month2.push(res.tasks[i].task) })
                    }
                    else if (res.task[i].completed) {
                        this.setState({ completed: this.state.completed.push(res.tasks[i].task) })
                    }
                }
            }
            )
            .catch(err => console.log(err));
    };


    render() {
        return (
            <div>
                <Heading title="To Do List" subtitle="Marrymint helps you keep track of all the little details in one place. We belive that wedding planning should be fun, not stressful." />
                <div className="container">
                    <h4 className="subtitle center">12 Months Out</h4>
                    <ul
                        className="collection">
                        {this.state.month12.length ? (
                            <List>
                                {this.state.month12.map(month12 => (
                                    <li className="collection-item">
                                        <div>{month12.task}
                                            <a href="#!" id="completed-btn" className="secondary-content" onClick={this.handleCompleted}><i className="material-icons">done</i></a>
                                        </div>
                                    </li>
                                ))}
                            </List>
                        ) : (<h2 className="text-center">{this.state.message}</h2>)}
                    </ul>

                    <h4 className="subtitle center">9 Months Out</h4>
                    <ul className="collection">
                        {this.state.month9.length ? (
                            <List>
                                {this.state.month9.map(month9 => (
                                    <li className="collection-item">
                                        <div>{month9.task}
                                            <a href="#!" id="completed-btn" className="secondary-content" onClick={this.handleCompleted}><i className="material-icons">done</i></a>
                                        </div>
                                    </li>
                                ))}
                            </List>
                        ) : (<h2 className="text-center">{this.state.message}</h2>)}
                    </ul>
                    <h4 className="subtitle center">6 Months Out</h4>
                    <ul className="collection">
                        {this.state.month9.length ? (
                            <List>
                                {this.state.month6.map(month6 => (
                                    <li className="collection-item">
                                        <div>{month6.task}
                                            <a href="#!" id="completed-btn" className="secondary-content" onClick={this.handleCompleted}><i className="material-icons">done</i></a>
                                        </div>
                                    </li>
                                ))}
                            </List>
                        ) : (<h2 className="text-center">{this.state.message}</h2>)}
                    </ul>
                    <h4 className="subtitle center">4 Months Out</h4>
                    <ul className="collection">
                        {this.state.month4.length ? (
                            <List>
                                {this.state.month4.map(month4 => (
                                    <li className="collection-item">
                                        <div>{month4.task}
                                            <a href="#!" id="completed-btn" className="secondary-content" onClick={this.handleCompleted}><i className="material-icons">done</i></a>
                                        </div>
                                    </li>
                                ))}
                            </List>
                        ) : (<h2 className="text-center">{this.state.message}</h2>)}
                    </ul>
                    <h4 className="subtitle center">2 Months Out</h4>
                    <ul className="collection">
                        {this.state.month2.length ? (
                            <List>
                                {this.state.month2.map(month2 => (
                                    <li className="collection-item">
                                        <div>{month2.task}
                                            <a href="#!" id="completed-btn" className="secondary-content" onClick={this.handleCompleted}><i className="material-icons">done</i></a>
                                        </div>
                                    </li>
                                ))}
                            </List>
                        ) : (<h2 className="text-center">{this.state.message}</h2>)}
                    </ul>
                    <h4 className="subtitle center">Completed!</h4>
                    <ul className="collection">
                    {this.state.completed.length ? (
                            <List>
                                {this.state.completed.map(completed => (
                        <li className="collection-item">
                            <div>{completed.task}
                    <a href="#!" className="secondary-content"><i className="material-icons">done</i></a>
                            </div>
                        </li>
                         ))}
                         </List>
                     ) : (<h2 className="text-center">No Completed Tasks</h2>)}
                    </ul>
                </div>
            </div>
        )
    }
}

export default ToDos;