let data = [
    {
        slok: "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम  परित्राणाय साधूनां विनाशाय च दुष्कृताम् । धर्मसंस्थापनार्थाय सम्भवामि युगे युगे",
        ranslation: "श्री कृष्ण कहते हैं की जब जब धर्म की हानि और अधर्म की वृद्धि होती है तब तब मैं अपने स्वरूप की रचना करता हूँ साधुओं की रक्षा के लिए, दुष्कर्मियों का विनाश करने के लिए, धर्म की स्थापना के लिए मैं युग युग में मानव के रूप में अवतार लेता हूँ",

    }
    ,

    {
        slok: "धृतराष्ट्र उवाच धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः। मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय।।1.1।।",
        ranslation: "धृतराष्ट्र बोले (टिप्पणी प0 1.2) - हे संजय! (टिप्पणी प0 1.3) धर्मभूमि कुरुक्षेत्र में युद्ध की इच्छा से इकट्ठे हुए मेरेे और पाण्डु के पुत्रों ने भी क्या किया?"
    }
    ,
    {
        slok: "अस्माकं तु विशिष्टा ये तान्निबोध द्विजोत्तम। नायका मम सैन्यस्य संज्ञार्थं तान्ब्रवीमि ते।",
        ranslation: "हे  द्विजोत्तम! हमारे पक्ष में भी जो मुख्य हैं, उनपर भी आप ध्यान दीजिये। आपको याद दिलाने के लिये मेरी सेना के जो नायक हैं, उनको मैं कहता हूँ"

    }


]




let previous = document.getElementById("previous");
 let next = document.getElementById("next");
 let slok = document.getElementById("slok");
let translation = document.getElementById("translation");
let slono=document.getElementById("slokno");
let x=0;



function firstslok(x){
    slok.innerHTML=data[x].slok;
    translation.innerHTML=data[x].ranslation;
    


 }
 firstslok(x)

 function Nextslok(x)
 {
    slok.innerHTML=data[x].slok;
    ""
    translation.innerHTML=data[x].ranslation;
    
 }

 function Slok(x){

     slok.innerHTML=data[x].slok;
     translation.innerHTML=data[x].ranslation;
    
}


 next.addEventListener("click",()=>{
     if( x>=0 && x<data.length-1)
     {
         x=x+1
       
        Slok(x);
        
  
    }
});


previous.addEventListener("click",()=>{
     if(x>=1)
     {
         x=x-1;
        
       Slok(x);
        
    }

 })












