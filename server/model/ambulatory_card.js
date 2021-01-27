import mongoose, { Schema } from 'mongoose'

const AmbulatoryCardSchema = new Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    patronymic: { type: String },
    profession: { type: String },
    services: [{ type: Schema.Types.ObjectId, ref: 'Service' }],
    createdAt: Number,
    updatedAt: Number,
}, {
    timestamps: {
        currentTime: () => Math.floor(Date.now() / 1000)
    }
});

AmbulatoryCardSchema.virtual('id').get(function () {
    return this._id;
});

AmbulatoryCardSchema.virtual('fullName').get(function () {
    return this.surname + ' ' + this.name + ' ' + this.patronymic;
});

AmbulatoryCardSchema.set('toJSON', {
    virtuals: true
});

export default mongoose.model('AmbulatoryCard', AmbulatoryCardSchema)