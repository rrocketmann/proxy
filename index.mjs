import Server from 'bare-server-node';
import nodeStatic from 'node-static';

const bare = new Server('/bare/', '');
const serve = new nodeStatic.Server('public/');

export default function handler(req, res) {
    if (bare.route_request(req, res)) return;
    serve.serve(req, res);
}
