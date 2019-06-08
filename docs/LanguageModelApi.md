# FarsavaJsClient.LanguageModelApi

All URIs are relative to *https://api.farsava.ir/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getLanguageModelById**](LanguageModelApi.md#getLanguageModelById) | **GET** /speech/languagemodels/{languageModelId} | GET /speech/languagemodels/{languageModelId}
[**getLanguageModelList**](LanguageModelApi.md#getLanguageModelList) | **GET** /speech/languagemodels | GET /speech/languagemodels
[**trainLanguageModel**](LanguageModelApi.md#trainLanguageModel) | **POST** /speech/languagemodels | POST /speech/languagemodels



## getLanguageModelById

> LanguageModelResult getLanguageModelById(languageModelId)

GET /speech/languagemodels/{languageModelId}

Retrieving the status of a language model with specified languageModelId. A language model is ready to use when its status is *trained*. *** 

### Example

```javascript
import FarsavaJsClient from 'farsava-js-client';
let defaultClient = FarsavaJsClient.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new FarsavaJsClient.LanguageModelApi();
let languageModelId = "languageModelId_example"; // String | Id of the language model.
apiInstance.getLanguageModelById(languageModelId, (error, data, response) => {
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
 **languageModelId** | **String**| Id of the language model. | 

### Return type

[**LanguageModelResult**](LanguageModelResult.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLanguageModelList

> [LanguageModelResult] getLanguageModelList()

GET /speech/languagemodels

Returns list of user available language models. Each user can access *general* language models plus their own *custom* trained language models. *** 

### Example

```javascript
import FarsavaJsClient from 'farsava-js-client';
let defaultClient = FarsavaJsClient.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new FarsavaJsClient.LanguageModelApi();
apiInstance.getLanguageModelList((error, data, response) => {
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

[**[LanguageModelResult]**](LanguageModelResult.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## trainLanguageModel

> LanguageModelResult trainLanguageModel(languageModelTrainRequestBody)

POST /speech/languagemodels

Train a custom language model using pharases provided by user. Returning a languageModelId for accessing the language model later and using this custom language model to transcribe audios. Using custom language models will boost accuracy for specific keywords/phrases and can be used for a domain-specific speech recognition. *** 

### Example

```javascript
import FarsavaJsClient from 'farsava-js-client';
let defaultClient = FarsavaJsClient.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new FarsavaJsClient.LanguageModelApi();
let languageModelTrainRequestBody = new FarsavaJsClient.LanguageModelTrainRequestBody(); // LanguageModelTrainRequestBody | A json object including a name and a corpora. Corpora is a array of text data to train a custom model. This text data can be keywords/phrases. All values in the array must be a string. Name is an arbitary string you set for the custom language model name.
apiInstance.trainLanguageModel(languageModelTrainRequestBody, (error, data, response) => {
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
 **languageModelTrainRequestBody** | [**LanguageModelTrainRequestBody**](LanguageModelTrainRequestBody.md)| A json object including a name and a corpora. Corpora is a array of text data to train a custom model. This text data can be keywords/phrases. All values in the array must be a string. Name is an arbitary string you set for the custom language model name. | 

### Return type

[**LanguageModelResult**](LanguageModelResult.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

