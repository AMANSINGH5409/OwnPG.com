import mongoose from "mongoose";
import PG from '../models/pg.js';

export const test = (req, res) => {
    return res.json({ message: "Chal Raha Hai" });
}

export const createPg = async (req, res) => {
    const pg = req.body;
    try {
        const newPg = new PG({ ...pg, ownerUid: req.userId, createdAt: new Date().toISOString() });

        await newPg.save();

        res.status(201).json(newPg);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatePg = async (req, res) => {
    const { id: _id } = req.params;
    const updates = req.body;

    try {

        if (!mongoose.Types.ObjectId.isValid(_id)) {
            return res.status(404).json({ message: "No PG with that ID !" });
        }

        const updatedPG = await PG.findByIdAndUpdate(_id, { ...updates, _id }, { new: true });

        return res.status(200).json(updatedPG);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

export const deletePg = async (req, res) => {
    const { id: _id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(_id)) {
            return res.status(400).json({ message: "No PG with that ID !" });
        }

        await PG.findByIdAndRemove(_id);

        res.status(200).json({ message: "PG deleted successfully." });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const getAllPgs = async (req, res) => {
    try {
        const pgs = await PG.find();

        const docCount = await PG.countDocuments({});

        return res.status(200).json({ noOfPgs: docCount, data: pgs });
    } catch (error) {
        return res.status(500).json({ message: error.toString() + "At: server / controllers / pgController.js / getAllPgs()" });
    }
}

export const getPg = async (req, res) => { }

export const getPgBySearch = async (req, res) => { }

export const likePg = async (req, res) => { }