const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/login')
//     .then(() => console.log('Connected!'));

// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/login');
    console.log('Connected!');
    const kittySchema = new mongoose.Schema({
        name: String
    });

    const Kitten = mongoose.model('Kitten', kittySchema);

    kittySchema.methods.speak = function speak() {
        const greeting = this.name
            ? "Meow name is " + this.name
            : "I don't have a name";
        console.log(greeting);
    };

    const silence = new Kitten({ name: 'Silence' });
    // await silence.save();
    // console.log('saved');

    const fluffy = new Kitten({ name: 'fluffy' });
    // await fluffy.save();
    // console.log('saved');

    const kittens = await Kitten.find();
    console.log(kittens);
}

