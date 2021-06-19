import React from 'react';

export default class LoginForm extends React.Component {
    render() {
        return (
            <div className = 'container border  border-dark ' style={{height: '200px'}}>
                <div className = "">
                    <div className="row">
                        <h3 className = "col-12 d-flex justify-content-center">Log In</h3>
                    </div>
                    <form>
                    <div className="row d-flex justify-content-center">
                            <div className = "col-sm-3">
                                <label>
                                    User Name:
                                    <input type="text" name="userName" />
                                </label>
                            </div>
                            <div className = "col-sm-3">
                                <label>
                                    Password:
                                    <input type="password" name="password" />
                                </label>
                            </div>
                    </div>
                    <div className="row">
                        <p></p>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="col-sm-2">
                            <div className="row">
                                <input type="submit" value="Login" />
                            </div>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        );
    }
}