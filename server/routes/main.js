const express = require("express")
const Post = require("../models/post")
const router = express.Router();

// function postinsert() {
//     Post.insertMany([
//         {
//             title: "how are you",
//             body: "hello"
//         },
//         {
//             title: "how you know me",
//             body: "hello"
//         },
//         {
//             title: "what are you doing",
//             body: "hello"
//         },
//         {
//             title: "whatsapp",
//             body: "hello"
//         }
//         {
//             title: "hello122",
//             body: "hello"
//         }
//         {
//             title: "1212",
//             body: "hello"
//         }
//         {
//             title: "333333",
//             body: "hello"
//         }
//         {
//             title: "33esdad",
//             body: "hello"
//         }
//     ])
// }
// postinsert();
router.get('', async (req, res) => {
    try {
        const locals = {
            title: "node js blog",
            description: "simple blog"
        }
        let perpage = 6;
        let page = req.query.page || 1;

        const data = await Post.aggregate([{ $sort: { createdAt: -1 } }])
            .skip(perpage * page - perpage)
            .limit(perpage)
            .exec();

        const count = await Post.countDocuments() ;
        const nextpage = parseInt(page) + 1;
        const hasnextpage = nextpage <= Math.ceil(count / perpage);

        res.render('index', { locals, data, currenr: page, nextpage: hasnextpage ? nextpage : null })
    }
    catch (error) {
        console.log(error);
    }

    router.get('/about', (req, res) => {
        res.render('about')
    })
});

module.exports = router;