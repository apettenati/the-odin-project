// class CardEditor extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//         };
//     }

//     render() {
//         return (
//             <div>
//                 <h1>View Flashcards</h1>
//             </div>
//         );
//     }

// }

// class CardViewer extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//         };
//     }

//     newCard = (event) => {

//     }

//     render() {
//         return (
//             <div>
//                 <h1>Card Viewer</h1>
//                 <div>
//                     <button onClick={this.newCard}>New Card</button>
//                 </div>
//                 <div>
//                     <button onClick={}>Switch to Editor</button>
//                 </div>
//             </div>
//         );
//     }

// }

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            view: true,
            flashcards: [
                {
                    front: "front of card 1",
                    back: "back of card 1"
                },
                {
                    front: "front of card 1",
                    back: "back of card 1"
                }
            ]
        };
    }


    render () {
        return (
            <div>
                <h1>Flashcards</h1>
                    if (this.state.view === true) {
                    <div>
                        <CardViewer />
                    </div>
                } else {
                    <div>
                        <CardEditor />
                    </div>
                }
            </div>
        )
    }

}

ReactDOM.render(<App />, document.querySelector("#app"));