import React, { Component } from 'react'

class todo extends Component {
    state = {
        userInput:'',
        items:[]
      };
      onChange(event) {
          this.setState({
              userInput: event.target.value},() => console.log(this.state.userInput)

          );
      }
 addto(event){
     event.preventDefault();
     this.setState({
         userInput: '',
         items: [...this.state.items, this.state.userInput]
     },() => console.log(this.state));
     }
     deleteto(event){
        event.preventDefault();
        const array = this.state.items;
        const index = array.indexOf(event.target.value);
        array.splice(index, 1);
        this.setState({
            items:array
        });
     }
     renderTodo(){
         return this.state.items.map((item) => {
             return (
                 <div key={item}>
                 {item} <button onClick={this.deleteto.bind(this)}>supp</button>

                 </div>
             )
         }
         )}
 
    render() {
        return (
            <div>
            <form>
                <input
                value={this.state.userInput}
                type="text"
                placeholder="what you have to do"
                onChange= {this.onChange.bind(this)}/>
                <button onClick={this.addto.bind(this)}>ajouter</button>
            </form>
            <div>
                {this.renderTodo()}
            </div>

                
            </div>
        )
    }
}

export default todo;
