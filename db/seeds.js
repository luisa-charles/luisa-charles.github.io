const mongoose = require('mongoose');
mongoose.plugin(require('mongoose-unique-validator'));
mongoose.Promise = require('bluebird');

const Project = require('../models/project');
const User = require('../models/user');

const { dbURI } = require('../config/environment');

mongoose.connect(dbURI, (err, db) => {
    db.dropDatabase();

    // User.collection.drop();
    // Project.collection.drop();

    Project.create([{
    name: 'Project 1 Film',
    image: 'http://placecorgi.com/250',
    text: 'Congratulations, you played yourself. Fan luv. They don’t want us to win. Fan luv. In life you have to take the trash out, if you have trash in your life, take it out, throw it away, get rid of it, major key. We the best. Lion! Stay focused. You smart, you loyal, you a genius. The key to more success is to have a lot of pillows. The ladies always say Khaled you smell good, I use no cologne. Cocoa butter is the key. You see the hedges, how I got it shaped up? It’s important to shape up your hedges, it’s like getting a haircut, stay fresh.',
    type: 'Film'
},{
    name: 'Project 2 Other',
    image: 'http://placecorgi.com/250',
    text: 'Congratulations, you played yourself. Fan luv. They don’t want us to win. Fan luv. In life you have to take the trash out, if you have trash in your life, take it out, throw it away, get rid of it, major key. We the best. Lion! Stay focused. You smart, you loyal, you a genius. The key to more success is to have a lot of pillows. The ladies always say Khaled you smell good, I use no cologne. Cocoa butter is the key. You see the hedges, how I got it shaped up? It’s important to shape up your hedges, it’s like getting a haircut, stay fresh.',
    type: 'Other'
},{
    name: 'Project 3 Film',
    image: 'http://placecorgi.com/250',
    text: 'Congratulations, you played yourself. Fan luv. They don’t want us to win. Fan luv. In life you have to take the trash out, if you have trash in your life, take it out, throw it away, get rid of it, major key. We the best. Lion! Stay focused. You smart, you loyal, you a genius. The key to more success is to have a lot of pillows. The ladies always say Khaled you smell good, I use no cologne. Cocoa butter is the key. You see the hedges, how I got it shaped up? It’s important to shape up your hedges, it’s like getting a haircut, stay fresh.',
    type: 'Film'
},{
    name: 'Test project',
    image: 'http://placecorgi.com/250',
    text: 'test',
    type: 'Test'
}])
        .then(projects => console.log(`${projects.length} projects created`))
        .catch(err => console.log(err))
        .then(() => User.create([
            {
                username: 'Admin',
                email: 'admin@admin.com',
                password: 'adminpassword',
                passwordConfirmation: 'adminpassword'            
            }])
        )
        .then(users => console.log(`${users.length} users created`))
        .catch(err => console.log(err))
        .finally(() => mongoose.connection.close());
});
