import { Component } from '@angular/core';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
// import { AddNote } from '../addnote/addnote';

@Component({
  selector: 'page-home',
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  public database: SQLite;
  name=name;
 items = [];
//   public people: Array<Object>;
//   // addnote = AddNote;
//   public username:any;
//   public password:any;

  constructor(private sqlite: SQLite) {
    
}


save(){
this.sqlite.create({
name: 'data.db',
location: 'default'
})
.then((db: SQLiteObject) => {

//data insert section
db.executeSql('CREATE TABLE IF NOT EXISTS usernameList(id INTEGER PRIMARY KEY AUTOINCREMENT,name')
.then(() => alert('Executed SQL'))
.catch(e => console.log(e));

//data insert section
db.executeSql('INSERT INTO usernameList(name) VALUES(?)', [this.name])
.then(() => alert('Executed SQL'))
.catch(e => console.log(e));


//data retrieve section

db.executeSql('select * from usernameList').then((data) => {

alert(JSON.stringify(data));

//alert(data.rows.length);
//alert(data.rows.item(5).name);
this.items = [];
if(data.rows.length > 0) {
for(var i = 0; i < data.rows.length; i++) {
//alert(data.rows.item(i).name);�
this.items.push({name: data.rows.item(i).name});
}
}

}, (err) => {
alert('Unable to execute sql: '+JSON.stringify(err));
});
})
.catch(e => alert(JSON.stringify(e)));
alert(this.name);

}

}
