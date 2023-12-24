# HTML UI Elements

## Audio Player

HTML Based audio player, can be used for static audio on a page or streamed audio.

Include the NAP_V1-0-0_files folder where you want to keep them in your projuct and link to them as so

```html
<!DOCTYPE html> 
<html lang="en"> 
    <head>
        <link rel="stylesheet" href="path/to/NAP_V1-0-0_files/CSS/NAP_V1-0-0.css">
        <title>Audio Player Test</title>
    </head>
    <body style="background-color: black;"> 
        <div id="audio_player">audio/src|mime/type</div>
        <script src="path/to/NAP_V1-0-0_files/JS/NAP_V1-0-0.js"></script>
    </body> 
</html>
```

As can be seen in the code, the way to create a player is to use the following code,

```html
<div id="audio-player">audio/src|mime/type</div>
```