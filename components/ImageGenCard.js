import Image from "next/image";
import moment from "moment";

export default function ImageGenCard({ imageURL, prompt, createdAt }) {
    return (
        <div className="shadow-sm rounded-md overflow-hidden bg-white mb-4">
            <div className="aspect-square relative">
                <img
                    src={imageURL}
                    alt={prompt}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="p-4">
                <h3 className="text-lg mb-2">{prompt}</h3>
                <p className="text-green-600 text-sm">
                    {moment(createdAt).format("YYYY年MM月DD日")}
                </p>
            </div>
        </div>
    )
}