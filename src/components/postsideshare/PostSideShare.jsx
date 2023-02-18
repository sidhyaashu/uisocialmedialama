import './PostSideShare.scss'
import img1 from '../../images/img1.jpg'
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import { useRef, useState } from 'react';
import ClearIcon from '@mui/icons-material/Clear';

const PostSideShare = () => {
    const [image,setImage] = useState(null)
    const ImageRef = useRef()

    const onImageChange =(event)=>{
        if(event.target.files && event.target.files[0]){
            let img = event.target.files[0];
            setImage({
                image: URL.createObjectURL(img),
            });
        }
    }
  return (
    <div className='postsideshare'>
        <div className="profileInfo">
            <img src={img1} alt="img" />
        <div>
            <input type="text" />
        </div>
      </div>
      <div className="shareOptions">
        <div className="options" style={{color:"lightgreen"}}
        onClick={()=>ImageRef.current.click()}
        >
            <AddPhotoAlternateOutlinedIcon/>
            <span>Photo</span>
        </div>
        <div className="options" style={{color:"purple"}} >
            <PlayCircleOutlinedIcon/>
            <span>Play</span>
        </div>
        <div className="options" style={{color:"red"}} >
            <LocationOnOutlinedIcon/>
            <span>Location</span>
        </div>
        <div className="options" style={{color:"orange"}} >
            <CalendarMonthOutlinedIcon/>
            <span>Secudle</span>
        </div>
        <button>
            share
        </button>
        <div style={{display:"none"}}>
            <input type="file" name="myImage" onChange={onImageChange} ref={ImageRef} />
        </div>
      </div>
      {image && (
        <div className="preViewImage">
            <img src={image.image} alt="no image" />
            <div onClick={()=>setImage(null)}>
               <ClearIcon/> 
            </div>
        </div>
      )}
    </div>
  )
}

export default PostSideShare
