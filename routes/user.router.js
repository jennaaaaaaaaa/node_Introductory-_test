import express from 'express'
import User from '../schemas/user.schema.js'

const router = express.Router()

router.get('/', async(req, res) => {
    const users = await User.find().exec()
    const filterUsers = users.map(user => ({
        userId: user._id,
        name: user.name,
        email: user.email,
        pw: user.pw
    }));
    return res.status(200).json(filterUsers)
})

router.get('/:userId', async(req, res) => {
    try{
        const {userId} = req.params
        const findUserId = await User.findById(userId).exec()

        if(!findUserId) {
            return res.status(404).json({messgae: "존재하지 않은 회원입니다"})
        }

        const user = {
            userId: findUserId._id,
            name: findUserId.name,
            email: findUserId.email,
            pw: findUserId.pw
        };
        return res.status(200).json(user)
    }catch(error){
        return res.status(500).json({message: error.message})
    }
    
})

router.post('/', async(req, res) => {
    try{
        const {name, email, pw} = req.body


        const user = new User({name, email, pw})
        await user.save()
        return res.status(201).json(user)

    } catch(error){
        return res.status(500).json({message: error.message})
    }
    
})

export default router