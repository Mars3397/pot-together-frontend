import { formatTime } from 'utils';
import { useState, useEffect } from 'react';
import { Link, useParams, useLocation  } from "react-router-dom"
import IconButton from '@mui/material/IconButton'
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import Mushrooms from 'assets/Mushrooms.svg';
import Tomato from 'assets/Tomato.svg'

import Star from 'assets/Star.svg';
import Logo from 'assets/Logo.svg'
import SharePage from 'assets/SharePage.svg'
import './Cooking.css';


const CookingDone: React.FC = () => {
    const location = useLocation();
    const totalTime = location.state?.totalTime;
    const foodID = location.state?.foodID;
    const { roomId } = useParams();
    const [modifiedSvg, setModifiedSvg] = useState<string | null>(null);
    const IngredientList = [["Mushrooms", Mushrooms], ["Tomato", Tomato]]
    const ingredient = IngredientList[foodID][0];
    const ingredientSvg = IngredientList[foodID][1];
    useEffect(() => {
        const svgObject = document.getElementById('SharePage') as HTMLObjectElement;
        
        const handleLoad = () => {
            if (svgObject !== null && svgObject.contentDocument) {
                const svgDoc = svgObject.contentDocument;
                const s = svgDoc.querySelector('svg');
                const tspanElement = svgDoc.querySelector('tspan');
    
            if (s && tspanElement) {
                tspanElement.textContent = formatTime(totalTime);
                tspanElement.setAttribute('style', 'font-weight: bold');
                setModifiedSvg(new XMLSerializer().serializeToString(svgDoc))
                }
            }
        };
    
        svgObject?.addEventListener('load', handleLoad);

        return () => {
            svgObject?.removeEventListener('load', handleLoad);
        };
      }, [totalTime]);

    const handleShare = async () => {
        try {
            if (modifiedSvg) {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                if (!ctx) {
                    throw new Error('Canvas context is null');
                }
        
                // Ensure SVG is loaded before drawing
                const svgBlob = new Blob([modifiedSvg], { type: 'image/svg+xml' });
                const svgUrl = URL.createObjectURL(svgBlob);
                const svgImage = new Image();
                
                const ratio = window.devicePixelRatio || 1;
                // Set canvas size based on SVG size
                canvas.width = 390 * ratio;
                canvas.height = 732 * ratio;
                canvas.style.width = '390px';
                canvas.style.height = '732px';
        
                // Draw SVG on the canvas
                await new Promise(resolve => {
                    svgImage.onload = resolve;
                    svgImage.src = svgUrl;
                });

                ctx.drawImage(svgImage, 0, 0, canvas.width, canvas.height);
                ctx.scale(ratio, ratio)
                // Convert the canvas content to a Blob
                canvas.toBlob(async (blob) => {
                    if (!blob) {
                        throw new Error('Blob is null');
                    }
            
                    const shareData = {
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
          } else {
                console.error('Modified SVG is undefined');
          }
        } catch (error) {
            console.error('Error sharing:', error);
        }
      };

    return(
        <div id="cooking">
            <span className="content" style={{marginTop: '3rem'}}>You have been working hard for</span>
            <span className="content-big">
                {formatTime(totalTime)}
            </span>
            <div className="cooking-img">
                <object type="image/svg+xml" data={ingredientSvg} aria-label={ingredient} className="cooking-ingredient">
                    <img src={ingredientSvg} alt="" />
                </object>
                <object type="image/svg+xml" data={Logo} aria-label="LogoCat" className="cooking-cat">
                    <img src={Logo} alt="" />
                </object>
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

            <object 
                type="image/svg+xml" 
                data={SharePage} 
                aria-label="SharePage" 
                id='SharePage' 
                style={{ position: 'absolute', left: '-9999px', top: '-9999px', width: '1px', height: '1px' }}>
            </object>
        </div>
    );
};

export default CookingDone;