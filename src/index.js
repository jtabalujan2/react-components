import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            latitude: null
        }

        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({
                    latitude: position.coords.latitude
                })
            },
            err => console.log(err)
        )

    }



    render(){

        return <div>Location: {this.state.latitude}</div>
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))