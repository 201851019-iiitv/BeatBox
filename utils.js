/**
 * Beat class that keeps track of playing the audio
 * HINT: Make sure to pass in the audioSrc as parameter to create a new audio track
 * HINT: Create a play function to play the audio if called 
 */
class Beat {

    
   constructor(audioSrc)
    {
        this.audio=new Audio(audioSrc);
        
        // console.log(audio);
        // this.play();
       
    }

    play=()=>{
  this.audio.currentTime=0;
  this.audio.play();

    }

     

}



/**
 * Button class that keeps track of the button color based on a press
 */
class Button {
    constructor(color, keyCode){
        this.color=color;
        this.keyCode=keyCode;
        this.setButtonColorInHTML();
        this.trasitionended();
    }


    // Remove bg and shadow

trasitionended=()=>{

    document.getElementById(this.keyCode).addEventListener('transitionend',()=>{
       
     this.deselect();
    })

    
}



    /**
     * Set the button color based on color specified
     */
    setButtonColorInHTML = () => {
        document.getElementById(this.keyCode).style.borderColor=this.color;
    }

    /**
     * Select function to set the background color and boxShadow
     */
    select = () => {
        document.getElementById(this.keyCode).style.backgroundColor=this.color;
        document.getElementById(this.keyCode).style.boxShadow=`0px 0px 17px 0px`;
    }

    /**
     * Deselect function to reset background color and boxShadow
     */
    deselect = () => {
        document.getElementById(this.keyCode).style.backgroundColor="transparent";
        document.getElementById(this.keyCode).style.boxShadow="none";

    }
}