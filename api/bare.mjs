import Server from 'bare-server-node';

const bare = new Server('/bare/', '');

export default async function handler(req, res) {
    await bare.route_request(req, res);
}