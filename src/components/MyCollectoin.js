import React, { Component } from "react";
import "../App.css";

class MyCollectoin extends Component {


  render() {

      const {title,method,buttonName,list}=this.props
     const movies=list.map((e, key) => {
          return (
              <div className="node" key={key}>
                  <img style={{width:'150px'}} src={e.img} alt={e.title} />
                  <p>{e.title}</p>
                  <button onClick={() => method(e)}>
                      {buttonName}
                  </button>
              </div>
          );
      })
    return (
      <div  style={{background:'black',marginBottom:'10px'}}>
        <div className="title">
          {title}
        </div>
        <div className="myCollection">
            {movies}
        </div>
      </div>
    );
  }
}

export default MyCollectoin;
