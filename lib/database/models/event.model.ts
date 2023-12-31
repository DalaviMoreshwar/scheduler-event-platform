import { Document, Schema, model, models } from "mongoose";

export interface IEvent extends Document {
  _id: string;
  title: string;
  description?: string;
  location?: string;
  createdAt: Date;
  imageUrl: string;
  startDateTime: Date;
  endDateTime: Date;
  price?: string;
  isFree: boolean;
  url?: string;
  category: { _id: string; name: string }; // Assuming 'Category' is the name of the related model
  organizer: {
    _id: string;
    firstName: string;
    lastName: string;
  }; // Assuming 'User' is the name of the related model
}

const EventSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: false },
  location: { type: String, required: false },
  createdAt: { type: Date, default: Date.now() },
  imageUrl: { type: String, required: true },
  startDateTime: { type: Date, default: Date.now() },
  endDateTime: { type: Date, default: Date.now() },
  price: { type: String },
  isFree: { type: Boolean, required: false },
  url: { type: String, required: false },
  category: { type: Schema.Types.ObjectId, ref: "Category" },
  organizer: { type: Schema.Types.ObjectId, ref: "User" },
});

const Event = models.Event || model("Event", EventSchema);

export default Event;
