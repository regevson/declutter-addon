function exec() {
  // background color of the prompt
  let elements = document.querySelectorAll('.flex.flex-1.gap-4.text-base.mx-auto.md\\:gap-6.gizmo\\:gap-3.gizmo\\:md\\:px-5.gizmo\\:lg\\:px-1.gizmo\\:xl\\:px-5.md\\:max-w-2xl.lg\\:max-w-\\[38rem\\].gizmo\\:md\\:max-w-3xl.gizmo\\:lg\\:max-w-\\[40rem\\].gizmo\\:xl\\:max-w-\\[48rem\\].xl\\:max-w-3xl.group');

  let even = 1;
  elements.forEach(function(element) {
    if(even % 2) {
      element.style.background = "black";
      element.style.borderRadius = "10px";
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

  // make top model-type bar blurry
  elements = document.querySelectorAll('.sticky.top-0.flex');
  elements.forEach(function(element) {
    element.style.backdropFilter = "blur(3px)";
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

