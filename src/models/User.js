import { GetItemCommand, PutItemCommand } from '@aws-sdk/client-dynamodb';
import { marshall, unmarshall } from '@aws-sdk/util-dynamodb';
import { client } from '../config/aws';

const TABLE_NAME = 'Users';

const User = {
  async getById(id) {
    const params = {
      TableName: TABLE_NAME,
      Key: marshall({ id: parseInt(id) })
    };

    const command = new GetItemCommand(params);
    const { Item } = await client.send(command);
    return Item ? unmarshall(Item) : null;
  },

  async createUser(userData) {
    const params = {
      TableName: TABLE_NAME,
      Item: marshall({ id: Date.now(), ...userData })
    };

    const command = new PutItemCommand(params);
    await client.send(command);
    return unmarshall(params.Item);
  }
};

export default User;
