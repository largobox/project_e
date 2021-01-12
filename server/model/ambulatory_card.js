import mongoose, { Schema } from 'mongoose'

const AmbulatoryCardSchema = new Schema({
    name: {type: String, required: true},
    surname: {type: String},
    patronymic: {type: String},
    profession: {type: String},
    services: [{type: Schema.Types.ObjectId, ref: 'Service'}]
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

// export default AmbulatoryCardSchema
export default mongoose.model('AmbulatoryCard', AmbulatoryCardSchema)