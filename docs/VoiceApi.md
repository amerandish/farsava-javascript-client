# FarsavaJsClient.VoiceApi

All URIs are relative to *https://api.farsava.ir/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getVoicesList**](VoiceApi.md#getVoicesList) | **GET** /voice/speakers | GET /voice/speakers
[**synthesize**](VoiceApi.md#synthesize) | **POST** /voice/tts | POST /voice/tts
[**voiceHealthCheck**](VoiceApi.md#voiceHealthCheck) | **GET** /voice/healthcheck | GET /voice/healthcheck



## getVoicesList

> [VoiceSelectionParams] getVoicesList()

GET /voice/speakers

This endpoint retrieves the list of available speakers for speech synthesization. Each speaker has a unique *voiceId* which can be used to synthesize speech. The result aslo includes each speaker langauge, gender and name. *** 

### Example

```javascript
import FarsavaJsClient from 'farsava-js-client';
let defaultClient = FarsavaJsClient.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new FarsavaJsClient.VoiceApi();
apiInstance.getVoicesList((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[VoiceSelectionParams]**](VoiceSelectionParams.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## synthesize

> TTSResponseBody synthesize(tTSRequestBody)

POST /voice/tts

## Synthesizes speech synchronously  *** Receives text and data configs and synthesize speech in different voices and format using state-of-the-art deep neural networks. This service synthesizes speech synchronously and the results will be available after all text input has been processed.  *** Using *config* object you can can specify audio configs such as *audioEncoding* and *sampleRateHertz*. We will support different languages so you can choose the *languageCode*. using *voiceSelectionParams* you can choose between the supported voices with specifying voiceId. Voices differ in gender, tone and style.  

### Example

```javascript
import FarsavaJsClient from 'farsava-js-client';
let defaultClient = FarsavaJsClient.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new FarsavaJsClient.VoiceApi();
let tTSRequestBody = {"synthesisInput":{"text":"Speak This."},"voiceConfig":{"languageCode":"fa","voiceId":"b2d8dfca-7d78-47f8-b976-c85b15bbc134","name":"speaker-2","gender":"female"},"audioConfig":{"audioEncoding":"MP3","speakingRate":1.2,"pitch":0.0,"volumeGainDb":-2,"sampleRateHertz":16000}}; // TTSRequestBody | Receives a json including input text, voice parameteres and audio config. 
apiInstance.synthesize(tTSRequestBody, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tTSRequestBody** | [**TTSRequestBody**](TTSRequestBody.md)| Receives a json including input text, voice parameteres and audio config.  | 

### Return type

[**TTSResponseBody**](TTSResponseBody.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## voiceHealthCheck

> HealthCheckResponseBody voiceHealthCheck()

GET /voice/healthcheck

## voice health check endpoint. *** This endpoint will return a simple json including **service status** and **API version**. 

### Example

```javascript
import FarsavaJsClient from 'farsava-js-client';
let defaultClient = FarsavaJsClient.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new FarsavaJsClient.VoiceApi();
apiInstance.voiceHealthCheck((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**HealthCheckResponseBody**](HealthCheckResponseBody.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

