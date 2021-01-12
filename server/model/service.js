import mongoose, { Schema } from 'mongoose'

const ServiceScema = new Schema({
    label: {type: String, required: true},
    price: {type: Number, required: true},
});

ServiceScema.virtual('id').get(function () {
    return this._id;
});

ServiceScema.set('toJSON', {
    virtuals: true
});

// export default ServiceScema
export default mongoose.model('Service', ServiceScema)