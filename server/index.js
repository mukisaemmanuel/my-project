import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import getContactsRouter from './getContacts.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  company: String,
  service: String,
  message: String,
  time: { type: Date, default: Date.now }
});

const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.post('/api/contact', async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: 'Contact saved successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save contact' });
  }
});

app.delete('/api/contacts/:id', async (req, res) => {
  try {
    console.log('Delete request for contact ID:', req.params.id);
    const result = await Contact.findByIdAndDelete(req.params.id);
    if (result) {
      console.log('Contact deleted:', result);
      res.status(200).json({ message: 'Contact deleted successfully' });
    } else {
      console.log('No contact found with that ID');
      res.status(404).json({ error: 'Contact not found' });
    }
  } catch (error) {
    console.error('Delete error:', error);
    res.status(500).json({ error: 'Failed to delete contact' });
  }
});

app.use(getContactsRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});


