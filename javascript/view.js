let apiProjApi = new TempApi.ProjApi();import TempApi from '../src/index';document.getElementById('i4dk').onclick = (event) => {
    event.preventDefault();
    { location.href= '/index';}};document.getElementById('ikyku').onclick = (event) => {
    event.preventDefault();
    { location.href= '/index';}};document.getElementById('izq62').onclick = (event) => {
    event.preventDefault();
    { location.href= '/create';}};window.onload = () => {let projId = window.location.pathname.replace('/view/','');apiProjApi.getproj( projId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); }});};document.getElementById('if2k3').onclick = (event) => {
    event.preventDefault();
    let projId = window.location.pathname.replace('/view/','');apiProjApi.deleteproj( projId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{ location.href= '/index';}}});};