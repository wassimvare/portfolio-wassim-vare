(async()=>{
  try{
    const files=['preview-game-1.txt','preview-game-2.txt','preview-game-3.txt','preview-game-4.txt','preview-game-5.txt'];
    const parts=await Promise.all(files.map(f=>fetch(f,{cache:'no-store'}).then(r=>{if(!r.ok)throw new Error(f+': '+r.status);return r.text()})));
    (0,eval)(parts.join(''));
  }catch(err){
    document.body.innerHTML='<pre style="color:white;background:#05070d;padding:24px;font-family:system-ui">RIFT load error: '+String(err)+'</pre>';
  }
})();
