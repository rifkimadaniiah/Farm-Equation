function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5haemwB87K0":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src="farm.mp3";
audio.load();
audio.play();
audio.volume=0.7;
}

