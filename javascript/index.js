let apiProjApi = new TempApi.ProjApi();import TempApi from '../src/index';document.getElementById('iomz').onclick = (event) => {
    event.preventDefault();
    { location.href= '/index';}};document.getElementById('is5kl').onclick = (event) => {
    event.preventDefault();
    { location.href= '/create';}};window.onload = () => {apiProjApi.getAllproj((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements = document.getElementById("idb1j").querySelectorAll( "[dataitem='true']" );
  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        try { 
        const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'image']");
        if(insideSubDataElement !== null){
          insideSubDataElement.src = data[data.length -i -1].image;
        }
        else if(subDataElements[i].getAttribute('annotationname') === 'image'){
          subDataElements[i].src = data[data.length -i -1].image;
        }
       } catch (e) { console.log(e) };try { 
        const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'sdate']");
        if(insideSubDataElement !== null){
          insideSubDataElement.textContent = data[data.length -i -1].sdate;
        }
        else if(subDataElements[i].getAttribute('annotationname') === 'sdate'){
          subDataElements[i].textContent = data[data.length -i -1].sdate;
        }
       } catch (e) { console.log(e) };try { 
        const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'title']");
        if(insideSubDataElement !== null){
          insideSubDataElement.textContent = data[data.length -i -1].title;
        }
        else if(subDataElements[i].getAttribute('annotationname') === 'title'){
          subDataElements[i].textContent = data[data.length -i -1].title;
        }
       } catch (e) { console.log(e) };try { 
        const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'abstract']");
        if(insideSubDataElement !== null){
          insideSubDataElement.textContent = data[data.length -i -1].abstract;
        }
        else if(subDataElements[i].getAttribute('annotationname') === 'abstract'){
          subDataElements[i].textContent = data[data.length -i -1].abstract;
        }
       } catch (e) { console.log(e) };
        subDataElements[i].addEventListener('click',() => {{ location.href= '/view/'+data[data.length -i -1]._id+'';}} )
      }
    });
    
    let numberOfPages = Math.ceil(data.length/subDataElements.length);
    let pagination = document.querySelector('[paginationlist="true"]');
    let chunk = 1;

    for(let i =1; i<pagination.children.length-1;i){
      pagination.removeChild(pagination.children[i]);
    }

    for (let i = 0; i < numberOfPages; i++) {
      let child = document.createElement("li");
      child.classList.add("page-item");
      if (i === numberOfPages - 1) {
        child.classList.add("active");
      }
      let insideChild = document.createElement("a");
      insideChild.classList.add("page-link");
      let textnode = document.createTextNode(numberOfPages - i);
      insideChild.appendChild(textnode);
      insideChild.setAttribute("href", "#!");
      child.appendChild(insideChild);
      child.onclick = function () {
        if(chunk !== numberOfPages-i){
          chunk = numberOfPages-i;
          onClickPaginationButton(chunk, child);
        }
      };
      pagination.insertBefore(child, pagination.children[1]);
    }
    
    if ( pagination.children[0].getAttribute("paginationnewer") === "true" && numberOfPages > 0 ) {
      pagination.children[0].onclick = function () {
        if(chunk !== 1){
          chunk = 1;
          onClickPaginationButton(1, pagination.children[0]);
        }
      };
    }

    if ( pagination.children[numberOfPages + 1].getAttribute( "paginationolder" ) === "true" && numberOfPages > 0 ) {
      pagination.children[numberOfPages + 1].onclick = function () {
        if(chunk !== numberOfPages){
          chunk = numberOfPages;
          onClickPaginationButton( numberOfPages, pagination.children[numberOfPages + 1]);
        } 
      };
    }

    if ( pagination.children[0].getAttribute("paginationprevious") === "true" && numberOfPages > 0 ) {
      pagination.children[0].onclick = function () {
        if(chunk !== returnChunkIndex(chunk,numberOfPages,'-')){
          chunk = returnChunkIndex(chunk,numberOfPages,'-');
          onClickPaginationButton(chunk, pagination.children[0]);
        }
      };
    }

    if ( pagination.children[numberOfPages + 1].getAttribute("paginationnext") === "true" && numberOfPages > 0) {
      pagination.children[numberOfPages + 1].onclick = function () {
        if(chunk !== returnChunkIndex(chunk,numberOfPages,'+')){
          chunk = returnChunkIndex(chunk,numberOfPages,'+');
          onClickPaginationButton(chunk, pagination.children[numberOfPages+1]);
        }
      };
    }

  
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});};