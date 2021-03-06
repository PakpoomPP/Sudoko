import {Component} from 'react';

class Cell extends Component {
  render(){
    return(
        <div className={`cell ${this.props.isInitial ? 'initial' : '' }`} 
        onClick={e => {
          if(this.props.isInitial){
            return
          }else{
            this.props.onChange((this.props.number + 1) % 5)
          }
        }}>
          {this.props.number !== 0 && this.props.number}
        </div>
    );
  }
}

export default Cell;