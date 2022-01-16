# TempApi.Proj01Api

All URIs are relative to *http://83.212.100.226:3001/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createproj01**](Proj01Api.md#createproj01) | **POST** /proj01 | Creates the data
[**deleteproj01**](Proj01Api.md#deleteproj01) | **DELETE** /proj01/{proj01Id} | Delete the element
[**getAllproj01**](Proj01Api.md#getAllproj01) | **GET** /proj01/getAll | Get all the data
[**getproj01**](Proj01Api.md#getproj01) | **GET** /proj01/{proj01Id} | Get the element
[**updateproj01**](Proj01Api.md#updateproj01) | **PUT** /proj01/{proj01Id} | Updates the element



## createproj01

> Proj01 createproj01(proj01)

Creates the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.Proj01Api();
let proj01 = new TempApi.Proj01(); // Proj01 | data to be created
apiInstance.createproj01(proj01, (error, data, response) => {
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
 **proj01** | [**Proj01**](Proj01.md)| data to be created | 

### Return type

[**Proj01**](Proj01.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteproj01

> deleteproj01(proj01Id)

Delete the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.Proj01Api();
let proj01Id = "proj01Id_example"; // String | the Id parameter
apiInstance.deleteproj01(proj01Id, (error, data, response) => {
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
 **proj01Id** | **String**| the Id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAllproj01

> [Proj01] getAllproj01()

Get all the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.Proj01Api();
apiInstance.getAllproj01((error, data, response) => {
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

[**[Proj01]**](Proj01.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getproj01

> Proj01 getproj01(proj01Id)

Get the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.Proj01Api();
let proj01Id = "proj01Id_example"; // String | the Id parameter
apiInstance.getproj01(proj01Id, (error, data, response) => {
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
 **proj01Id** | **String**| the Id parameter | 

### Return type

[**Proj01**](Proj01.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateproj01

> Proj01 updateproj01(proj01Id, opts)

Updates the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.Proj01Api();
let proj01Id = "proj01Id_example"; // String | the Id parameter
let opts = {
  'proj01': new TempApi.Proj01() // Proj01 | data to be updated
};
apiInstance.updateproj01(proj01Id, opts, (error, data, response) => {
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
 **proj01Id** | **String**| the Id parameter | 
 **proj01** | [**Proj01**](Proj01.md)| data to be updated | [optional] 

### Return type

[**Proj01**](Proj01.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

