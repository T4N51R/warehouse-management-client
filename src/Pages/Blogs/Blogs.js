import React from 'react';
import './blogs.css'
const Blogs = () => {
    return (
        <div className='container' >
            <div className='blogs my-5'>
                <h1>Difference between JavaScript and NodeJs</h1>
                <h3>
                    JavaScript is a programming language which can run on any browser with browser engine like V8,spidermonkey etc. Where NodeJs is a interpreter for JavaScript. JavaScript use for client side application. Make a webpage dynamic where node is used for runnig or acessing a operating system. JavaScript noramly follows Java Programming language standard where Node was written in c++. So in simple word JavaScript is an programming language where node js is a extention of its libraries.
                </h3>
            </div>
            <div className='blogs my-5'>
                <h1>
                    When should you use nodejs and when should you use mongodb?
                </h1>
                <h3>
                    we know nodeJs is asynchronous. Meaning it let run appliction while it is fetching data from backend. Nodejs doesn't wait for every line to execute it just skip it and execute next line. And at the end it execute that line of code. It is perfect when we use it with nonsql database like MongoDB. Beacuse mongodb is nosql. Wehere data is not well organaized. That is why we should use mongodb and nodeJS.
                </h3>
            </div>
            <div className='blogs my-5'>
                <h1>
                    Differences between sql and nosql databases.
                </h1>
                <h3>
                    In SQL database data is structured where in an nonsql database data is not structured. When we want to use sql database we have to organized data before starting work with that data and we have to store them accordingly. But in nonsql database we can keep data more dynamicly. SQL database are varticaly scalable which means we can increase lode on server by upgrading its hardware. NoSql database are horaizontaly scalable. Means we can handle more traffic by shrading or adding more server. Another diffrence is sql data are table based while nosql data are based on key pair value. MySql, Oracle are example of sql database. Mongodb are example of nosql database.
                </h3>
            </div>
            <div className='blogs my-5'>
                <h1>
                    What is the purpose of jwt and how does it work
                </h1>
                <h3>
                    Jwt or JSON web token is a sequre way to conncet an applictions fronend and backend. When any user log in into a website a autometic gnearated token given to him. It has expire date. With this token a user can acess data from server. And we can prevent unauthoraized acess. When user want to fetch data server matched his token with its own token if they matched server give data to the user. Otherwise it throw an erro. This way we can use JWT.
                </h3>
            </div>
        </div>
    );
};

export default Blogs;