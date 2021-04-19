<template>
  <div>
    <div class="flex flex-col items-center">
      <div>
        <h2 class="blogTitle">Getting Started with Socket.io</h2>
      </div>
      <div class="blogSubtitle">Feb. 20, 2018</div>
    </div>

    <div class="blogText">
      Phew, it's been a while since my last post! It's been an exciting challenge to balance the tasks of learning,
      building, searching for a job, and writing.
    </div>

    <div class="blogText">
      Anyways, using <a href="https://socket.io/">Socket.io</a> is fun and pretty intuitive once you get the hang of it.
    </div>

    <div class="blogText">
      As I understand it, a web socket is an immediate and continuous connection between a server and the various
      clients that are pinging it. This means that we can update each user's client based on information in the server
      &mdash; without the user needing to refresh their browser.
    </div>

    <div class="blogText">
      I learned Socket.io by building a simple 1-v-1 game, Tic-Tac-Toe. Users can see a list of other users online, can
      send and accept invitations to play games, and claim victory against their opponents.
    </div>

    <div class="blogText">
      To start, <span class="codeBit">npm install express socket.io --save</span>. Then spin up your app with some
      boilerplate code:
    </div>

    <pre><code>var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});</code></pre>

    <div class="blogText">
      Then we can declare a global function, <span class="codeBit">io.on('connection', function(socket){ });</span>,
      inside of which we can place our socket controllers, like so:
    </div>

    <pre><code>  socket.on('logon', function() {
    userIds.push(socket.id);
    io.emit('ids', userIds);
  });</code></pre>

    <div class="blogText">
      These functions may take in parameters (data from the client-side event that triggers the server-side socket
      event-handler), but they needn't. In this case, we're grabbing the ID assigned to this particular client-server
      socket connection and storing it in a global array. Finally, we <span class="codeBit">emit</span> back to each
      client a response: in this case, the array of all online users.
    </div>

    <div class="blogText">
      Note that we call the event 'ids' here so that we can pick it up on the client-side by using the same name.
      Similarly, we call the triggering event 'logon', so that we can specify its trigger on the client-side.
    </div>

    <div class="blogText">
      Our client-side code looks something like this:
    </div>

    <pre><code>    &lt;script src="/socket.io/socket.io.js">&lt;/script>
    &lt;script>
      $(function () {
        var socket = io();
        socket.emit('logon');
      });
    &lt;/script></code></pre>

    <div class="blogText">
      Whenever a user visits the site, pinging the server, a socket-connection is initiated, and the client
      <span class="codeBit">emits</span> to the server, triggering the 'logon' event-handler. As we saw above, this
      initiates a process on the server that <span class="codeBit">emits</span> back out to each client an updated list
      of online users.
    </div>

    <div class="blogText">
      We'll want to update this list when a user disconnects as well ('disconnect' is a keyword in Socket.io: we don't
      have to define this event on the client-side):
    </div>

    <pre><code>  socket.on('disconnect', function(){
    userIds.splice(userIds.indexOf(socket.id), 1);
    io.emit('ids', userIds);
  });</code></pre>

    <div class="blogText">
      The next step would be to handle the 'ids' event we wrote earlier (in the server) on the client-side. We do this
      in exactly the same way that we handled, on the server-side, events triggered by the client. We write
      <span class="codeBit">socket.on('ids', function(allIds) { });</span>, and inside our callback function we
      manipulate the page based on the data received from the server ('allIds'). In this case, we want to append a list
      of all online users (excluding the current user, who we identify with <span class="codeBit">socket.id</span>) to
      the DOM, and an 'Invite' button for each user.
    </div>

    <div class="blogText">
      That's pretty much all there is to it. Events on the client-side &mdash; user clicks to make a move ('X' or 'O'),
      or to submit their move, or accept an invitation to play &mdash; are handled on the server, which in turn emit
      events back out to clients (all clients or a specific client). Data can be passed back and forth with each event,
      as arguments to our event-handling callback functions.
    </div>

    <div class="blogText">
      In our case, we want to pass the game-state back and forth between one client, the server, and the other client
      (their opponent). We update the game-state in the server (in a game object that is saved in a global array of all
      current games) after each user makes a move, and then update the other client.
    </div>

    <div class="blogText">
      Check out my <a href="https://github.com/zackstout/Tic-Tac-Toe-final">GitHub repo</a> for the full code!
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Post4 extends Vue {}
</script>
