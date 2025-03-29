import moment from 'moment';

export default function VisionResultCard({ result }) {
    const { description, relatedWords, zhWords } = result.payload;
    const wordItems = relatedWords.map((word, idx) => {
        return (
            <div className="p-3 border-2 border-slate-300 rounded-md" key={idx}>
                <h3 className="text-lg font-bold text-slate-700">{word}</h3>
                <p className="text-slate-400 mt-3">{zhWords[idx]}</p>
            </div>
        )
    });

    return (
        <div className="bg-white shadow-sm p-4 rounded-xl my-3">
            <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">圖片描述：</h3>
                <p className="text-gray-700">{description}</p>
            </div>
            <h3 className="text-lg font-semibold mb-2">相關單字：</h3>
            <div className="grid grid-cols-3 gap-4 mt-3">
                {wordItems}
            </div>
            <p className="mt-3 text-right text-slate-500">
                建立時間：{moment(result.createdAt).format("YYYY年MM月DD日 HH:mm:ss")}
            </p>
        </div>
    )
} 