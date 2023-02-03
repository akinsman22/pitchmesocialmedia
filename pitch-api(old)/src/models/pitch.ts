import mongoose, { Document, Schema } from "mongoose";

interface IPitch extends Document {
    title: string;
    description: string;
    imgURL: string; 

}
const pitchSchema: Schema = new Schema ({


}, { timestamps:{createdAt:'created_at', updatedAt:'updated_at'}});
// text box 
// do I need a id, description ... or anything else?
// I want Pitch
// Raking really hit ball hard, all over the park 
// sinker hard downward movement
// Meatball easy pitch to hit down the middle 
// Grand Slam
const Pitch = mongoose.model<IPitch>('Pitch', pitchSchema);

export { IPitch, Pitch }
