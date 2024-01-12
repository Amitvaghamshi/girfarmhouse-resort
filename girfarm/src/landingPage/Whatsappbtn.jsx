import React from 'react';

const Whatsappbtn = () => {


    let urls=["https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/479px-WhatsApp_icon.png","https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-whatsapp-phone-icon-png-image_6315989.png"];

    let [curr,setImg]=React.useState(urls[0]);

    React.useEffect(()=>{
       let i=1;
       let id= setInterval(() => {
            if(i>=urls.length){
                i=0;
            }
            setImg(urls[i]);
            i++;
        }, 1000);


        return ()=>{
            clearInterval(id);
        }
    },[])

    


    const phoneNumber = '+91 9978475498'; // Replace with the actual phone number

    const handleButtonClick = () => {
      const whatsappUrl = `https://wa.me/${phoneNumber}`;
      window.open(whatsappUrl, '_blank');
    };

    return (
        <div className='whatsappicon' style={{
            position:"fixed",
            bottom:"10px",
            right:'20px'
        }}>
               <button onClick={handleButtonClick}>
                    <div style={{width:"60px",height:"60px"}}>
                        <img  src={curr} alt="" />
                    </div>
                </button>
        </div>
    );
}

export default Whatsappbtn;
