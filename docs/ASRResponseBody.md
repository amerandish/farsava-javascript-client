# FarsavaJsClient.ASRResponseBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transcriptionId** | **String** | A UUID string specifying a unique pair of audio and recognitionResult. It can be used to retrieve this recognitionResult using transcription endpoint. asrLongRunning recognitionResult will only be available using transcription endpoint and this transcriptionId.  | [optional] 
**duration** | **Number** | File duration in seconds. | [optional] 
**inferenceTime** | **Number** | Total inference time in seconds. | [optional] 
**status** | [**ASRStatus**](ASRStatus.md) |  | [optional] 
**results** | [**[SpeechRecognitionResult]**](SpeechRecognitionResult.md) | Sequential list of transcription results corresponding to sequential portions of audio. May contain one or more recognition hypotheses (up to the maximum specified in maxAlternatives). These alternatives are ordered in terms of accuracy, with the top (first) alternative being the most probable, as ranked by the recognizer.  | [optional] 


