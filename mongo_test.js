// const MongoClient = require('mongodb').MongoClient;
// const url = 'mongodb://mongodb0.example.com:27017';


// MongoClient.connect(url, {useUnifiedTopology: true}, function(err, client) {
//     if (err) {
//         console.log('Error:', err);
//     } else {
//         console.log('Connected!');
//     }

// });

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

MongoClient.connect(url, {useUnifiedTopology: true}, function(err, client) {
    if (err) {
        console.log('Error:', err);
    } else {
        console.log('Connected!');
        const db = client.db('admin');
        db.removeUser("username", function(err, result) {
            if (err) {
                console.log('Error:', err);
            } else {
                console.log('User removed successfully');
            }
        });
    }
});