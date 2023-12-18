import { formatTime } from 'utils';
import { Link, useParams, useLocation  } from "react-router-dom"
import IconButton from '@mui/material/IconButton'
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import Pot from 'assets/RadPot.svg';
import Mushrooms from 'assets/Mushrooms.svg';
import Star from 'assets/Star.svg';
import Logo from 'assets/Logo.svg'
import SharePage from 'assets/SharePage.svg'
// import domtoimage from 'dom-to-image';
import './Cooking.css';

// const totalTime = 20;
// const templeteImg = `<div><img src={SharePage} /></div>`

const CookingDone = () => {
    const location = useLocation();
    const totalTime = location.state.totalTime;
    const { roomId } = useParams();

      const handleShare = async () => {
        try {
            // Create a canvas and draw your cooking image on it
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            if (!ctx) {
                throw new Error('Canvas context is null');
            }
        
            const ingredientImg = new Image();
            const logoImg = new Image();
        
            ingredientImg.src = Mushrooms;
            logoImg.src = Logo;
      
             // Ensure images are loaded before drawing
           await Promise.all([ingredientImg, logoImg].map(img => new Promise(resolve => img.onload = resolve)));
            // Set canvas size based on image size
            canvas.width = 320; // Adjust to your desired width
            canvas.height = 320; 
            ctx.fillStyle = '#F9F9EE'; // Adjust background color
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            // Draw totalTime at the top-center
            ctx.font = '20px Jua'; // Adjust font size and style
            ctx.fillStyle = '#000'; // Adjust text color
            ctx.textAlign = 'center';
            ctx.fillText('Pot Together', canvas.width / 2, 30);
            ctx.fillText(`Total Time: ${formatTime(totalTime)}`, canvas.width / 2, 70);
        
            // Draw images on the canvas
            ctx.drawImage(ingredientImg, 40, 90);
            ctx.drawImage(logoImg, 25, 60);
        
            // Convert the canvas content to a Blob
            canvas.toBlob(async (blob) => {
                if (!blob) {
                throw new Error('Blob is null');
                }
        
                const shareData = {
                // title: 'Let’s Cook Together!',
                // text: `I spent ${formatTime(totalTime)} cooking in the Pot.`,
                // url: `${window.location.origin}/room/${roomId}`,
                files: [new File([blob], 'share.jpeg', { type: 'image/jpeg' })],
                };
        
                if (navigator.share) {
                try {
                    await navigator.share(shareData);
                } catch (error) {
                    console.log('Cancel Share');
                }
                }
            }, 'image/jpeg', 1.0);
            } catch (error) {
            console.error('Error sharing:', error);
            }
        };
    // const handleShare = async () => {
    //     try {
    //         const cookingContainer = document.getElementById('cooking');

    //         if (!cookingContainer) {
    //             throw new Error('Cooking container not found');
    //         }
    //         cookingContainer.style.fontFamily = 'Jua';
    //         const blob = await domtoimage.toBlob(cookingContainer);

    //         const shareData = {
    //             files: [new File([blob], 'share.png', { type: 'image/png' })],
    //         };

    //         if (navigator.share) {
    //             try {
    //                 await navigator.share(shareData);
    //             } catch (error) {
    //                 console.log('Cancel Share');
    //             }
    //         }
    //     } catch (error) {
    //         console.error('Error sharing:', error);
    //     }
    // };


    return(
        <div id="cooking">
            <span className="content" style={{marginTop: '3rem'}}>You have been working hard for</span>
            <span className="content-big">
                {formatTime(totalTime)}
            </span>
            <div className="cooking-img">
                <object type="image/svg+xml" data={Mushrooms} aria-label="Mushrooms" className="cooking-ingredient">
                    <img src={Mushrooms} alt="" />
                </object>
                <img
                    className="cooking-pot"
                    src={Pot}
                    alt=""
                />
                {/* <object type="image/svg+xml" data={Logo} aria-label="LogoCat" className="cooking-cat">
                    <img src={Logo} alt="" />
                </object> */}
                {/* <img className="cooking-star1" src={Star} alt="" /> */}
                <img className="cooking-star4" src={Star} alt="" />
                <img className="cooking-star3" src={Star} alt="" />
            </div>
            <div className='btn-group'>
                <Link to={`/room/${roomId}`} className="back-btn">Back to Pot</Link>
                <IconButton
                    aria-label="share"
                    className='share-btn'
                    onClick={handleShare}
                >
                    <ShareOutlinedIcon
                        fontSize="large"
                        sx={{
                            color: '#36423C',
                            stroke: "#36423C",
                            strokeWidth: 1
                        }}
                    />
                </IconButton>
            </div>
        </div>
    );
};

export default CookingDone;