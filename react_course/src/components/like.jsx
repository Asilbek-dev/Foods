import {AiFillHeart,AiOutlineHeart} from "react-icons/ai"
const Like = ({liked,onToggleKike}) => {
    const Icon = liked ? AiFillHeart : AiOutlineHeart;
    return (
        <Icon
        size = '2rem' color = '#ff2525' onClick={onToggleKike} className = "like-icon mr-2"        
        />
    )
}
export default Like;