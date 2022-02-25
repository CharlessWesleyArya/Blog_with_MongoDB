const express = require('express')
const app = express();
const articleRouter=require('./routes/articles')
app.set('view engine', 'ejs')

app.use('/articles',articleRouter)
app.get('/', (req, res) => {
    const articles=[{
        title:'Test Article',
        createdAt:new Date(),
        description:'This is just created now'
    }]
    res.render('articles/home',{articles:articles});
})

app.listen(5000)