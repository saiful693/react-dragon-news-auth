import { Link } from "react-router-dom";


const NewsCard = ({ news }) => {
    const { title, details, image_url, _id } = news;
    return (
        <div className="card w-full bg-base-100 shadow-xl p-6 border mb-8">
            <h2 className="card-title mb-4">
                {title}
            </h2>
            <figure><img src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
                {
                    details.length > 200 ?
                        <p>{details.slice(0, 200)} <Link 
                        to={`/news/${_id}`}
                        className="text-orange-300 font-bold">Read More...</Link></p>
                        : <p>{details}</p>
                }
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;