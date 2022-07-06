// import React, {Component} from "react";
// import "./Addition.css";

// class Addition extends Component {
//
//     state = {
//         num1: 2,
//         num2: 4,
//         response: 6,
//         score: 0,
//         incorrect: false,
//         color: "black"
//     }
//
//
//     winner() {
//         return(
//             <h1 style={{color : "green" , fontSize : 100 ,textAlign : "center"}}>Wineeeeer!</h1>
//         )
//     }
//
//
//     randomNumber() {
//         return Math.floor((Math.random() * 10) + 1);
//     }
//
//
//     collect(c, d) {
//         return c + d;
//     }
//
//     makeNumbers = (e) => {
//         if (e.key === "Enter") {
//             let userVal = Number(e.target.value);
//             if (userVal === this.state.response) {
//                 let num1 = this.randomNumber();
//                 let num2 = this.randomNumber();
//                 this.setState({
//                     num1: num1,
//                     num2: num2,
//                     response: (num1 + num2),
//                     score: (this.state.score + 1),
//                     color: "black"
//
//                 });
//             } else {
//                 this.setState({
//                     score: (this.state.score - 1),
//                     color: "red"
//                 });
//             }
//
//
//             this.myFormRef.value = "";
//         }
//
//     }
//
//     renderNumbers() {
//         if (this.state.score === 10) {
//             return this.winner();
//         } else {
//             return (
//                 <div className="in-one-row">
//                     <div className="h1">
//                         <h1 style={{color: this.state.color , marginRight : 30}}>{this.state.num1}</h1>
//                         <h1 style={{color: this.state.color , marginRight : 30}}>+</h1>
//                         <h1 style={{color: this.state.color}}>{this.state.num2}</h1>
//                     </div>
//                     <input className="input" onKeyPress={this.makeNumbers} ref={(el) => this.myFormRef = el}/>
//                     <h3 style={{fontSize :25}}>Score:{this.state.score}</h3>
//                 </div>
//
//             );
//
//         }
//     }
//
//     render() {
//         return this.renderNumbers()
//     }
// }
//
// export default Addition;


// class Addition extends Component {
//     state = {
//         num1: 2,
//         num2: 4,
//         score: 0,
//         incorrect: false,
//         response: ""
//     }
//
//     updateResponse(event) {
//         this.setState({
//             response: event.target.value
//         })
//     }
//
//     inputKeyPress(event) {
//
//         if (event.key === "Enter") {
//             const answer = parseInt(this.state.response);
//             if (answer === this.state.num1 + this.state.num2) {
//                 this.setState({
//                     score: this.state.score + 1,
//                     num1: Math.ceil(Math.random() * 10),
//                     num2: Math.ceil(Math.random() * 10),
//                     response: "",
//                     incorrect: false
//                 });
//             } else {
//                 this.setState({
//                     score: this.state.score - 1,
//                     response: "",
//                     incorrect: true
//                 });
//             }
//         }
//     }
//
//     renderWinner(){
//         return <div id="winner">Winneeeerrr!</div>
//     }
//
//     render() {
//         if (this.state.score === 10){
//             return this.renderWinner()
//         }else{
//             return (
//                 <div id="app">
//                     <div id="problem" className={this.state.incorrect ? "incorrect": ""}>
//                         {this.state.num1} + {this.state.num2}
//                     </div>
//                     <input type="text" value={this.state.response} onChange={(event) => this.updateResponse(event)}
//                            onKeyPress={(event) => this.inputKeyPress(event)}/>
//                     <div>Score: {this.state.score}</div>
//                 </div>
//             )
//         }
//
//     }
// }
//
//
// export default Addition;


//write this code with functional components

import React, {useState} from "react";
import "./Addition.css";

const Addition = () => {

    const [state,setState] = useState({
        num1: 2,
        num2: 4,
        score: 0,
        incorrect: false,
        response: ""
    })


    const updateResponse = (event) => {
        setState({...state,
            response: event.target.value
        })
    }

    const inputKeyPress = (event) => {

        if (event.key === "Enter") {
            const answer = parseInt(state.response);
            if (answer === state.num1 + state.num2) {
                setState({...state,
                    score: state.score + 1,
                    num1: Math.ceil(Math.random() * 10),
                    num2: Math.ceil(Math.random() * 10),
                    response: "",
                    incorrect: false
                });
            } else {
                setState({...state,
                    score: state.score - 1,
                    response: "",
                    incorrect: true
                });
            }
        }
    }

    const renderWinner = () => {
        return <div id="winner">Winneeeerrr!</div>
    }


    if (state.score === 10) {
        return renderWinner()
    } else {
        return (
            <div id="app">
                <div id="problem" className={state.incorrect ? "incorrect" : ""}>
                    {state.num1} + {state.num2}
                </div>
                <input type="text" value={state.response} onChange={updateResponse}
                       onKeyPress={inputKeyPress}/>
                <div>Score: {state.score}</div>
            </div>
        )
    }

}


export default Addition;