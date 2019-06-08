# FarsavaJsClient.SpeechApi

All URIs are relative to *https://api.farsava.ir/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteTranscription**](SpeechApi.md#deleteTranscription) | **DELETE** /speech/transcriptions/{transcriptionId} | DELETE /speech/transcriptions/{transcriptionId}
[**getTranscription**](SpeechApi.md#getTranscription) | **GET** /speech/transcriptions/{transcriptionId} | GET /speech/transcriptions/{transcriptionId}
[**recognize**](SpeechApi.md#recognize) | **POST** /speech/asr | POST /speech/asr
[**recognizeLive**](SpeechApi.md#recognizeLive) | **GET** /speech/asrlive | GET /speech/asrlive
[**recognizeLongRunning**](SpeechApi.md#recognizeLongRunning) | **POST** /speech/asrlongrunning | POST /speech/asrlongrunning
[**speechHealthCheck**](SpeechApi.md#speechHealthCheck) | **GET** /speech/healthcheck | GET /speech/healthcheck



## deleteTranscription

> deleteTranscription(transcriptionId)

DELETE /speech/transcriptions/{transcriptionId}

Deletes a transcription for a previous file using transcriptionId. *** 

### Example

```javascript
import FarsavaJsClient from 'farsava-js-client';
let defaultClient = FarsavaJsClient.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new FarsavaJsClient.SpeechApi();
let transcriptionId = null; // String | Id of the transcribed audio. It is a UUID string provided in the speech recognition result. 
apiInstance.deleteTranscription(transcriptionId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transcriptionId** | [**String**](.md)| Id of the transcribed audio. It is a UUID string provided in the speech recognition result.  | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTranscription

> ASRResponseBody getTranscription(transcriptionId)

GET /speech/transcriptions/{transcriptionId}

Transcription endpoint enable us to retrieve a previous speech recognition result or inform us on a long running speech recognition status. To access a speech recognition result transcriptionId should be provided.    ***    

### Example

```javascript
import FarsavaJsClient from 'farsava-js-client';
let defaultClient = FarsavaJsClient.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new FarsavaJsClient.SpeechApi();
let transcriptionId = null; // String | Id of the transcribed audio. It is a UUID string provided in the speech recognition result. 
apiInstance.getTranscription(transcriptionId, (error, data, response) => {
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
 **transcriptionId** | [**String**](.md)| Id of the transcribed audio. It is a UUID string provided in the speech recognition result.  | 

### Return type

[**ASRResponseBody**](ASRResponseBody.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## recognize

> ASRResponseBody recognize(aSRRequestBodyData)

POST /speech/asr

## Performs synchronous speech recognition  *** This resource receives audio data in different formats and transcribes the audio using state-of-the-art deep neural networks. It performs synchronous speech recognition and the result will be availble after all audio has been sent and processed. This endpoint is designed for transcription of short audio files upto 1 minute. *** Using *config* object you can can specify audio configs such as *audioEncoding* and *sampleRateHertz*. We will support different languages so you can choose the *languageCode*. Using *asrModel* and *languageModel* in config you can use customized models. Refer to *asrLongRunning* and *WebSocket API* for longer audio transcriptions. 

### Example

```javascript
import FarsavaJsClient from 'farsava-js-client';
let defaultClient = FarsavaJsClient.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new FarsavaJsClient.SpeechApi();
let aSRRequestBodyData = {"config":{"audioEncoding":"LINEAR16","sampleRateHertz":16000,"languageCode":"fa","maxAlternatives":1,"profanityFilter":true,"asrModel":"default","languageModel":"8ac4b75e-d3f8-48f2-80f2-d910fbeb02f4"},"audio":{"data":"UklGRiSFAgBXQVZFZm10IBAAAAABAAEAgD4AAAB9..."}}; // ASRRequestBodyData | ## Audio *data* along with the customized *config* is posted to this service for speech recognition. 
apiInstance.recognize(aSRRequestBodyData, (error, data, response) => {
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
 **aSRRequestBodyData** | [**ASRRequestBodyData**](ASRRequestBodyData.md)| ## Audio *data* along with the customized *config* is posted to this service for speech recognition.  | 

### Return type

[**ASRResponseBody**](ASRResponseBody.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## recognizeLive

> ASRResponseBody recognizeLive()

GET /speech/asrlive

## Performs asynchronous live speech recognition using websocket *** This resource establish a websocket with client and receives audio data using websocket. It will start transcribing the audio using state-of-the-art deep neural networks and returns the partial results on the websocket. This endpoint is designed for transcription of stream audio data upto 15 minute. It will send back partial (status&#x3D;partial) result everytime it transcribes an endpoint. After client sends the close signal, it will receive a ASRResponseBody with status&#x3D;done. *** Using *config* object you can can specify audio configs such as *audioEncoding* and *sampleRateHertz*. We will support different languages so you can choose the *languageCode*. Using *asrModel* and *languageModel* in config you can use customized models. Refer to *ASRLongRuning API* for long audio speech recognition. Refer to *ASR API* for fast recognition for short audio files. 

### Example

```javascript
import FarsavaJsClient from 'farsava-js-client';
let defaultClient = FarsavaJsClient.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new FarsavaJsClient.SpeechApi();
apiInstance.recognizeLive((error, data, response) => {
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

[**ASRResponseBody**](ASRResponseBody.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## recognizeLongRunning

> ASRResponseBody recognizeLongRunning(aSRRequestBodyURI)

POST /speech/asrlongrunning

## Performs asynchronous speech recognition  *** This resource receives a uri containing the audio resource, download it and transcribes the audio using state-of-the-art deep neural networks. It performs asynchronous speech recognition and the result will be availble using transcription endpoint. This endpoint is designed for transcription of long audio files upto 240 minute. *** Using *config* object you can can specify audio configs such as *audioEncoding* and *sampleRateHertz*. We will support different languages so you can choose the *languageCode*. Using *asrModel* and *languageModel* in config you can use customized models. Refer to *WebSocket API* for speech recognition with streams. Refer to *ASR API* for fast recognition for short audio files. 

### Example

```javascript
import FarsavaJsClient from 'farsava-js-client';
let defaultClient = FarsavaJsClient.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new FarsavaJsClient.SpeechApi();
let aSRRequestBodyURI = {"config":{"audioEncoding":"LINEAR16","sampleRateHertz":16000,"languageCode":"fa","maxAlternatives":1,"profanityFilter":true,"asrModel":"default","languageModel":"8ac4b75e-d3f8-48f2-80f2-d910fbeb02f4"},"audio":{"uri":"http://files.examplecdn.com/data/example.wav"}}; // ASRRequestBodyURI | post uri and configs to this service for asr. 
apiInstance.recognizeLongRunning(aSRRequestBodyURI, (error, data, response) => {
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
 **aSRRequestBodyURI** | [**ASRRequestBodyURI**](ASRRequestBodyURI.md)| post uri and configs to this service for asr.  | 

### Return type

[**ASRResponseBody**](ASRResponseBody.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## speechHealthCheck

> HealthCheckResponseBody speechHealthCheck()

GET /speech/healthcheck

## speech health check endpoint. *** This endpoint will return a simple json including **service status** and **API version**. 

### Example

```javascript
import FarsavaJsClient from 'farsava-js-client';
let defaultClient = FarsavaJsClient.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new FarsavaJsClient.SpeechApi();
apiInstance.speechHealthCheck((error, data, response) => {
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

