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
    name: 'Kardia',
    image: 'https://i.imgur.com/7SySdDb.png?1',
    text: '<i>Kardia</i> is a site-specific interactive installation, created in collaboration with Abdullah Habib, for the Science Gallery&apos;s season titled Blood: Life Uncut. It is an exploration of the internalisation and externalisation of the human heart beat, and comes in the form of a haptic chair. Users experience near complete sensory deprivation, with their only recognisable sensation becoming the feeling of their own heartbeat, beating through the chair.',
    type: 'Interactive',
    materials: 'Interactive installation',
    videoSrc: 'https://player.vimeo.com/video/275402588',
},{
    name: 'Taste Sensations',
    image: 'https://i.imgur.com/md6z80M.png',
    text: '<i>Taste sensations</i> is an interactive eating experience in response to the Science Museum&apos;s brief regarding Food. It is an investigation into how different senses can affect perception of food.<br /><br /><i>Taste sensations</i> was exhibited at the Science Museum&apos;s Lates in January. It comes in the form of four miniature sensory experiences: miracle berries that make sour taste sweet, 3D printed fruit shaped candies that trick your ocular senses, a soundscape that makes crisps feel crunchier, and flavoured chocolates that all taste the same.',
    type: 'Interactive',
    materials: 'Interactive eating experience',
    videoSrc: 'https://player.vimeo.com/video/275402716',
},{
    name: 'Call Me Mummy',
    image: 'https://i.imgur.com/hiwgILw.png',
    text: '<i>Call Me Mummy</i> is a short film that was written, produced, and edited within a 48 hour period as part of the 2017 48 Hour Film Project in London. It is the culmination of months of planning and producing, in collaboration with Lucio Martus and a crew of over 36 students and young professionals.<br /><br />The coming of age narrative is an exploration of the responsibility that comes with sensitive information, and is based on true stories known to various crew members. It follows a snippet of the life of Tina, a young woman who is forced to come to terms with the realisation that her mother is a sex worker.',
    type: 'Film',
    materials: 'Film',
    videoSrc: 'https://player.vimeo.com/video/239317339',
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
