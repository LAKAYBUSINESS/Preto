const express = require('express');
const twilio = require('twilio');
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');

const app = express();
app.use(cors());

const AccessToken = twilio.jwt.AccessToken;
const VideoGrant = AccessToken.VideoGrant;
const VoiceGrant = AccessToken.VoiceGrant;

const twilioAccountSid = 'YOUR_TWILIO_ACCOUNT_SID';
const twilioApiKeySid = 'YOUR_TWILIO_API_KEY_SID';
const twilioApiKeySecret = 'YOUR_TWILIO_API_KEY_SECRET';

app.get('/token', (req, res) => {
  const identity = uuidv4();

  const videoGrant = new VideoGrant();
  const voiceGrant = new VoiceGrant({
    outgoingApplicationSid: 'YOUR_TWIML_APP_SID',
  });

  const token = new AccessToken(twilioAccountSid, twilioApiKeySid, twilioApiKeySecret, {
    identity: identity,
  });

  token.addGrant(videoGrant);
  token.addGrant(voiceGrant);

  res.send({
    identity: identity,
    token: token.toJwt(),
  });
});

app.listen(3000, () => {
  console.log('Token server running on port 3000');
});

