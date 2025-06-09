const Episode = require("../models/Episode");
const Project = require("../models/Project");
const customStatus = require("../utils/customStatus");

async function createEpisode (req,res){
    const payload = req.body
    try{
        const episode = await Episode.create({...payload,projectId : req.user.userId})
        customStatus(res,201,"Episode created successfully",{episode})
    }catch(err){
        customStatus(res,500,err.message)
    }
}

async function getEpisode (req,res) {
    const {id} = req.params
    try{
        const episodes = await Episode.find({projectId: id})
        customStatus(res,200,"Episode List",{episodes})
    }catch(err){
        customStatus(res,500,err.message)
    }
}

async function editEpisode (req,res) {
    const {id} = req.params
    const payload = req.body
    try{
        const editEpisode = await Episode.findByIdAndUpdate(id,payload,{new :true})
        customStatus(res,202,"Episode Update successfully",)
    }catch(err){
        customStatus(res,500,err.message)
    }
}


async function deleteEpisode (req,res) {
    const {id} = req.params
    try{
        await Episode.findByIdAndDelete(id)
        customStatus(res,200,"Episode Deleted Successfully")
    }catch(err){
        customStatus(res,500,err.message)
    }
}


module.exports = {createEpisode, getEpisode, editEpisode, deleteEpisode}