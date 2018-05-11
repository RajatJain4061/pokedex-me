import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const userSchema = new Schema({
  cuid: { type: 'String', required: true },
  username: { type: 'String', required: true, unique: true, index: { unique: true } },
  firstname: { type: 'String', required: 'Please enter your first name.' },
  lastname: { type: 'String', required: true },
  email: { type: 'String', required: true },
  mobile: { type: 'String', required: true },
  password: { type: 'String', required: true },
  addedBy: { type: 'String', required: false },
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('User', userSchema);
