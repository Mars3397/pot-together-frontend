import './IngredientsViews.css';

export interface IngredientsBoxProps {
    color: string;
    time: string;
    images: string[];
}

export const IngredientsBox = (props: IngredientsBoxProps) => {
    const {color, time, images} = props;
    return (
        <div className="ingredients-box">
            <div className="time-text" style={{color: `${color}`}}>{time}</div>
            <div className="icon-container">
                {images.map((image, index) => {
                    return (
                        <div className="icon">
                            <img src={image} alt="ingredient" />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default IngredientsBox;