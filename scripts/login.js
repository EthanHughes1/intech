fetch('https://bumblebee.hive.swarm.space/hive/api/v1/messages?organizationId=679399&deviceType=-1&deviceId=F-0x032f3', {
  headers: {
    'accept': 'application/json',
    'Authorization': 'Bearer "eyJraWQiOiJidW1ibGViZWUwIiwidHlwIjoiSldUIiwiYWxnIjoiUlMyNTYifQ.eyJvcmciOjY3OTM5LCJyb2xlcyI6WzJdLCJpc3MiOiJTd2FybSBUZWNobm9sb2dpZXMsIEluYy4iLCJ1c2VyIjo1NDg2LCJqdGkiOi0xNTIxMzExNzEyLCJ1c2VybmFtZSI6IklOVEVDSCJ9.B2PLAYMJTgWAq7l_sVbg9ZurWs-OI7v-7smU47Bq0MvKDjmceyKC77PSaTSbAjtsYS93N1K5FbszJpRy1PZL6e9Kx11RXucFTBY4yF8C6k3NLP9euivdvM1PrDpXHsciSzhwOrJ05FlK2laytjK3fp9IcEbR6WchU3uc5EP1c6M"'
  }
})
  .then(data => console.log(data))
  .catch(error => console.error(error))
  ;