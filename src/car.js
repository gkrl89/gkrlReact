import React from "react";
import styles from './mystyle.module.css';

class Car extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        brand: " Ford ",
        model: " Mustang ",
        color: " Red ",
        year: 1964
      };
    }
    shouldComponentUpdate() {
        return true;
    }
    changeColor = () => {
      this.setState({color: " Blue "});
    }
    getSnapshotBeforeUpdate(_prevProps,prevState) {
        document.getElementById("div1").innerHTML =
        "Before the update, the car was in " + prevState.color + "color";
    }
    componentDidUpdate() {
        document.getElementById("div2").innerHTML =
        "The updated Car is in " + this.state.color + "color";
      }
      
    render() {
      return (
        <div>
          <h1 className={styles.biggreen}>My {this.state.brand}</h1>
          <div id="div1"></div>
          <div id="div2"></div>
          <p className={this.state.color === "Blue" ? styles.bigblue : styles.bigred}>
            It is a {this.state.color}
            {this.state.model}
            from {this.state.year}.
          </p>
          <button
            type="button"
            onClick={this.changeColor}
            
          >Change color</button>
        </div>
      );
    }
  }
 
  export default Car;