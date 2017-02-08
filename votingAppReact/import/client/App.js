import React, { Component } from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import Item from './item';

import Items from '../api/items';

class App extends Component {

  addItems(event){
    event.preventDefault();

    const itemOne = this.refs.itemOne.value.trim();
    const itemTwo = this.refs.itemTwo.value.trim();

    if (itemOne !== '' && itemTwo !== '') {
      Items.insert({
        itemOne: {
          text: itemOne,
          value: 0,
        },
        itemTwo: {
          text: itemTwo,
          value: 0,
        }
  });
  this.refs.itemOne.value = '';
  this.refs.itemTwo.value = '';
    }

    //no refresca
    // console.log(this.refs.itemOne.value.trim());
    //esto calpura y me lo muestra cpor consola
    //lo usare para guardar en MongoDB




  }




  render() {
    return(
      <div>
      <header>
        <h1> Lvl Up Voting </h1>
      </header>
      <main>
        <form onSubmit={this.addItems.bind(this)}>
          <input type= 'text' ref='itemOne'/>
          <input type= 'text' ref='itemTwo'/>
          <button type = 'submit'>Add Items</button>
        </form>
        {this.props.items.map((item)=>{
          return <Item item = {item} key={item._id}/>
          //key hace que cada vezque se itere le asignara una info unica

        })}
      </main>
      </div>
    );
  }
}

export default createContainer (() =>{
  return{
    items: Items.find({}).fetch()
  }
},App);
//el app esta para incluir a la funcion APP
