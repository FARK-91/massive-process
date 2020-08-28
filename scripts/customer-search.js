(async function load(){

  // Customer Request
  // async function getData(url){
  //   const response = await fetch(url)
  //   const data = await response.json()
  //   return data;
  // }

  // Customer Create
  // async function postData(url, rec){
  //   const options = {
  //     method: 'POST',
  //     body: JSON.stringify(rec),
  //     headers: new Headers({
  //       'Content-Type': 'application/json'
  //     })
  //   }
  //   const response = await fetch(url, options)
  //   const data = await response.json()
  //   return data;
  // }

  //Variables:
  const $queueContainer = document.getElementById('queue__data');
  const $updateQueue = document.getElementById('queue__update');
  const $slideQueue = document.getElementById('queue__section--header');
  const $slideProcessing = document.getElementById('processing__section--header');
  const $slideProcessed = document.getElementById('processed__section--header');

  $updateQueue.addEventListener('click', clickUpdate)
  $slideQueue.addEventListener('click', clickSlide)
  $slideProcessing.addEventListener('click', processingSlide)
  $slideProcessed.addEventListener('click', processedSlide)

  const record = [{
    'lote': '202008-001',
    'archivo': 'Carga001.txt',
    'usuario': 'Zambrano',
    'fecha': '26-08-2020',
    'hora': '13:21',
    'tamano': '305Mb',
  },
  {
    'lote': '202008-003',
    'archivo': 'Carga003.txt',
    'usuario': 'Vecino',
    'fecha': '26-08-2020',
    'hora': '16:21',
    'tamano': '1305Mb',
  }]

  const record2 = [{
    'lote': '202008-001',
    'archivo': 'Carga001.txt',
    'usuario': 'Zambrano',
    'fecha': '26-08-2020',
    'hora': '13:21',
    'tamano': '305Mb',
  },
  {
    'lote': '202008-003',
    'archivo': 'Carga003.txt',
    'usuario': 'Vecino',
    'fecha': '26-08-2020',
    'hora': '16:21',
    'tamano': '1305Mb',
  },
  {
    'lote': '202008-002',
    'archivo': 'Carga002.txt',
    'usuario': 'Zambrano',
    'fecha': '27-08-2020',
    'hora': '09:21',
    'tamano': '105Mb',
  },
  {
    'lote': '202008-005',
    'archivo': 'Carga005.txt',
    'usuario': 'Vazquez',
    'fecha': '27-08-2020',
    'hora': '10:21',
    'tamano': '2305Mb',
  },
  {
    'lote': '202008-006',
    'archivo': 'Carga006.txt',
    'usuario': 'Vecino',
    'fecha': '28-08-2020',
    'hora': '15:21',
    'tamano': '4305Mb',
  }]

function renderQueueData(list, $container){
  $container.children[0].remove();
  list.forEach((item) => {
    const HTMLString = queueDataTemplate(item)
    const queueElement = createTemplate(HTMLString)
    $container.append(queueElement);
  })
}

function queueDataTemplate(queueData){
  return(`<div class="queue__data"><div class="queue__section--element"><p>${queueData.lote}</p></div>
  <div class="queue__section--element"><p>${queueData.archivo}</p></div>
  <div class="queue__section--element"><p>${queueData.usuario}</p></div>
  <div class="queue__section--element"><p>${queueData.fecha}</p></div>
  <div class="queue__section--element"><p>${queueData.hora}</p></div>
  <div class="queue__section--element"><p>${queueData.tamano}</p></div>
  <div class="queue__section--element">
      <p><a href="#"><span class="glyphicon glyphicon-trash"></span></a></p>
  </div></div>`)
}

function createTemplate(HTMLString){
  const $html = document.implementation.createHTMLDocument();
  $html.body.innerHTML = HTMLString;
  return $html.body.children[0]
}

renderQueueData(record, $queueContainer)

function clickUpdate(){
  renderQueueData(record2, $queueContainer)
}

function clickSlide(){
  $("#queueItem1").slideToggle("slow");
  $("#queueItem2").slideToggle("slow");
  $("#queueItem3").slideToggle("slow");
  $("#queueItem4").slideToggle("slow");
  $("#queueItem5").slideToggle("slow");
  $("#queueItem6").slideToggle("slow");
  $("#queueItem7").slideToggle("slow");
  $("#queue__data").slideToggle("slow");
}

function processingSlide(){
  $("#processingItem1").slideToggle("slow");
  $("#processingItem2").slideToggle("slow");
  $("#processingItem3").slideToggle("slow");
  $("#processingItem4").slideToggle("slow");
  $("#processingItem5").slideToggle("slow");
  $("#processingItem6").slideToggle("slow");
  $("#processingItem7").slideToggle("slow");
  $("#processing__data").slideToggle("slow");
}

function processedSlide(){
  $("#processedItem1").slideToggle("slow");
  $("#processedItem2").slideToggle("slow");
  $("#processedItem3").slideToggle("slow");
  $("#processedItem4").slideToggle("slow");
  $("#processedItem5").slideToggle("slow");
  $("#processedItem6").slideToggle("slow");
  $("#processedItem7").slideToggle("slow");
  $("#processed__data").slideToggle("slow");
}

})()