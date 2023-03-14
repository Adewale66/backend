const mongoose = require('mongoose');
if (process.argv.length < 3) {
  console.log('give password as argument');
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://adewalekujore6:${password}@cluster0.n2jvz1g.mongodb.net/noteApp?retryWrites=true&w=majority`;
mongoose.set('strictQuery', false);
mongoose.connect(url);

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
});

const Note = mongoose.model('Note', noteSchema);
const docs = [
  {
    content: 'HTML is Easy',
    important: true,
  },
  {
    content: 'CSS is hard',
    important: true,
  },
  {
    content: 'Mongoose makes things easy',
    important: true,
  },
];

// Note.create(docs)
//   .then((result) => {
//     console.log('saved');
//     mongoose.connection.close();
//   })
//   .catch((err) => {
//     console.log(err);
//   });

Note.find({}).then((result) => {
  result.forEach((note) => {
    console.log(note);
  });
  mongoose.connection.close();
});
