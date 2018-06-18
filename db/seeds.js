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
    text: '<strong>Kardia</strong> is a site-specific interactive installation, created in collaboration with <strong>Abdullah Habib</strong>, for the Science Gallery&apos;s season titled <strong>Blood: Life Uncut</strong>. It is an exploration of the <strong>internalisation and externalisation of the human heart beat</strong>, and comes in the form of a <strong>haptic chair</strong>. Users experience near complete <strong>sensory deprivation</strong>, with their only recognisable sensation becoming the feeling of their own heartbeat, beating through the chair.',
    type: 'Interactive',
    materials: 'Interactive installation',
    videoSrc: 'https://player.vimeo.com/video/275402588'
},{
    name: 'Taste Sensations',
    image: 'https://i.imgur.com/md6z80M.png',
    text: '<strong>Taste sensations</strong> is an <strong>interactive eating experience</strong> in response to the <strong>Science Museum&apos;s</strong> brief regarding <strong>Food</strong>. It is an investigation into how different <strong>senses</strong> can affect </strong>perception</strong> of food.<br /><br />Taste sensations was exhibited at the <strong>Science Museum&apos;s Lates</strong> in January. It comes in the form of <strong>four miniature sensory experiences</strong>: miracle berries that make sour taste sweet, 3D printed fruit shaped candies that trick your ocular senses, a soundscape that makes crisps feel crunchier, and flavoured chocolates that all taste the same.',
    type: 'Interactive',
    materials: 'Interactive eating experience',
    videoSrc: 'https://player.vimeo.com/video/275402716'
},{
    name: 'Call Me Mummy',
    image: 'https://i.imgur.com/hiwgILw.png',
    text: '<strong>Call Me Mummy</strong> is a <strong>short film</strong> that was written, produced, and edited within a 48 hour period as part of the 2017 <strong>48 Hour Film Project</strong> in London. It is the culmination of months of planning and producing, in collaboration with <strong>Lucio Martus</strong> and a crew of over 36 students and young professionals.<br /><br />The <strong>coming of age</strong> narrative is an exploration of the <strong>responsibility that comes with sensitive information</strong>, and is <strong>based on true stories</strong> known to various crew members. It follows a snippet of the life of Tina, a young woman who is forced to come to terms with the realisation that her mother is a sex worker.',
    type: 'Film',
    materials: 'Film',
    videoSrc: 'https://player.vimeo.com/video/239317339'
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
