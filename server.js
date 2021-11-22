const path = require("path");
const fastify = require("fastify")({
  // Set this to true for detailed logging:
  logger: false
});

fastify.get("/", function(request, reply) {
  reply.view("hello");
});

// Run the server and report out to the logs
fastify.listen(process.env.PORT, function(err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`server listening on ${address}`);
});
