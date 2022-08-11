# Validate Age Service

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/2b697faf8d5242e4ab750b3d091568a9)](https://app.codacy.com/gh/phiiileo/validate-age?utm_source=github.com&utm_medium=referral&utm_content=phiiileo/validate-age&utm_campaign=Badge_Grade_Settings) [![license](https://img.shields.io/github/license/dec0dOS/amazing-github-template.svg?style=flat-square)](LICENSE)

Validate age is a software service that calculates age from date of birth (dob) sent to the server. It calculates the age and returns the value in years.

The codebase is structured such that there is separation of concerns. It makes it easy to point to which folder is doing what by mere looking at the folder name. Adding new features or modifying existing features within the codebase becomes easier. It also helps with unit testing as the system is broken down into simpler units.

Redis is used as the data store because it's one of the simplest and fastest key-value database for reading and writing data. it supports low latency and process a high throughput which allows a lot of requests within a small time. Redis is used for handling the rate limit as it's fast.

The rate limit algorithm is placed as middleware so that it can support multiple endpoints with a single implementation and separation of concern.

All system configs (such as the redis connection details, the number of calls, and time frame for the limit) are externalized such that the values can be changed without having to redeploy the service for just that single change.

Fewer external packages were used so as to reduce depencies on the packages and also have full control over the implementation of the system and able to modify system behaviour as required.

The age is calculated using a simple O(1) time complexity algorithm and handles number of edge cases such as calculating the age when the current date is the date of birth, also put into account leap years for getting accurate age.

The service is deployed on heroku as it is a free and fast hosting platform and won't impact on cost of deployment.

## How does this work

The service provides a communication via HTTP requests by calling an endpoint which calculate and returns the age from the date of birth (dob) passed.

The base url is `https://philage-service.herokuapp.com`

Path `GET /howorld`

Query parameter `dob`

The endpoint returns status codes

`200` for a successful request

`422` for passing null or undefined as dob value

`429` for too many requests

`400` for an invalid dob or a bad request

`500` for an unexpected error

`404` for an endpoint that does not exist on the server

### Usage example
#### Javascript
```js
  
      function calculateAge(dob){
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };

        fetch("https://philage-service.herokuapp.com/howold?dob={dob}", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
      }

```
#### NodeJs
```js
      var axios = require('axios');

      var config = {
          method: 'get',
          url: 'https://philage-service.herokuapp.com/howold?dob=2011-08-11',
          headers: { }
          };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });

```

#### Java
```Java

        OkHttpClient client = new OkHttpClient().newBuilder().build();
        MediaType mediaType = MediaType.parse("text/plain");
        RequestBody body = RequestBody.create(mediaType, "");
        Request request = new Request.Builder()
                          .url("https://philage-service.herokuapp.com/howold?dob=2011-08-11")
                          .method("GET", body)
                          .build();
        Response response = client.newCall(request).execute();

```

#### Curl
```Curl
        curl --location --request GET 'https://philage-service.herokuapp.com/howold?dob=2011-08-11'
```

#### C#
``` c#
        var client = new RestClient("https://philage-service.herokuapp.com/howold?dob=2011-08-11");
        client.Timeout = -1;
        var request = new RestRequest(Method.GET);
        IRestResponse response = client.Execute(request);
        Console.WriteLine(response.Content);

```

### License

Copyright (c) 2022 ThankGod George
Licensed under the MIT license.