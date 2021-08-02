const path = require('path')
const express = require('express')
const app = express()
app.use(express.json())
app.use(express.static(path.join(__dirname, './')))
const PORT = process.env.PORT || 3000

app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, './', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})