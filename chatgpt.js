function exec() {
  // background color of the prompt
  let elements = document.querySelectorAll('.flex.flex-1.text-base.mx-auto.gap-3');

  let even = 1;
  elements.forEach(function(element) {
    element.style.border = "2px solid white";

    if(even % 2) { // user prompt
      element.style.borderBottom = "none";
      element.style.background = "black";
      element.style.borderTopRightRadius = "10px";
      element.style.borderTopLeftRadius = "10px";
      element.style.borderBottom = "2px solid white";
      element.style.boxShadow = "rgba(0, 0, 0, 0.8) 0px 0px 28px 0px";
    }
    else { // chatgpt answer
      element.style.borderTop = "none";
      element.style.marginTop = "-17px";
      element.style.borderBottomRightRadius = "10px";
      element.style.borderBottomLeftRadius = "10px";
    }

    element.style.padding = "10px";
    even += 1;
  });


  // color of the path in the chatgpt icon
  elements = document.querySelectorAll('.text-white');
  elements.forEach(function(element) {
    element.style.color = "black";
  });


  // background of the chatgpt icon
  elements = document.querySelectorAll('.relative.p-1.rounded-sm.h-9.w-9.text-white.flex.items-center.justify-center');
  elements.forEach(function(element) {
    element.style.backgroundColor = "white";
  });

  // gpt model top bar
  elements = document.querySelectorAll('.sticky.top-0.flex');
  elements.forEach(function(element) {
    //element.style.backdropFilter = "blur(3px)";
    element.style.background = "none";
  });

  // gpt model
  elements = document.querySelectorAll('.group.flex.cursor-pointer.items-center.gap-1.rounded-xl');
  elements.forEach(function(element) {
    element.style.background = "black";
    element.style.padding = "3px";
    element.style.textAlign = "center";
    element.style.width = "77px";
    element.style.marginTop = "14px";
  });

  // change background of entire chat section
  elements = document.querySelectorAll('.relative.h-full.w-full.flex-1.overflow-auto.transition-width');
  elements.forEach(function(element) {
    element.style.background = "#202123";
  });
  
  // change background of prompt textfield
  elements = document.querySelectorAll('textarea');
  elements.forEach(function(element) {
    element.style.background = "white";
    element.style.border = "none";
    element.style.color = "black";
    element.style.setProperty('--placeholder-color', 'black');
  });

  // change background of attach button
  elements = document.querySelectorAll('.flex.w-full.gap-2.items-center.justify-center svg');
  elements.forEach(function(element) {
    element.style.background = "black";
    element.style.borderRadius = "5px";
    element.style.padding = "3px";
  });

  // change background of attach button
  elements = document.querySelectorAll('.text-white.dark\\:text-black');
  elements.forEach(function(element) {
    element.style.color = "white";
    element.style.background = "black";
    element.style.borderRadius = "5px";
  });

  // add border to right of sidepanel
  elements = document.querySelectorAll('.flex.h-full.w-full.flex-col.px-3');
  elements.forEach(function(element) {
    //element.style.borderRight = "1px solid #4b4b4c";
  });
  
}

setTimeout(function() {
  exec();

  // repaint when send button is clicked
  const sendButton = document.querySelector('[data-testid="send-button"]');
  sendButton.addEventListener('click', function(event) {
    setTimeout(function() {
      exec();
    }, 1000);
  });

  // repaint when another chat is selected
  const lis = document.querySelectorAll('li[class*="relative"]');
  lis.forEach(function(li) {
    li.addEventListener('click', function(event) {
      setTimeout(function() {
        exec();
      }, 2000);
    });
  });

  // repaint when enter is pressed
  document.addEventListener('keydown', function(event) {
    if(event.key === 'Enter') {
      setTimeout(function() {
        exec();
      }, 1000);
    }
  });

}, 5000);
