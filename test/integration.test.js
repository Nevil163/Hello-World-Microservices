const axios = require('axios');
const assert = require('assert');

const helloServiceUrl = 'http://localhost:3000/hello';
const worldServiceUrl = 'http://localhost:3001/world'; 

describe('Integration Test for Hello and World Services', () => {
  it('should return "Hello World"', async () => {
    try {
      const helloResponse = await axios.get(helloServiceUrl);
      const worldResponse = await axios.get(worldServiceUrl);

      const helloMessage = helloResponse.data;
      const worldMessage = worldResponse.data;

      const combinedMessage = `${helloMessage} ${worldMessage}`;

      assert.strictEqual(combinedMessage, 'Hello World');
      console.log('Integration Test Passed: "Hello World" returned correctly');
    } catch (error) {
      console.error('Integration Test Failed:', error.message);
      throw error;
    }
  });
});
