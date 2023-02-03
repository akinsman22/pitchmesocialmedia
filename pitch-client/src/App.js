import React from 'react';
import { BrowserRouter } from 'react-router-dom';

function App() {
 return (
<UserProvider>
<PitchProvider>

<div>
<BrowserRouter>
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">WebSiteName</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="#">Home</a></li>
      <li><a href="#">Page 1</a></li>
      <li><a href="#">Page 2</a></li>
      <li><a href="#">Page 3</a></li>
    </ul>
  </div>
</nav>

<div class="container">
<Routes>
  
</Routes>

</div>



</BrowserRouter>

</div>

</PitchProvider>
</UserProvider>

 );
}

export default App;
