const InvariantError = require('../../exceptions/InvariantError');
const { SongPostPayloadSchema, SongPutPayloadSchema } = require('./schema');

const SongsValidator = {
  validateSongPayload: (payload) => {
    const validationResult = SongPostPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
  validateSongPayload: (payload) => {
    const validationResult = SongPutPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = SongsValidator;