import mongoose from "mongoose";

const pgSchema = mongoose.Schema({
    id: {
        type: String
    },
    pgName: {
        type: String,
        required: true,
    },
    pgLocation: {
        type: String,
        required: true,
    },
    pgCity: {
        type: String,
        required: true,
    },
    pgArea: {
        type: String,
        required: true,
    },
    pgRefPlace: {
        type: String,
        required: true,
    },
    pgDistrict: {
        type: String,
        required: true,
    },
    pgVillage: {
        type: String,
        required: true,
    },
    pgState: {
        type: String,
        required: true,
    },
    pgCountry: {
        type: String,
        required: true,
    },
    pgRating: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    noOfRooms: {
        type: Number,
        required: true,
    },
    pgType: {
        type: String,
        required: true,
    },
    ownerUid: {
        type: String,
        required: true,
    },
    facilities: {
        type: [String],
        required: true,
    },
    likes: {
        type: [String],
        default: [],
    },
    pgPhotos: {
        type: [String],
        required: true,
    },
    nearByPlaces: {
        type: [{
            place: String,
            distance: String,
        }],
        required: true,
    },
    nearByFoodStalls: {
        type: [String],
        default: [],
    },
    distanceFromMainPlace: {
        type: [{
            place: String,
            distance: Number,
        }],
        default: [{}],
    }
});

export default mongoose.Pgs || mongoose.model('Pgs', pgSchema);