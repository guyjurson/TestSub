'use strict'

const Archetype = require('archetype-js')

module.exports = new Archetype({
  createdAt: {
    $type: Date,
    $default: new Date()
  },
  name: {
    $type: 'string',
    $required: true
  },
  mdp: {
    $type: 'string',
    $required: true
  },
  nom: {
    $type: 'string',
    $required: true
  },
  prenom: {
    $type: 'string',
    $required: true
  }
}).compile('BookType')
