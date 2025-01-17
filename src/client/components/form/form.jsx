import React from 'react';
import styles from './style.scss';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      queryData: [],
    };
    this.handleClick=this.handleClick.bind(this)
  }
  handleClick(event){

      var userInput = {event.target.value}
      var reactThis = this;
      var reqListener = function(){
       console.log(this.responseText);
       const data = JSON.parse( this.responseText );
       reactThis.setState({queryData:data.products});
      }
      var oReq = new XMLHttpRequest();
      oReq.addEventListener("load", reqListener);
      oReq.open("GET", "http://localhost:3000/products");
      oReq.send();
      }

       queryData.map(item => {

            if (item.name.toLowerCase().includes(word.toLowerCase())) {
                console.log("*************");
                console.log("found:", item.name);
                foundItems.push(item.name);
                this.setState({foundList: foundItems});
            }
        });


  render() {
    return (
      <div>
        <input className={styles.name} />
        <button onClick={this.handleClick}>Search</button>
        <Search searchresult={this.state.queryData}/>
      </div>
    );
  }
}
class Search extends React.Component {
    render() {
    console.log("rendering");
    return (
        <div className="list">
                    <table>
                        <tbody>
                        {this.props.searchresult.map((result,index)=>
                            <tr>
                                <td>{result.name}</td>
                            </tr>)
                        }
                        </tbody>
                    </table>
            </div>
    )};
}
export default Form;