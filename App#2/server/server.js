const express = require('express')
const app = express()
const path = require('path')
const publicPath = path.join(__dirname, '..', 'public')
const PORT = 3000 || process.env.PORT

app.use(express.static(publicPath))

app.get('*', (req, res) => {
  res.sendFile(publicPath)
})

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
})
