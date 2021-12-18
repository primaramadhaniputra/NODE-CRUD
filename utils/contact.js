
const fs = require('fs')


// membuat folder
const dirPath = './data'
if (!fs.existsSync(dirPath)) {
   fs.mkdirSync(dirPath)
}

// membuat file data json
const dataPath = './data/contacts.json'
if (!fs.existsSync(dataPath)) {
   fs.writeFileSync(dataPath, '[]', 'utf-8')
}

// dapatkan semua data contact
const loadContact = () => {
   const fileBuffer = fs.readFileSync(dataPath, 'utf-8')
   const contacts = JSON.parse(fileBuffer)
   return contacts
}

module.exports = { loadContact }