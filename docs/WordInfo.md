# FarsavaJsClient.WordInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**startTime** | **Number** | Time offset relative to the beginning of the audio, and corresponding to the start of the spoken word. This is an experimental feature and the accuracy of the time offset can vary. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating confidence was not set.  | [optional] 
**endTime** | **Number** | Time offset relative to the beginning of the audio, and corresponding to the end of the spoken word. This is an experimental feature and the accuracy of the time offset can vary. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating confidence was not set.  | [optional] 
**word** | **String** | The word corresponding to this set of information.  | [optional] 
**confidence** | **Number** | The confidence of ASR engine for generated output. The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. It is the total confidence of recognition in transcript level and each word confidence in word info object. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating confidence was not set.  | [optional] 


