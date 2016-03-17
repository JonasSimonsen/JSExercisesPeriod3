/**
 * Created by jonassimonsen on 17/03/2016.
 */

var redis = require('redis');
var client = redis.createClient('10420', 'pub-redis-10420.us-east-1-3.4.ec2.garantiadata.com', {no_ready_check: true}); client.auth('xxxxxxxxxx', function (err) {
    if (err){
        console.log(err);
    }
});
client.set("key1", "This is cool", redis.print);
client.get("key1", function (err, reply) {
    if (err)  throw err;
    console.log(reply.toString());
});