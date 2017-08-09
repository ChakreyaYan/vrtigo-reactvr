# Vrtigo Analytics for React VR

https://vrtigo.io

### Installation

```shell
npm install --save vrtigo-reactvr
```
### Setup 

```javascript
const vrtigo = import vrtigo from 'vrtigo-reactvr';
vrtigo.setAppId('<Your App Id>');
vrtigo.setUserId('<Your User Id>');
```

Please contact <support@vrtigo.io> to obtain an App Id for your React VR
application.

### Introduction

Vrtigo collects and processes metrics in 360 video applications. The
`vrtigo-reactvr` package allows developers to integrate Vrtigo into
their React VR applications that make use of 360 content.

### Pose Data Collection

All pose data collection is controlled by the Vrtigo API functions in
the SDK API table below. The `start`, `unpause`, `seekEnd`, and
`bufferEnd` functions all require an integer representing the relative
play position of the video in milliseconds (`positionMillis`). 

The `start` function, called when a video initially starts playing,
additionally requires a string indicating the video being viewed
(`videoId`).

It is important to instrument any event where the playback time
changes in the video, such as buffering and seeking/scrubbing, so that
the analytics are in sync with the viewer’s behavior.

### Interactive Data Collection

This guide describes how to configure Vrtigo Analytics for an
interactive experience.  It assumes that you’ve already integrated
Vrtigo with your app.

Your app may have multiple interactive ‘scenes’. Think of a scene as a
self-contained experience that offers one or more choices to the
user. For example, a single interactive 360 video experience might be
a scene, even if it is made up of multiple underlying assets. Giving
the user the ability to time-travel between different parts of the
same video is another example of a scene.

Start each scene with
vrtigo.startInteractiveScene(interactiveId). Each time the user is
presented with a choice, call vrtigo.presentChoice(choiceId). If
you’re collecting pose data, you might choose to stop pose collection
at this point. When the user makes their choice, call
vrtigo.userChoice(choice) with a name identifying the choice. If you
stopped collecting pose data when the choice was presented, you can
start it again now. In some cases, you may want to make a choice for a
user without presenting them one. Call vrtigo.forceChoice(choice) for
that behavior.

The arguments interactiveId, choiceId, and choice and be any arbitrary
strings. End your interactive scene with vrtigo.endInteractiveScene().


### Data Submission

You control when to send data to Vrtigo. To send data after video
playback ends, simply call the `submit` function after calling the
`stop` function. *Important: call submit after calling stop and before
calling start again.* The `submit` function returns a Promise object,
so be sure to `catch` any potential errors when calling it.

<table>
<tr>
<td><b>Action</b></td>
<td><b>API call</b></td>
</tr>
<tr>
<td>Start</td>
<td><code>vrtigo.start(videoId, positionMillis);</code></td>
</tr>
<tr>
<td>Stop</td>
<td><code>vrtigo.stop()</code></td>
</tr>
<tr>
<td>Pause</td>
<td><code>vrtigo.pause()</code></td>
</tr>
<tr>
<td>Unpause</td>
<td><code>vrtigo.unpause(positionMillis)</code></td>
</tr>
<tr>
<td>Seek begin</td>
<td><code>vrtigo.seekBegin()</code></td>
</tr>
<tr>
<td>Seek end</td>
<td><code>vrtigo.seekEnd(positionMillis)</code></td>
</tr>
<tr>
<td>Buffering begin</td>
<td><code>vrtigo.bufferBegin()</code></td>
</tr>
<tr>
<td>Buffering end</td>
<td><code>vrtigo.bufferEnd(positionMillis)</code></td>
</tr>
<tr>
<td>Start an Interactive Scene</td>
<td><code>vrtigo.startInteractiveScene(interactiveId)</code></td>
</tr>
<tr>
<td>Present a choice to user</td>
<td><code>vrtigo.presentChoice(choiceId)</code></td>
</tr>
<tr>
<td>Record user's choice</td>
<td><code>vrtigo.userChoice(choice)</code></td>
</tr>
<tr>
<td>Force a choice for a user</td>
<td><code>vrtigo.forceChoice(choice)</code></td>
</tr>
<tr>
<td>End an Interactive Scene</td>
<td><code>vrtigo.endInteractiveScene()</code></td>
</tr>
<tr>
<td>Submit data</td>
<td><code>vrtigo.submit()</code></td>
</tr>
</table>
