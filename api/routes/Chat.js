// api\routes\chat.js
const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

// Send a new message
router.post('/send', async (req, res) => {
  const { sender, receiver, content } = req.body;
  try {
    const newMessage = new Message({ sender, receiver, content });
    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ error: 'Failed to send message' });
  }
});

// Get messages between two users
router.get('/:user1/:user2', async (req, res) => {
  const { user1, user2 } = req.params;
  try {
    const messages = await Message.find({
      $or: [
        { sender: user1, receiver: user2 },
        { sender: user2, receiver: user1 }
      ]
    }).sort('timestamp');
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve messages' });
  }
});

module.exports = router;