import mongoose from "mongoose";

const pgSchema = mongoose.Schema({
  id: {
    type: String,
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
  },
  pgRefPlace: {
    type: String,
    required: true,
  },
  pgDistrict: {
    type: String,
  },
  pgVillage: {
    type: String,
  },
  pgState: {
    type: String,
    required: true,
  },
  pgCountry: {
    type: String,
  },
  pgRating: {
    type: Number,
    default: 0,
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
    type: [
      {
        place: String,
        distance: String,
      },
    ],
    default: [{}],
  },
  nearByFoodStalls: {
    type: [String],
    default: [],
  },
  distanceFromMainPlace: {
    type: [
      {
        place: String,
        distance: Number,
      },
    ],
    default: [{}],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

export default mongoose.Pgs || mongoose.model("Pgs", pgSchema);
