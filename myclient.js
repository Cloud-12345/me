(async () => {
  const vm = window.vm;
  const stage = vm.runtime.getTargetForStage();

  const btn = document.createElement('button');
  btn.innerText = '💥 Infinite Health';
  btn.style.position = 'absolute';
  btn.style.top = '10px';
  btn.style.left = '10px';
  btn.style.zIndex = 9999;
  btn.onclick = () => {
    const health = stage.lookupVariableByName('health');
    if (health) health.value = 9999;
  };
  document.body.appendChild(btn);
})();
