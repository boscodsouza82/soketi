module.exports = {
  apps : [{
    name   : "soketi-s",
    script: "SOKETI_DEBUG=1 SOKETI_METRICS_ENABLED=1 npx soketi start",
    error_file:'./error-s.log'
  },
  {
    name   : "soketi-c",
    script: "SOKETI_ADAPTER_DRIVER=cluster SOKETI_DEBUG=1 SOKETI_METRICS_ENABLED=1 npx soketi start",
    instances: 3,
    error_file:'./error-c.log'
  }]
}
