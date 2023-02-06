const chalk = require('chalk')
const yargs = require('yargs');
const { removeNote } = require('./notes');
const notes = require('./notes')




//Cudtomize yargs version
yargs.version('1.1.0')

//Create add command
yargs.command({
        command: 'add',
        describe: 'Add a new note',
        builder: {
            title: {
                describe: 'Note title',
                demandOption: true,
                type: 'string'
            },
            body: {
                describe: 'Note body',
                demandOption: true,
                type: 'string'
            }
        },
        handler(argv) {
            notes.addNote(argv.title, argv.body)
        }
    })
    //Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})
yargs.command({
    command: 'list',
    describe: 'A list of your notes',
    handler() {
        notes.listNotes()
    }
})
yargs.command({
    command: 'read',
    describe: 'reading the notes',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)

    }
})

yargs.parse()

/* 


yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
        body: {
          describe: 'Note content',
            demandOption: true,
            type: 'string'
        }
      },
      handler: function(argv) {
        notes.addNotes(argv.title, argv.body)
      }
    })
    yargs.command({
      command: 'remove',
      describe: 'Remove a note',
      handler: function() {
        console.log('Removing a note!')
      }
})
yargs.command({
    command: 'list',
    describe: 'Listing the notes',
    handler: function() {
      console.log('Listing the notes')
    }
  })
  yargs.command({
    command: 'read',
    describe: 'reading the notes',
    handler: function() {
      console.log('Reading a note')
        }
    })
    // console.log(yargs.argv)
    yargs.parse()
    */