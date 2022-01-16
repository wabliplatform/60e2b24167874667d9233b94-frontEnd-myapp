# TempApi.ProjApi

All URIs are relative to *http://83.212.100.226:3001/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createproj**](ProjApi.md#createproj) | **POST** /proj | Creates the data
[**deleteproj**](ProjApi.md#deleteproj) | **DELETE** /proj/{projId} | Delete the element
[**getAllproj**](ProjApi.md#getAllproj) | **GET** /proj/getAll | Get all the data
[**getproj**](ProjApi.md#getproj) | **GET** /proj/{projId} | Get the element
[**updateproj**](ProjApi.md#updateproj) | **PUT** /proj/{projId} | Updates the element



## createproj

> Proj createproj(proj)

Creates the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.ProjApi();
let proj = new TempApi.Proj(); // Proj | data to be created
apiInstance.createproj(proj, (error, data, response) => {
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
 **proj** | [**Proj**](Proj.md)| data to be created | 

### Return type

[**Proj**](Proj.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteproj

> deleteproj(projId)

Delete the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.ProjApi();
let projId = "projId_example"; // String | the Id parameter
apiInstance.deleteproj(projId, (error, data, response) => {
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
 **projId** | **String**| the Id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAllproj

> [Proj] getAllproj()

Get all the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.ProjApi();
apiInstance.getAllproj((error, data, response) => {
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

[**[Proj]**](Proj.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getproj

> Proj getproj(projId)

Get the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.ProjApi();
let projId = "projId_example"; // String | the Id parameter
apiInstance.getproj(projId, (error, data, response) => {
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
 **projId** | **String**| the Id parameter | 

### Return type

[**Proj**](Proj.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateproj

> Proj updateproj(projId, opts)

Updates the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.ProjApi();
let projId = "projId_example"; // String | the Id parameter
let opts = {
  'proj': new TempApi.Proj() // Proj | data to be updated
};
apiInstance.updateproj(projId, opts, (error, data, response) => {
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
 **projId** | **String**| the Id parameter | 
 **proj** | [**Proj**](Proj.md)| data to be updated | [optional] 

### Return type

[**Proj**](Proj.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

