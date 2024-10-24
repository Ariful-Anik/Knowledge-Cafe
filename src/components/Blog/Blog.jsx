import PropTypes from 'prop-types'; // ES6
import { FaBookmark } from "react-icons/fa";



const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {

    const {title, cover, reading_time, author, posted_date, author_img,hashtags} = blog;

    return (
        <div className='mb-20 space-y-3'>
            <img className='w-full mb-8' src= {cover} alt= {`cover of the title ${title}`} />
            <div className='flex justify-between mb-4 space-y-3'>
                <div className='flex'>
                    <img className='w-14' src= {author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p> {posted_date} </p>
                    </div>
                </div>
                <div>
                    <span>{reading_time}</span>
                    <button onClick={() => handleAddToBookmark(blog)} className='ml-2'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash,idx) => <span className='' key={idx}><a href="">{hash}</a></span>)
                }
            </p>
            <button 
            onClick={()=> handleMarkAsRead(reading_time)}
            className='text-purple-600 font-bold'>Mark As Read
            </button>
        </div>
    );
};


Blog.propTypes = {

    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
} 
export default Blog;