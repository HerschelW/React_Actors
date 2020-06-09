import React, { Component } from "react";

class Form extends Component {
   render() {
      return (
         <div className="Form">
            <form>
               <input type="text" placeholder="First Name"></input>
               <input type="text" placeholder="Last Name"></input>
            </form>
         </div>
      );
   }
}

export default Form;
