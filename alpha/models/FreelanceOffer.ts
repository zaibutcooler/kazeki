import { Schema, model, models } from "mongoose";

const freelanceOfferSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  title: { type: String },
  detail: { type: String },
  requirements: [{ type: String }],
  responsibilities: [{ type: String }],
  salaryFrom: { type: Number }, // From 0 $
  salaryTo: { type: Number }, // To 0 $
  field: [{ type: String }], // web / software / programming / video-editing / copy-writing
  timeRange: { type: String }, // 1 day / 2 days / 3 days / 1 week / 1 month
  contact: [
    {
      link: { type: String }, // Contact link
      name: { type: String }, // Contact name
    },
  ],
  formClose: { type: String }, // 1 day / 2 days / 3 days / 1 week / 1 month
});

const FreelanceOffer =
  models.FreelanceOffer || model("FreelanceOffer", freelanceOfferSchema);

export default FreelanceOffer;
