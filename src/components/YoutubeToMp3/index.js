import React from "react"

const YoutubeToMp3 = props => {

    return (
        <>
        <iframe 
        title='Baixar Vídeo do youtube para mp3/mp4'
          src="https://mp3downy.com/MP3-converter?apikey=1234567890&color=17a2b8&bg=ffffff" 
          style={{width: '100%', minHeight: 250, height: 'auto'}} 
        //   style="width:100%;min-height:250px;height:auto;" 
        >
        </iframe>
        </>
    )
}

export default YoutubeToMp3;