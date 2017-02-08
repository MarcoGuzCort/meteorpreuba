import { Mongo } from 'meteor/mongo';
// cada vez que se importe un paquete que se
//  añadio a meteor en este cao mongo va con esa direccion

const Items = new Mongo.Collection('items');

export default Items;
