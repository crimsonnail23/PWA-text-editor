import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('PUT to the DB');

  //creates connection to the database and the version that's being used.
  const contactDb = await openDB('jate',1);

  //creates a new transaction and specifies the database and data privledges.
  const tx= contactDb.transaction('jate', 'readwrite');

  //open up desired object store.
  const store=tx.objectStore('jate');

  //get confirmation of request.
  const request= store.put({content:content});
  const result= await request;
  console.log('saved to db', result)
}

//console.error('putDb not implemented');

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => console.error('getDb not implemented');

initdb();
