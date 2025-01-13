var posts=["fengguo/这是一篇新的博文，测试/","fengguo/这是一篇新的博文/","fengguo/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };