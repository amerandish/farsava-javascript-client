# FarsavaJsClient.SpeechRecognitionResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transcript** | **String** | A UTF8-Encoded string. Transcript text representing the words that the user spoke.  | [optional] 
**confidence** | **Number** | The confidence of ASR engine for generated output. The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. It is the total confidence of recognition in transcript level and each word confidence in word info object. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating confidence was not set.  | [optional] 
**words** | [**[WordInfo]**](WordInfo.md) |  | [optional] 


