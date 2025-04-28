const express = require('express');
const {createTODO} = require('../models/todo');
const router = express.Router();

router.post('/',async (req, res) =>{
    const {title, description} = req.body;
    const todo = await createTODO(title, description);
    res.send(req.body);//to give commit
});

router.delete('/:id', async(req, res) => {
    const _id = req.params.id;
    const resp = await deleteTODO(_id);
    res.send(resp);
});


module.exports = router;