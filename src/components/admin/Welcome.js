import React, { Component } from 'react';
import '../../styles/admin/welcome.css';
import { Image } from 'semantic-ui-react';
import logom from '../../img/logom.png';

export default class Welcome extends Component {
    render() {
        const {user} = this.props;

        return (
            <div className="welcomeA">
                <div class="wrapper fadeInDown">
                    <div id="formContent">
                        <div class="fadeIn first">
                        <Image src= {logom} size='small' id="icon" alt="User Icon" />
                        </div>
                        <h1> Sign In </h1>
                        <span>
                            Welcome, {user} 
                        </span>
                        <form>
                        <input type="text" id="login" class="fadeIn second" name="login" placeholder="enter email" />
                        <input type="text" id="password" class="fadeIn third" name="login" placeholder="enter password" />
                        <input type="submit" class="fadeIn fourth" value="Log In" />
                        </form>

                        <div id="formFooter">
                        <a class="underlineHover" href="#">Forgot Password | Need Help?</a>
                        </div>

                    </div>
                    </div>
            </div>
        )
    }
}
