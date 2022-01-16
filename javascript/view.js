let apiProjApi = new TempApi.ProjApi();import TempApi from '../src/index';document.getElementById('i4dk').onclick = (event) => {
    event.preventDefault();
    { location.href= '/index';}};document.getElementById('ikyku').onclick = (event) => {
    event.preventDefault();
    { location.href= '/index';}};document.getElementById('izq62').onclick = (event) => {
    event.preventDefault();
    { location.href= '/create';}};window.onload = () => {let projId = window.location.pathname.replace('/view/','');apiProjApi.getproj( projId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); document.querySelector('[annotationname = title]').textContent = response.body.query.title ;document.querySelector('[annotationname = image]').src = response.body.query.image ;document.querySelector('[annotationname = abstract]').textContent = response.body.query.abstract ;document.querySelector('[annotationname = start]').textContent = response.body.query.start ;}});};document.getElementById('if2k3').onclick = (event) => {
    event.preventDefault();
    let projId = window.location.pathname.replace('/view/','');apiProjApi.deleteproj( projId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{ location.href= '/index';}}});};