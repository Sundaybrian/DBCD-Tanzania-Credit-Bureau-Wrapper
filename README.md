<p align="center">
<h1> Dun & Bradstreet Tanzania Credit Bureau (TZ) API Wrapper for Nodejs (still in beta) </h1>
</p>

The Unofficial [Dun & Bradstreet Tanzania Credit Bureau](https://dnbsame.com/) API wrapper for Nodejs.

- [WSDL](https://cweb.dnbtanzania.com/TanWebsite/Services/LiveRequestService.svc?wsdl) (requires authentication)

## Installation

Install via npm 

```bash
npm i @debugger_supreme/dunbapi
```

or install a particular beta version

```
npm install --save @debugger_supreme/dunbapi@0.0.1-beta.1
```

## Configuration

### Authentication

Configure your api username and password in `.env` file as follows

```dotenv
DUNB_USERNAME=your_api_username
DUNB_PASSWORD=your_api_password
```

### URL

The package config file comes with default API url pointing to `production`.

```dotenv
DUNB_WSDL=https://cweb.dnbtanzania.com/TanWebsite/Services/LiveRequestService.svc?wsdl
```

To point to `test` environment set the DUNB_WSDL key in your `.env` file to point to test url given. (See below)

```dotenv
DUNB_WSDL=url
```

Remember

- The WSDL url should end with a `?wsdl` suffix, don't forget to add this if you haven't already.
- You need to first configure correct [Authentication](#authentication) details above for your respective environment.

## Usage

1. [searchMultiHit Consumer Report](#searchMultiHit) done
2. [singleHit Consumer Report](#singleHit) developing


### SearchMultiHit

Method `searchMultiHit(params)` queries client information by  

```ts

export enum PURPOSE_OF_INQUIRY {
    "New Credit Application" = 1,
    "New Guarantor",
    "Review of Existing Customer",
    "Regulatory Audit",

}

export type _PURPOSE_OF_INQUIRY = 1 | 2 | 3 | 4;

interface SEARCH_PARAMETERS {
    NAME: string;
    IDENTIFIER_NUMBER?: string;
    MOBILE?: string;
    SURROGATES: {
        NATIONALITY: NATIONALITIES;
        DATEOFBIRTH: string;
    },
    ACCOUNTNUMBER?: string,
    CUSTOMERID?: string,
    PURPOSE_OF_INQUIRY: _PURPOSE_OF_INQUIRY

}
```

```ts
import DB from "@debugger_supreme/dunbapi";

const client = new DB({
  username: proces.env.CREDIT_INFO_USERNAME,
  password: process.env.CREDIT_INFO_PASSWORD,
});

// 1
client
  .searchConsumerMultiHit({
    NAME: "Paul SIRIL MINJA",
    PURPOSE_OF_INQUIRY: 1,
    SURROGATES: {
        NATIONALITY: "TZ",
        DATEOFBIRTH: "15-Jun-1972"
    }
  })
  .then(function (results) {
    console.log({ results  });
  });

```

### SingleHit 

```ts
// 2: Pull report for a client using entity key and search request id from step 1

client.getReportConsumer({
    ENTITY_KEY: '1856250',
    SEARCH_REQUEST_ID: '3024716'
}).then(response => {
    console.log({
      response
    })
})

```


## TODO

0. [ ] expose types
1. [x] SearchMultiHit Report
2. [x] SingleHit Report
3. [ ] Error Handling
4. [ ] Commercial Search



