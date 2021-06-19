<div class="alert alert-note">
  <p>
    <b>✍ Note</b>
  </p>
  <p>
    You must know this algorithm before entering to interview room.
  </p>
</div>

<div class="alert alert-tip">
  <p>
    <b>🕑 Time Complexity = O(V+E)</b>
  </p>
  <p>
    <b> Vertex </b>is the node like (A, B, C). The line between nodes who is connecting 2 nodes are called as <b>Edges</b>.
    When we traverse to each vertex and add in to array we take O(V) time.
  <p>
    When we iterate all the children nodes of the current nodes. For Node A we have 3 children nodes and there are 3 edges. For B we have 2 children nodes and 2 edges. Therefore, the Time complexity is O(E).
  </p>
  Therefore, total time complexity is O(V+E)
  </p>
  </p>
  <p>
    <img src="https://i.imgur.com/sC5Ofsm.png" />
  </p>
</div>

<div class="alert alert-tip">
  <b> ☁ Space Complexity = O (V) </b>

  <p>
    Since we are calling DFS recursively. And for every recursive call it will create one entry in the Implicit Memory Stack in computer. Imagine if you had one branch only then you could have called all the nodes (Vertices) and you will have V frames on the implicit memory stack. Therefore, the space complexity is <b> O(V) </b>. Where V=vertices.
  </p>
  </p>
  <p>
    <img src="https://i.imgur.com/s9wAlWx.png" />
  </p>
</div>


<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="roopkt" data-slug-hash="NWpJrjg" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Graph-Easy-DFS Answer">
  <span>See the Pen <a href="https://codepen.io/roopkt/pen/NWpJrjg">
  Graph-Easy-DFS Answer</a> by Rupesh Tiwari (<a href="https://codepen.io/roopkt">@roopkt</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>



