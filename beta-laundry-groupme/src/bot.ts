export class Bot {
  static async respond(req: any, res: any) {
    const request = JSON.parse(req.chunks[0]);

    console.log(request);
    console.log(res);

    res.writeHead(200);
    res.end();
  }
}
