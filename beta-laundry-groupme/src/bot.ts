import axios from 'axios';

export class Bot {
  static async respond(req: any, res: any, databaseRef: any) {
    const request = JSON.parse(req.chunks[0]);

    if (request.text.toLowerCase().includes('/laundry')) {
      console.log('Text contains /laundry');

      // get the values from the database
      databaseRef.once('value')
          .then(snapshot => {
            return snapshot.toJSON();
          })
          .then(data => {
            this.sendGroupMeMessage(data);
          })
          .catch(e => {
            console.log(`Firebase Error: ${ e }`);
          });
    } else {
      console.log('Text does not contain /laundry ');
    }

    res.writeHead(200);
    res.end();
  }

  static async sendGroupMeMessage(data: any) {
    const responseText = `Left Washer: ${data.leftWasher.open ? 'Open' : 'Taken'}
Right Washer: ${data.rightWasher.open ? 'Open' : 'Taken'}
Left Dryer: ${data.leftDryer.open ? 'Open' : 'Taken'}
Right Dryer: ${data.rightDryer.open ? 'Open' : 'Taken'}`;

    const messageRequest = {
      bot_id: process.env.BOT_ID,
      text: responseText
    };

    try {
      await axios.post('https://api.groupme.com/v3/bots/post', messageRequest);
      console.log(messageRequest);
      return true;
    } catch (e) {
      console.log(`Axios Error: ${ e }`);
      return false;
    }
  }
}
