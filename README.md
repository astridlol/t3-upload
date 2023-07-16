# T3 uploadthing bug

Rejects uploads of `.zip` and `.jar` with an S3 policy error.

```
<?xml version="1.0" encoding="UTF-8"?>
<Error><Code>AccessDenied</Code><Message>Invalid according to Policy: Policy Condition failed: ["eq", "$Content-Type", "application/java-archive"]</Message><RequestId>Z6F9T2A5ZC30KFKW</RequestId><HostId>39Dd72gs1BXz3dHBkQ8h87ZnXtzWA9BRK0uV9XlMRQEQHUs/Ffk+NS7FZlaD9tFGVgkoNieaDno=</HostId></Error>
```

## Reproduction

Clone this repo and run it, then upload a .jar file (i used [this one](https://i.upload.systems/9p8bxURu))
